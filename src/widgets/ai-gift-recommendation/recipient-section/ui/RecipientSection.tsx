import { useEffect, useState } from 'react';

import {
  AGE_GROUPS,
  AGE_PHASES,
  GENDERS,
  RELATIONS
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
import Input from '@/shared/ui/Input';
import SingleTagSelector from '@/shared/ui/SingleTagSelector';
import FieldsContainer from '@/widgets/ai-gift-recommendation/ui/FieldsContainer';
import FieldWrap from '@/widgets/ai-gift-recommendation/ui/FieldWrap';
import SectionTitle from '@/widgets/ai-gift-recommendation/ui/SectionTitle';

export default function RecipientSection({
  updateGender,
  updateAgeGroup,
  updateAgePhase,
  updateRelation,
  updateOtherRelation,
  gender,
  ageGroup,
  agePhase,
  relation,
  otherRelation
}: {
  updateGender: UpdateTag<Gender>;
  updateAgeGroup: UpdateTag<AgeGroup>;
  updateAgePhase: UpdateTag<AgePhase>;
  updateRelation: UpdateTag<Relation>;
  updateOtherRelation: (value: string) => void;
  gender: Gender | null;
  ageGroup: AgeGroup | null;
  agePhase: AgePhase | null;
  relation: Relation | null;
  otherRelation: string;
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const allSelected = gender && ageGroup && agePhase && relation;

    if (!allSelected) {
      setDisabled(true);
      return;
    }

    if (relation === '기타') {
      setDisabled(!otherRelation);
    } else {
      setDisabled(false);
    }
  }, [gender, ageGroup, agePhase, relation, otherRelation]);

  return (
    <section>
      <SectionTitle title="선물할 상대방에 대해 알려주세요!" />
      <FieldsContainer>
        <FieldWrap title="상대방의 성별">
          <SingleTagSelector name="gender" tags={GENDERS} updateTag={updateGender} />
        </FieldWrap>
        <FieldWrap title="상대방의 연령대">
          <SingleTagSelector name="ageGroup" tags={AGE_GROUPS} updateTag={updateAgeGroup} />
          <SingleTagSelector
            className="mt-5"
            name="agePhase"
            tags={AGE_PHASES}
            updateTag={updateAgePhase}
          />
        </FieldWrap>
        <FieldWrap title="상대방과 나의 관계">
          <SingleTagSelector name="relation" tags={RELATIONS} updateTag={updateRelation} />
          {relation === '기타' && (
            <Input
              className="mt-5 w-36"
              size="xs"
              placeholder="어떤 사이인가요?"
              value={otherRelation}
              maxLength={12}
              onChange={e => updateOtherRelation(e.target.value)}
              required
            />
          )}
        </FieldWrap>
      </FieldsContainer>
      <BottomBtn disabled={disabled} onClick={() => changeHash('gift')}>
        다음
      </BottomBtn>
    </section>
  );
}
