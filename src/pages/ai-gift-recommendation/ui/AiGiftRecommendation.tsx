'use client';

import { useEffect, useState } from 'react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation/model/consts';
import { AiGiftRecommendationHash } from '@/entities/ai-gift-recommendation/model/types';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import calculatePercentage from '@/shared/lib/utils/math';
import ProgressBar from '@/shared/ui/ProgressBar';
import { TopBar } from '@/shared/ui/TopBar';
import {
  RecipientSection,
  Gender,
  AgeGroup,
  AgePhase,
  Relation
} from '@/widgets/ai-gift-recommendation/recipient-section';

export const getPercentage = (index: number) =>
  calculatePercentage(index + 1, AI_GIFT_RECOMMENDATION_HASHES.length + 1);

export default function AiGiftRecommendation() {
  const { tag: gender, updateTag: updateGender } = useSingleTagSelection<Gender>();
  const { tag: ageGroup, updateTag: updateAgeGroup } = useSingleTagSelection<AgeGroup>();
  const { tag: agePhase, updateTag: updateAgePhase } = useSingleTagSelection<AgePhase>();
  const { tag: relation, updateTag: updateRelation } = useSingleTagSelection<Relation>();

  const hash = useHash<AiGiftRecommendationHash>(AI_GIFT_RECOMMENDATION_HASHES);

  const [percentage, setPercentage] = useState(0);
  const [otherRelation, setOtherRelation] = useState('');
  const updateOtherRelation = (value: string) => {
    setOtherRelation(value);
  };

  useEffect(() => {
    const index = AI_GIFT_RECOMMENDATION_HASHES.findIndex(v => v === hash);
    setPercentage(getPercentage(index));
  }, [hash]);

  return (
    <>
      <TopBar title="AI 선물 추천" />
      <main>
        <ProgressBar percentage={percentage} />
        <form className="px-4 pb-20 pt-6">
          {hash === 'recipient' && (
            <RecipientSection
              updateGender={updateGender}
              updateAgeGroup={updateAgeGroup}
              updateAgePhase={updateAgePhase}
              updateRelation={updateRelation}
              updateOtherRelation={updateOtherRelation}
              gender={gender}
              ageGroup={ageGroup}
              agePhase={agePhase}
              relation={relation}
              otherRelation={otherRelation}
            />
          )}
        </form>
      </main>
    </>
  );
}
