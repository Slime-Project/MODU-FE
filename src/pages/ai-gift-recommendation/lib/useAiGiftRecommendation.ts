import { useMutation } from '@tanstack/react-query';

import {
  useAiGiftRecommendationStore,
  getAiGiftRecommendation
} from '@/entities/ai-gift-recommendation';

export default function useAiGiftRecommendation() {
  const { updateAiGiftRecommendation } = useAiGiftRecommendationStore();

  const { isPending, error, mutate } = useMutation({
    mutationFn: getAiGiftRecommendation,
    onSuccess: updateAiGiftRecommendation
  });

  return { isPending, error, mutate };
}
