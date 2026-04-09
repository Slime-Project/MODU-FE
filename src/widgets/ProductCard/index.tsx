import Image from 'next/image';

import PrimaryLink from '@/shared/ui/PrimaryLink';
import ProductWishBtn from '@/widgets/ProductWishBtn';

import styles from './styles.module.css';

export default function ProductCard({
  id,
  img,
  title,
  price,
  link
}: {
  id: number;
  img: string;
  title: string;
  price: number;
  link: string;
}) {
  const formattedPrice = price.toLocaleString();

  return (
    <article className={`box-shadow rounded-2xl p-4 pt-3 ${styles['card-wrap']}`}>
      <Image
        className="rounded-xl object-cover"
        width={386}
        height={322}
        src={img}
        alt="상품 이미지"
      />
      <div className="relative mt-3">
        <strong className="ellipsis mr-10 block text-xs font-normal">{title}</strong>
        <span className="mb-10 block text-xs font-bold">{formattedPrice}원</span>
        <ProductWishBtn
          size="sm"
          color="gray"
          id={id}
          initialIsWished={false}
          className="absolute right-0 top-0 rounded-full bg-white p-1.5 shadow"
        />
        <PrimaryLink size="xs" href={link} target="_blank">
          선물 보러가기
        </PrimaryLink>
      </div>
    </article>
  );
}
