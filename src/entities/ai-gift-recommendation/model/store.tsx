import { create } from 'zustand';

import { AiGiftRecommendationState } from './types';

const useAiGiftRecommendationStore = create<AiGiftRecommendationState>(set => ({
  aiGiftRecommendation: null,
  updateAiGiftRecommendation: value => set({ aiGiftRecommendation: value })
}));

export default useAiGiftRecommendationStore;
