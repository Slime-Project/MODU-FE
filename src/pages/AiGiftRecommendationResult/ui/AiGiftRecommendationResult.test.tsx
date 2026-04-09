import { notFound } from 'next/navigation';

import { render, screen } from '@testing-library/react';

import { useAiGiftRecommendationStore } from '@/entities/ai-gift-recommendation';
import { AiGiftRecommendationRes } from '@/entities/ai-gift-recommendation/api/types';
import Tag from '@/shared/ui/Tag';
import { ProductListBox, extractProductProps } from '@/widgets/ProductListBox';

import AiGiftRecommendationResult from '.';

jest.mock('next/navigation');
jest.mock('swiper/react', () => ({
  Swiper: jest.fn(),
  SwiperSlide: jest.fn()
}));
jest.mock('@/entities/ai-gift-recommendation');
jest.mock('@/shared/ui/Tag');
jest.mock('@/shared/ui/TopBar');
jest.mock('@/widgets/ProductCard');
jest.mock('@/widgets/ProductListBox');

describe('AiGiftRecommendationResult', () => {
  const aiGiftRecommendation = {
    gifts: [
      {
        keyword: 'keyword',
        items: [
          { id: 1, img: '/gift1.jpg', link: '/1', title: 'Gift1', price: 10000 },
          { id: 2, img: '/gift2.jpg', link: '/2', title: 'Gift2', price: 10000 }
        ]
      }
    ],
    tags: ['tag1']
  } as AiGiftRecommendationRes;

  it('renders title correctly', () => {
    jest.mocked(useAiGiftRecommendationStore).mockReturnValue({
      aiGiftRecommendation
    });
    render(<AiGiftRecommendationResult />);
    expect(screen.getByText(aiGiftRecommendation.gifts[0].keyword)).toBeInTheDocument();
  });

  it('calls tags correctly', () => {
    jest.mocked(useAiGiftRecommendationStore).mockReturnValue({
      aiGiftRecommendation
    });
    render(<AiGiftRecommendationResult />);
    aiGiftRecommendation.tags.forEach(tag => {
      expect(Tag).toHaveBeenCalledWith(
        expect.objectContaining({ children: `#${tag}` }),
        expect.anything()
      );
    });
  });

  it('calls notFound when useAiGiftRecommendationStore return aiGiftRecommendation is null', () => {
    jest.mocked(useAiGiftRecommendationStore).mockReturnValue({
      aiGiftRecommendation: null
    });
    render(<AiGiftRecommendationResult />);
    expect(notFound).toHaveBeenCalled();
  });

  it('renders ProductListBox with current products and keyword', () => {
    jest.mocked(useAiGiftRecommendationStore).mockReturnValue({
      aiGiftRecommendation
    });
    render(<AiGiftRecommendationResult />);
    expect(ProductListBox).toHaveBeenCalledWith(
      expect.objectContaining({
        products: extractProductProps(aiGiftRecommendation.gifts[0].items.slice(1)),
        keyword: aiGiftRecommendation.gifts[0].keyword
      }),
      {}
    );
  });
});
