import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const wishBtnTheme = {
  size: {
    sm: 'w-4',
    md: 'w-5',
    lg: 'w-6'
  }
};

export default function WishBtn({
  size,
  color,
  isWished,
  toggleWish,
  className = ''
}: {
  size: keyof typeof wishBtnTheme.size;
  color: 'gray' | 'white';
  isWished: boolean;
  toggleWish: () => void;
  className?: string;
}) {
  const router = useRouter();
  const handleClick = () => {
    // 로그인 여부
    if (true) {
      toggleWish();
    } else {
      router.push('/login');
    }
  };

  return (
    <button
      type="button"
      className={`${wishBtnTheme.size[size]} box-content ${className}`}
      onClick={handleClick}
    >
      <Image
        width={24}
        height={24}
        src={isWished ? `/svgs/wish-fill.svg` : `/svgs/wish-${color}.svg`}
        alt={isWished ? '위시리스트에 저장' : '위시리스트에서 삭제'}
      />
    </button>
  );
}
