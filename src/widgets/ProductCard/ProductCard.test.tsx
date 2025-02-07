import Image from 'next/image';

import { render, screen } from '@testing-library/react';

import PrimaryLink from '@/shared/ui/PrimaryLink';
import ProductWishBtn from '@/widgets/ProductWishBtn';

import ProductCard from '.';

jest.mock('next/image', () => jest.fn());
jest.mock('@/shared/ui/PrimaryLink');
jest.mock('@/widgets/ProductWishBtn');

describe('ProductCard', () => {
  it('calls Image with correct src', () => {
    const img = '/test.jpg';
    render(<ProductCard id={1} img={img} title="" price={0} link="/" />);
    expect(Image).toHaveBeenCalledWith(expect.objectContaining({ src: img }), expect.anything());
  });

  it('displays the title correctly', () => {
    const title = 'title';
    render(<ProductCard id={1} img="" title={title} price={0} link="/" />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('formats and displays the price correctly', () => {
    render(<ProductCard id={1} img="" title="" price={50000} link="/" />);
    expect(screen.getByText(/50,000원/)).toBeInTheDocument();
  });

  it('passes the id to ProductWishBtn', () => {
    const id = 1;
    render(<ProductCard id={id} img="" title="" price={0} link="/" />);
    expect(ProductWishBtn).toHaveBeenCalledWith(expect.objectContaining({ id }), expect.anything());
  });

  it('passes the link to the href of PrimaryLink', () => {
    const link = '/';
    render(<ProductCard id={0} img="" title="" price={0} link={link} />);
    expect(PrimaryLink).toHaveBeenCalledWith(
      expect.objectContaining({ href: link }),
      expect.anything()
    );
  });
});
