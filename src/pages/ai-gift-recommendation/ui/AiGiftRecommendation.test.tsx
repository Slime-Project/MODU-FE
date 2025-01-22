import { render } from '@testing-library/react';

import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import { RecipientSection } from '@/widgets/ai-gift-recommendation/recipient-section';

import AiGiftRecommendation from './AiGiftRecommendation';

jest.mock('@/shared/lib/hooks/useTagSelection');
jest.mock('@/shared/lib/hooks/useHash');
jest.mock('@/widgets/ai-gift-recommendation/recipient-section');

describe('AiGiftRecommendation', () => {
  beforeEach(() => {
    jest.mocked(useSingleTagSelection).mockReturnValue({
      tag: null,
      updateTag: jest.fn()
    });
  });

  it('should render RecipientSection when hash is "recipient"', () => {
    jest.mocked(useHash).mockReturnValue('recipient');
    render(<AiGiftRecommendation />);
    expect(RecipientSection).toHaveBeenCalled();
  });

  it('should not render RecipientSection when hash is not "recipient"', () => {
    jest.mocked(useHash).mockReturnValue('gift');
    render(<AiGiftRecommendation />);
    expect(RecipientSection).not.toHaveBeenCalled();
  });
});
