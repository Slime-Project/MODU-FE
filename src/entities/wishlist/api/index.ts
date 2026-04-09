import instance from '@/shared/api/instance';

export async function postProductWishlist(id: number) {
  await instance.post(`/wishlist/products/${id}`);
}

export async function deleteProductWishlist(id: number) {
  await instance.delete(`/wishlist/products/${id}`);
}
