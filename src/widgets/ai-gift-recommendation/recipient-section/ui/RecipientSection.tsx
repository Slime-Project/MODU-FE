import { useEffect, useState } from 'react';

import {
  ageGroups,
  agePhases,
  genders,
  relations
} from '@/entities/ai-gift-recommendation/model/consts';
import {
  AgeGroup,
  AgePhase,
  Gender,
  Relation
} from '@/entities/ai-gift-recommendation/model/types';
import UpdateTag from '@/shared/lib/hooks/types';
import changeHash from '@/shared/lib/utils/window';
import BottomBtn from '@/shared/ui/BottomBtn';
import SingleTagSelector from '@/shared/ui/SingleTagSelector';
import FieldsContainer from '@/widgets/ai-gift-recommendation/ui/FieldsContainer';
import FieldWrap from '@/widgets/ai-gift-recommendation/ui/FieldWrap';
import SectionTitle from '@/widgets/ai-gift-recommendation/ui/SectionTitle';

export default function RecipientSection({
  updateGender,
  updateAgeGroup,
  updateAgePhase,
  updateRelation,
  gender,
  ageGroup,
  agePhase,
  relation
}: {
  updateGender: UpdateTag<Gender>;
  updateAgeGroup: UpdateTag<AgeGroup>;
  updateAgePhase: UpdateTag<AgePhase>;
  updateRelation: UpdateTag<Relation>;
  gender: Gender | null;
  ageGroup: AgeGroup | null;
  agePhase: AgePhase | null;
  relation: Relation | null;
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!(gender && ageGroup && agePhase && relation));
  }, [gender, ageGroup, agePhase, relation]);

  return (
    <section>
      <SectionTitle title="선물할 상대방에 대해 알려주세요!" />
      <FieldsContainer>
        <FieldWrap title="상대방의 성별">
          <SingleTagSelector name="gender" tags={genders} updateTag={updateGender} />
        </FieldWrap>
        <FieldWrap title="상대방의 연령대">
          <SingleTagSelector name="ageGroup" tags={ageGroups} updateTag={updateAgeGroup} />
          <SingleTagSelector
            className="mt-5"
            name="agePhase"
            tags={agePhases}
            updateTag={updateAgePhase}
          />
        </FieldWrap>
        <FieldWrap title="상대방과 나의 관계">
          <SingleTagSelector name="relation" tags={relations} updateTag={updateRelation} />
        </FieldWrap>
      </FieldsContainer>
      <BottomBtn disabled={disabled} onClick={() => changeHash('gift')}>
        다음
      </BottomBtn>
    </section>
  );
}
