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
import BottomBtn from '@/shared/ui/BottomBtn';
import ProgressBar from '@/shared/ui/ProgressBar';
import { TopBar } from '@/shared/ui/TopBar';
import {
  GiftSection,
  RecipientSection,
  ExtraSection
} from '@/widgets/ai-gift-recommendation-sections';
import StepLoading from '@/widgets/step-loading/ui/StepLoading';

export const getPercentage = (index: number) =>
  calculatePercentage(index + 1, AI_GIFT_RECOMMENDATION_HASHES.length + 1);

const steps = [
  ['상대방 분석 중...', '선물 분석하기', '알맞는 선물 고르기'],
  ['상대방 분석 완료', '선물 분석 중...', '알맞는 선물 고르기'],
  ['상대방 분석 완료', '선물 분석 완료', '알맞는 선물 고르는 중...'],
  ['상대방 분석 완료', '선물 분석 완료', '알맞는 선물 고르기 완료']
];

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
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const index = AI_GIFT_RECOMMENDATION_HASHES.findIndex(v => v === hash);
    setPercentage(getPercentage(index));
  }, [hash]);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 1000);
    setTimeout(() => {
      setStep(2);
    }, 2000);
    // api 작업 완료 시
    // setStep(3);
  }, []);

  const updateOtherRelation = (value: string) => {
    setOtherRelation(value);
  };
  const updateMinPrice = (value: string) => {
    setMinPrice(value);
  };
  const updateMaxPrice = (value: string) => {
    setMaxPrice(value);
  };
  const updateDescription = (value: string) => {
    setDescription(value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <>
      {!isLoading && <TopBar title="AI 선물 추천" />}
      <main>
        {isLoading ? (
          <StepLoading title="AI가 선물을 고민하고 있어요" step={step} steps={steps} />
        ) : (
          <>
            <ProgressBar percentage={percentage} />
            <form className="px-4 pb-20 pt-6" onSubmit={handleSubmit} name="선물 추천 조건">
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
              {hash === 'extra' && (
                <>
                  <ExtraSection updateDescription={updateDescription} description={description} />
                  <BottomBtn>AI에게 추천받기</BottomBtn>
                </>
              )}
            </form>
          </>
        )}
      </main>
    </>
  );
}
