import { notFound } from 'next/navigation';

import { render, screen } from '@testing-library/react';

import { useAiGiftRecommendationStore } from '@/entities/ai-gift-recommendation';
import { AiGiftRecommendationRes } from '@/entities/ai-gift-recommendation/api/types';
import Tag from '@/shared/ui/Tag';

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

describe('AiGiftRecommendationResult', () => {
  const aiGiftRecommendation = {
    gifts: [
      {
        keyword: 'keyword',
        items: [{ id: 1, img: '/gift1.jpg', link: '/', title: 'Gift', price: 10000 }]
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
});
