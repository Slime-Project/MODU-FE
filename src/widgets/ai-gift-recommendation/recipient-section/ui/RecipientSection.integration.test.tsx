import { render, screen, fireEvent } from '@testing-library/react';

import {
  ageGroups,
  agePhases,
  genders,
  relations
} from '@/entities/ai-gift-recommendation/model/consts';

import RecipientSection from './RecipientSection';

jest.mock('@/widgets/ai-gift-recommendation/ui/FieldsContainer');
jest.mock('@/widgets/ai-gift-recommendation/ui/FieldWrap');
jest.mock('@/widgets/ai-gift-recommendation/ui/SectionTitle');

describe('RecipientSection', () => {
  it('enables the button when all fields are selected', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        gender={genders[0]}
        ageGroup={ageGroups[0]}
        agePhase={agePhases[0]}
        relation={relations[0]}
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
        gender={null}
        ageGroup={ageGroups[0]}
        agePhase={agePhases[0]}
        relation={relations[0]}
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('go next section when the button is clicked', () => {
    render(
      <RecipientSection
        updateGender={() => {}}
        updateAgeGroup={() => {}}
        updateAgePhase={() => {}}
        updateRelation={() => {}}
        gender={genders[0]}
        ageGroup={ageGroups[0]}
        agePhase={agePhases[0]}
        relation={relations[0]}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.hash).toBe('#gift');
  });
});
