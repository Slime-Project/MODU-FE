'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation';
import {
  Gender,
  AgeGroup,
  AgePhase,
  Character,
  Relation,
  AiGiftRecommendationHash
} from '@/entities/ai-gift-recommendation/types';
import useAiGiftRecommendation from '@/features/get-ai-gift-recommendation';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import calculatePercentage from '@/shared/lib/utils/math';
import BottomBtn from '@/shared/ui/BottomBtn';
import ProgressBar from '@/shared/ui/ProgressBar';
import StepLoading from '@/shared/ui/StepLoading';
import { TopBar } from '@/shared/ui/TopBar';
import {
  GiftSection,
  RecipientSection,
  ExtraSection
} from '@/widgets/ai-gift-recommendation-sections';

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

  const [otherRelation, setOtherRelation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [description, setDescription] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [step, setStep] = useState(0);

  const { isPending, mutate, error } = useAiGiftRecommendation();
  const hash = useHash<AiGiftRecommendationHash>(AI_GIFT_RECOMMENDATION_HASHES);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    const index = AI_GIFT_RECOMMENDATION_HASHES.findIndex(v => v === hash);
    setPercentage(getPercentage(index));
  }, [hash]);

  useEffect(() => {
    if (isPending) {
      setTimeout(() => {
        setStep(1);
      }, 1000);
      setTimeout(() => {
        setStep(2);
      }, 3000);
    }
  }, [isPending]);

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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (gender && ageGroup && agePhase && character && relation) {
      mutate(
        {
          gender,
          age: ageGroup,
          range: agePhase,
          relation: relation === '기타' ? otherRelation : relation,
          min: minPrice,
          max: maxPrice,
          character,
          description
        },
        {
          onSuccess: () => router.push('/ai-gift-recommendation/result')
        }
      );
    }
  };

  return (
    <>
      {!isPending && <TopBar title="AI 선물 추천" />}
      <main>
        {isPending ? (
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
                  <BottomBtn type="submit">AI에게 추천받기</BottomBtn>
                </>
              )}
            </form>
          </>
        )}
      </main>
    </>
  );
}
