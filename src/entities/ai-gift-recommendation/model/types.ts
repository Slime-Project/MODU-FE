import { AiGiftRecommendationRes } from '@/entities/ai-gift-recommendation/api/types';

import { AI_GIFT_RECOMMENDATION_HASHES } from './consts';

export type AiGiftRecommendationHash = (typeof AI_GIFT_RECOMMENDATION_HASHES)[number];

export type AiGiftRecommendationState = {
  aiGiftRecommendation: AiGiftRecommendationRes | null;
  updateAiGiftRecommendation: (data: AiGiftRecommendationRes | null) => void;
};
