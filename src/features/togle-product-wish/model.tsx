import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { deleteProductWishlist, postProductWishlist } from '@/entities/wishlist/api';

export default function useProductWish(id: number, initialIsWished: boolean) {
  const [isWished, setIsWished] = useState(initialIsWished);

  const { error: postError, mutate: postMudate } = useMutation({
    mutationFn: postProductWishlist
  });
  const { error: deleteError, mutate: deleteMudate } = useMutation({
    mutationFn: deleteProductWishlist
  });

  const toggleWish = () => {
    if (isWished) {
      postMudate(id);
    } else {
      deleteMudate(id);
    }

    setIsWished(prev => !prev);
  };

  return { toggleWish, isWished, postError, deleteError };
}
