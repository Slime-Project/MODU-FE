import { Metadata } from 'next';

import AiGiftRecommendation from '@/pages/AiGiftRecommendation';

export const metadata: Metadata = {
  title: '통합 검색'
};

export default function page() {
  return <AiGiftRecommendation />;
}
