import { render, screen, fireEvent } from '@testing-library/react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation/model/consts';

import GiftSection from './GiftSection';

jest.mock('@/widgets/ai-gift-recommendation-sections/ui/common', () => ({
  ...jest.requireActual('@/widgets/ai-gift-recommendation-sections/ui/common'),
  SectionTitle: jest.fn()
}));
jest.mock('@/shared/ui/SingleTagSelector');

describe('GiftSection', () => {
  it('Enables the button when all fields are valid', () => {
    render(
      <GiftSection
        updateMinPrice={() => {}}
        updateMaxPrice={() => {}}
        updateCharacter={() => {}}
        minPrice="0"
        maxPrice="1"
        character="재미있는"
      />
    );

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('disables the button if any field is missing', () => {
    render(
      <GiftSection
        updateMinPrice={() => {}}
        updateMaxPrice={() => {}}
        updateCharacter={() => {}}
        minPrice=""
        maxPrice="1"
        character="재미있는"
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls updateValue when input changes', () => {
    const mockedUpdateMinPrice = jest.fn();
    const minPrice = '0';
    const newMinPrice = '1';

    const { getByDisplayValue } = render(
      <GiftSection
        updateMinPrice={mockedUpdateMinPrice}
        updateMaxPrice={() => {}}
        updateCharacter={() => {}}
        minPrice={minPrice}
        maxPrice="2"
        character="재미있는"
      />
    );

    const minPriceInput = getByDisplayValue(minPrice);
    fireEvent.change(minPriceInput, { target: { value: newMinPrice } });

    expect(mockedUpdateMinPrice).toHaveBeenCalledWith(newMinPrice);
  });

  it('does not call updateValue if rangeOverflow is true', () => {
    const mockedUpdateMinPrice = jest.fn();
    const minPrice = '0';

    const { getByDisplayValue } = render(
      <GiftSection
        updateMinPrice={mockedUpdateMinPrice}
        updateMaxPrice={() => {}}
        updateCharacter={() => {}}
        minPrice={minPrice}
        maxPrice="2"
        character="재미있는"
      />
    );

    const minPriceInput = getByDisplayValue(minPrice);
    const minPriceMax = minPriceInput.getAttribute('max');
    fireEvent.change(minPriceInput, { target: { value: `${minPriceMax}0` } });

    expect(mockedUpdateMinPrice).not.toHaveBeenCalled();
  });

  it('go next section when the button is clicked', () => {
    render(
      <GiftSection
        updateMinPrice={() => {}}
        updateMaxPrice={() => {}}
        updateCharacter={() => {}}
        minPrice="0"
        maxPrice="1"
        character="재미있는"
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.hash).toBe(`#${AI_GIFT_RECOMMENDATION_HASHES[2]}`);
  });

  it('swaps minPrice and maxPrice if minPrice is greater than maxPrice', () => {
    const mockedUpdateMinPrice = jest.fn();
    const mockedUpdateMaxPrice = jest.fn();
    const minPrice = '2';
    const maxPrice = '1';

    render(
      <GiftSection
        updateMinPrice={mockedUpdateMinPrice}
        updateMaxPrice={mockedUpdateMaxPrice}
        updateCharacter={() => {}}
        minPrice={minPrice}
        maxPrice={maxPrice}
        character="재미있는"
      />
    );

    const button = screen.getByRole('button', { name: '다음' });
    fireEvent.click(button);

    expect(mockedUpdateMinPrice).toHaveBeenCalledWith(maxPrice);
    expect(mockedUpdateMaxPrice).toHaveBeenCalledWith(minPrice);
  });
});
