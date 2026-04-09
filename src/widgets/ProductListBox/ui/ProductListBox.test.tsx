import Link from 'next/link';
import React from 'react';

import { render, screen } from '@testing-library/react';

import Product from '@/entities/product/model/types';

import ProductListBox, { extractProductProps } from '.';

jest.mock('next/image');
jest.mock('next/link', () => jest.fn());
jest.mock('@/widgets/ProductWishBtn');
jest.mock('@/shared/assets/svgs');

describe('extractProductProps', () => {
  it('should extract only id, img, title, and price from each product', () => {
    const products: Product[] = [
      {
        id: 1,
        img: 'img1.jpg',
        title: 'Product 1',
        price: 100,
        link: '/',
        seller: '',
        createdAt: '',
        wishedCount: 0,
        naverProductId: '',
        averageRating: 0
      }
    ];
    const result = extractProductProps(products);
    expect(result).toEqual([
      {
        id: products[0].id,
        img: products[0].img,
        title: products[0].title,
        price: products[0].price
      }
    ]);
  });
});

describe('ProductListBox Component', () => {
  const products = [
    { id: 1, img: 'img1.jpg', title: 'Product 1', price: 100 },
    { id: 2, img: 'img2.jpg', title: 'Product 2', price: 200 }
  ];
  const keyword = 'keyword';

  it('renders an article element with the provided className', () => {
    const { container } = render(
      <ProductListBox products={products} keyword={keyword} className="border" />
    );
    expect(container.firstChild).toHaveClass('border');
  });

  it('renders a list item for each product', () => {
    render(<ProductListBox products={products} keyword={keyword} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(products.length);
  });

  it('renders each product link with the correct href', () => {
    render(<ProductListBox products={products} keyword={keyword} />);
    products.forEach(product => {
      expect(Link).toHaveBeenCalledWith(
        expect.objectContaining({ href: `/products/${product.id}` }),
        expect.anything()
      );
    });
  });

  it('renders the "더 둘러보기" link with the correct href', () => {
    render(<ProductListBox products={products} keyword={keyword} />);
    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({ href: `/products?query=${keyword}` }),
      expect.anything()
    );
  });
});
