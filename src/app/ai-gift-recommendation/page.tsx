import { Metadata } from 'next';

import AiGiftRecommendation from '@/pages/AiGiftRecommendation';

export const metadata: Metadata = {
  title: 'AI 선물 추천'
};

export default function page() {
  return <AiGiftRecommendation />;
}
