import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';

import { render } from '@testing-library/react';

import {
  AI_GIFT_RECOMMENDATION_HASHES,
  useAiGiftRecommendationStore
} from '@/entities/ai-gift-recommendation';
import { AiGiftRecommendationRes } from '@/entities/ai-gift-recommendation/api/types';

import AiGiftRecommendationResult from '.';

jest.mock('next/navigation');
jest.mock('swiper/react', () => ({
  Swiper: jest.fn(),
  SwiperSlide: jest.fn()
}));
jest.mock('@/entities/ai-gift-recommendation', () => ({
  ...jest.requireActual('@/entities/ai-gift-recommendation'),
  useAiGiftRecommendationStore: jest.fn()
}));
jest.mock('@/shared/ui/Tag');
jest.mock('@/widgets/ProductCard');

describe('AiGiftRecommendationResult', () => {
  const router: AppRouterInstance = {
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn()
  };

  beforeEach(() => {
    const aiGiftRecommendation = {
      gifts: [
        {
          keyword: 'keyword',
          items: [{ id: 1, img: '/gift1.jpg', link: '/', title: 'Gift', price: 10000 }]
        }
      ],
      tags: ['tag1']
    } as AiGiftRecommendationRes;

    jest.mocked(useAiGiftRecommendationStore).mockReturnValue({
      aiGiftRecommendation
    });
    jest.mocked(useRouter).mockReturnValue(router);
  });

  it('calls refresh on RefreshTopBar button click', () => {
    const { getByAltText } = render(<AiGiftRecommendationResult />);
    getByAltText('refresh').click();
    expect(router.push).toHaveBeenCalledWith(
      `/ai-gift-recommendation#${AI_GIFT_RECOMMENDATION_HASHES[0]}`
    );
  });
});
