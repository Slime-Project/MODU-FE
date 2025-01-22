import { ageGroups, agePhases, genders, relations } from './consts';

export type Gender = (typeof genders)[number];
export type AgeGroup = (typeof ageGroups)[number];
export type AgePhase = (typeof agePhases)[number];
export type Relation = (typeof relations)[number];
