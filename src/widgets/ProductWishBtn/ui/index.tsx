import { useEffect } from 'react';

import useProductsWishlist from '@/features/togle-product-wish';
import WishBtn, { wishBtnTheme } from '@/shared/ui/WishBtn';

export default function ProductWishBtn({
  size,
  color,
  id,
  initialIsWished,
  className
}: {
  size: keyof typeof wishBtnTheme.size;
  color: 'gray' | 'white';
  id: number;
  initialIsWished: boolean;
  className?: string;
}) {
  const { toggleWish, isWished, postError, deleteError } = useProductsWishlist(id, initialIsWished);

  useEffect(() => {
    if (postError) throw postError;
    if (deleteError) throw deleteError;
  }, [postError, deleteError]);

  return (
    <WishBtn
      size={size}
      color={color}
      isWished={isWished}
      toggleWish={toggleWish}
      className={className}
    />
  );
}
