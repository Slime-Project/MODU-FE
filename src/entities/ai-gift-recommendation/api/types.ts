import {
  GENDERS,
  AGE_GROUPS,
  AGE_PHASES,
  RELATIONS
} from '@/entities/ai-gift-recommendation/model/consts';
import Product from '@/entities/product/model/types';

export type Gender = (typeof GENDERS)[number];
export type AgeGroup = (typeof AGE_GROUPS)[number];
export type AgePhase = (typeof AGE_PHASES)[number];
export type Relation = (typeof RELATIONS)[number];
export type Character = '재미있는' | '로맨틱한' | '실용적인' | '심플한';

export type AiGiftRecommendationReq = {
  gender: Gender;
  age: AgeGroup;
  range: AgePhase;
  relation: string;
  min: string;
  max: string;
  character: Character;
  description?: string;
};

export type AiGiftRecommendationRes = {
  tags: string[];
  gifts: {
    keyword: string;
    items: Product[];
  }[];
};
