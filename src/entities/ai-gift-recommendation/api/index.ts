import instance from '@/shared/api/instance';

import { AiGiftRecommendationReq, AiGiftRecommendationRes } from './types';

export default async function getAiGiftRecommendation(
  params: AiGiftRecommendationReq
): Promise<AiGiftRecommendationRes> {
  const { data } = await instance.get('/open-ai', { params });
  return data;
}
