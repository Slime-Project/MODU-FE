import { render, fireEvent } from '@testing-library/react';

import ExtraSection from './ExtraSection';

jest.mock('@/widgets/ai-gift-recommendation-sections/ui/common');

describe('ExtraSection', () => {
  it('calls updateDescription when input changes', () => {
    const mockedUpdateDescription = jest.fn();
    const description = 'initial';
    const newDescription = 'new';

    const { getByDisplayValue } = render(
      <ExtraSection updateDescription={mockedUpdateDescription} description={description} />
    );

    const input = getByDisplayValue(description);
    fireEvent.change(input, { target: { value: newDescription } });

    expect(mockedUpdateDescription).toHaveBeenCalledWith(newDescription);
  });
});
