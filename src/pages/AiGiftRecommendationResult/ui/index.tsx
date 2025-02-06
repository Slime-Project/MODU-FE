'use client';

import { useAiGiftRecommendationStore } from '@/entities/ai-gift-recommendation';

export default function AiGiftRecommendationResult() {
  const { aiGiftRecommendation } = useAiGiftRecommendationStore();
  console.log(aiGiftRecommendation);
  return <main />;
}
