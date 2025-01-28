import {
  AGE_GROUPS,
  AGE_PHASES,
  AI_GIFT_RECOMMENDATION_HASHES,
  GENDERS,
  RELATIONS
} from './consts';

export type Gender = (typeof GENDERS)[number];
export type AgeGroup = (typeof AGE_GROUPS)[number];
export type AgePhase = (typeof AGE_PHASES)[number];
export type Relation = (typeof RELATIONS)[number];

export type Character = '재미있는' | '로맨틱한' | '실용적인' | '심플한';

export type AiGiftRecommendationHash = (typeof AI_GIFT_RECOMMENDATION_HASHES)[number];
