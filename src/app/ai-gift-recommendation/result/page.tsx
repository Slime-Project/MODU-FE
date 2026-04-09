import { Metadata } from 'next';

import AiGiftRecommendationResult from '@/pages/AiGiftRecommendationResult';

export const metadata: Metadata = {
  title: 'AI 선물 추천 결과'
};

export default function page() {
  return <AiGiftRecommendationResult />;
}
