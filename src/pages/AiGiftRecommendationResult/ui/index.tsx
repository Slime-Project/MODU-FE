'use client';

import { notFound, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  AI_GIFT_RECOMMENDATION_HASHES,
  useAiGiftRecommendationStore
} from '@/entities/ai-gift-recommendation';
import Tag from '@/shared/ui/Tag';
import { RefreshTopBar } from '@/shared/ui/TopBar';
import ProductCard from '@/widgets/ProductCard';
import { ProductListBox, extractProductProps } from '@/widgets/ProductListBox';

import styles from './styles.module.css';

export default function AiGiftRecommendationResult() {
  const { aiGiftRecommendation } = useAiGiftRecommendationStore();
  const [curr, setCurr] = useState(0);
  const router = useRouter();

  const refresh = () => {
    router.push(`/ai-gift-recommendation#${AI_GIFT_RECOMMENDATION_HASHES[0]}`);
  };

  if (!aiGiftRecommendation) {
    notFound();
    return null;
  }

  return (
    <>
      <RefreshTopBar title="AI 선물 추천 결과" refresh={refresh} />
      <main className=" overflow-x-hidden">
        <h3 className="mb-7 mt-10 text-center text-xl font-bold">
          {aiGiftRecommendation.gifts[curr].keyword}
        </h3>
        <div className="m-auto mb-6 flex w-fit gap-2">
          {aiGiftRecommendation.tags.map(tag => (
            <Tag key={tag} size="sm">
              {`#${tag}`}
            </Tag>
          ))}
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => setCurr(activeIndex)}
          className={styles.swiper}
        >
          {aiGiftRecommendation.gifts.map((gift, i) => {
            const { id, img, link, title, price } = gift.items[0];

            return (
              <SwiperSlide
                key={gift.keyword}
                className={`${styles['swiper-slide']} duration-500 ${curr === i ? '' : styles.curr}`}
              >
                <ProductCard id={id} img={img} link={link} price={price} title={title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ProductListBox
          className="m-auto mt-6 w-2/3"
          products={extractProductProps(aiGiftRecommendation.gifts[curr].items.slice(1))}
          keyword={aiGiftRecommendation.gifts[curr].keyword}
        />
      </main>
    </>
  );
}
