'use client';

import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import {
  RecipientSection,
  Gender,
  AgeGroup,
  AgePhase,
  Relation
} from '@/widgets/ai-gift-recommendation/recipient-section';

export default function AiGiftRecommendation() {
  const { tag: gender, updateTag: updateGender } = useSingleTagSelection<Gender>();
  const { tag: ageGroup, updateTag: updateAgeGroup } = useSingleTagSelection<AgeGroup>();
  const { tag: agePhase, updateTag: updateAgePhase } = useSingleTagSelection<AgePhase>();
  const { tag: relation, updateTag: updateRelation } = useSingleTagSelection<Relation>();

  const hash = useHash();

  return (
    <main>
      <form className="px-4">
        {hash === 'recipient' && (
          <RecipientSection
            updateGender={updateGender}
            updateAgeGroup={updateAgeGroup}
            updateAgePhase={updateAgePhase}
            updateRelation={updateRelation}
            gender={gender}
            ageGroup={ageGroup}
            agePhase={agePhase}
            relation={relation}
          />
        )}
      </form>
    </main>
  );
}
