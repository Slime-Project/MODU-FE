import { render, screen, fireEvent } from '@testing-library/react';

import {
  AGE_GROUPS,
  AGE_PHASES,
  GENDERS,
  RELATIONS,
  AI_GIFT_RECOMMENDATION_HASHES
} from '@/entities/ai-gift-recommendation/model/consts';

import RecipientSection from './RecipientSection';

jest.mock('@/widgets/ai-gift-recommendation-sections/ui/common', () => ({
  ...jest.requireActual('@/widgets/ai-gift-recommendation-sections/ui/common'),
  SectionTitle: jest.fn()
}));
jest.mock('@/shared/ui/SingleTagSelector');

describe('RecipientSection', () => {
  it('enables the button when all fields are selected', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={GENDERS[0]}
        ageGroup={AGE_GROUPS[0]}
        agePhase={AGE_PHASES[0]}
        relation={RELATIONS[0]}
        otherRelation=""
      />
    );

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('enables the button when all fields and otherRelation is valid', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={GENDERS[0]}
        ageGroup={AGE_GROUPS[0]}
        agePhase={AGE_PHASES[0]}
        relation="기타"
        otherRelation="친척"
      />
    );

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('disables the button if any field is missing', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={null}
        ageGroup={AGE_GROUPS[0]}
        agePhase={AGE_PHASES[0]}
        relation={RELATIONS[0]}
        otherRelation=""
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('disables the button when relation is 기타 and otherRelation is invalid', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={GENDERS[0]}
        ageGroup={AGE_GROUPS[0]}
        agePhase={AGE_PHASES[0]}
        relation="기타"
        otherRelation=""
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders a textbox when relation is 기타', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={null}
        ageGroup={null}
        agePhase={null}
        relation="기타"
        otherRelation=""
      />
    );

    expect(screen.getByRole('textbox'));
  });

  it('does not render a textbox when relation is not 기타', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={null}
        ageGroup={null}
        agePhase={null}
        relation={RELATIONS[0]}
        otherRelation=""
      />
    );

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('calls updateOtherRelation when input changes', () => {
    const mockedUpdateOtherRelation = jest.fn();
    const otherRelation = 'initial';
    const newOtherRelation = 'new';

    const { getByDisplayValue } = render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={mockedUpdateOtherRelation}
        gender={null}
        ageGroup={null}
        agePhase={null}
        relation="기타"
        otherRelation={otherRelation}
      />
    );

    const input = getByDisplayValue(otherRelation);
    fireEvent.change(input, { target: { value: newOtherRelation } });

    expect(mockedUpdateOtherRelation).toHaveBeenCalledWith(newOtherRelation);
  });

  it('go next section when the button is clicked', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        updateOtherRelation={() => {}}
        gender={GENDERS[0]}
        ageGroup={AGE_GROUPS[0]}
        agePhase={AGE_PHASES[0]}
        relation={RELATIONS[0]}
        otherRelation=""
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.hash).toBe(`#${AI_GIFT_RECOMMENDATION_HASHES[1]}`);
  });
});
