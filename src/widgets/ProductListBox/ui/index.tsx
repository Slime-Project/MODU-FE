import Image from 'next/image';
import Link from 'next/link';

import Product from '@/entities/product/model/types';
import { ArrowForward } from '@/shared/assets/svgs';
import ProductWishBtn from '@/widgets/ProductWishBtn';

export const extractProductProps = (products: Product[]) => {
  return products.map(({ id, img, title, price }) => ({
    id,
    img,
    title,
    price
  }));
};

export default function ProductListBox({
  products,
  keyword,
  className = ''
}: {
  products: { id: number; title: string; price: number; img: string }[];
  keyword: string;
  className?: string;
}) {
  return (
    <article className={`box-shadow rounded-2xl px-4 pb-1 ${className}`}>
      <ul className="flex flex-col gap-4 border-b  border-gray-300 py-5">
        {products.map(({ id, title, price, img }) => (
          <li key={id}>
            <Link
              className="flex items-center gap-4"
              href={`/products/${id}`}
              onClick={e => {
                e.preventDefault();
                alert('준비 중인 기능입니다');
              }}
            >
              <Image
                className="aspect-square rounded-xl object-cover"
                src={img}
                alt="상품 이미지"
                width={56}
                height={56}
              />
              <div className="flex flex-col justify-center overflow-hidden">
                <strong className="ellipsis text-xs font-normal">{title}</strong>
                <span className="text-xs font-bold">{price.toLocaleString()}</span>
              </div>
              <ProductWishBtn
                className="ml-auto h-auto shrink-0 p-1"
                id={id}
                color="gray"
                size="sm"
                initialIsWished={false}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="relative flex w-fit gap-0.5 py-3 text-xs font-bold leading-none text-gray-600"
        href={`/products?query=${keyword}`}
        onClick={e => {
          e.preventDefault();
          alert('준비 중인 기능입니다');
        }}
      >
        {keyword} 더 둘러보기
        <ArrowForward fill="#9e9e9e" />
      </Link>
    </article>
  );
}
