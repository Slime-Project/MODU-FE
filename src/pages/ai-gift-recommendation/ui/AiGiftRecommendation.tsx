'use client';

import { useEffect, useState } from 'react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation/model/consts';
import {
  AgeGroup,
  AgePhase,
  AiGiftRecommendationHash,
  Character,
  Gender,
  Relation
} from '@/entities/ai-gift-recommendation/model/types';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import calculatePercentage from '@/shared/lib/utils/math';
import ProgressBar from '@/shared/ui/ProgressBar';
import { TopBar } from '@/shared/ui/TopBar';
import { GiftSection, RecipientSection } from '@/widgets/ai-gift-recommendation-sections';

export const getPercentage = (index: number) =>
  calculatePercentage(index + 1, AI_GIFT_RECOMMENDATION_HASHES.length + 1);

export default function AiGiftRecommendation() {
  const { tag: gender, updateTag: updateGender } = useSingleTagSelection<Gender>();
  const { tag: ageGroup, updateTag: updateAgeGroup } = useSingleTagSelection<AgeGroup>();
  const { tag: agePhase, updateTag: updateAgePhase } = useSingleTagSelection<AgePhase>();
  const { tag: relation, updateTag: updateRelation } = useSingleTagSelection<Relation>();
  const { tag: character, updateTag: updateCharacter } = useSingleTagSelection<Character>();

  const hash = useHash<AiGiftRecommendationHash>(AI_GIFT_RECOMMENDATION_HASHES);

  const [percentage, setPercentage] = useState(0);
  const [otherRelation, setOtherRelation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const updateOtherRelation = (value: string) => {
    setOtherRelation(value);
  };
  const updateMinPrice = (value: string) => {
    setMinPrice(value);
  };
  const updateMaxPrice = (value: string) => {
    setMaxPrice(value);
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
          {hash === 'gift' && (
            <GiftSection
              updateMinPrice={updateMinPrice}
              updateMaxPrice={updateMaxPrice}
              updateCharacter={updateCharacter}
              minPrice={minPrice}
              maxPrice={maxPrice}
              character={character}
            />
          )}
        </form>
      </main>
    </>
  );
}
