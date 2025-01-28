import { render } from '@testing-library/react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation/model/consts';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import ProgressBar from '@/shared/ui/ProgressBar';
import { GiftSection, RecipientSection } from '@/widgets/ai-gift-recommendation-sections';

import AiGiftRecommendation, { getPercentage } from './AiGiftRecommendation';

jest.mock('@/shared/lib/hooks/useTagSelection');
jest.mock('@/shared/lib/hooks/useHash');
jest.mock('@/shared/ui/TopBar');
jest.mock('@/shared/ui/ProgressBar');
jest.mock('@/widgets/ai-gift-recommendation-sections');

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

  it('should render GiftSection when hash is "gift"', () => {
    jest.mocked(useHash).mockReturnValue('gift');
    render(<AiGiftRecommendation />);
    expect(GiftSection).toHaveBeenCalled();
  });

  it('should not render GiftSection when hash is not "gift"', () => {
    jest.mocked(useHash).mockReturnValue('extra');
    render(<AiGiftRecommendation />);
    expect(GiftSection).not.toHaveBeenCalled();
  });

  it('should render ProgressBar with 0% initially', () => {
    render(<AiGiftRecommendation />);
    const { calls } = jest.mocked(ProgressBar).mock;
    expect(calls[0][0]).toEqual(expect.objectContaining({ percentage: 0 }));
  });

  it('should update ProgressBar percentage on hash change', () => {
    jest.mocked(useHash).mockReturnValue(AI_GIFT_RECOMMENDATION_HASHES[0]);
    render(<AiGiftRecommendation />);
    const { calls } = jest.mocked(ProgressBar).mock;
    expect(calls[1][0]).toEqual(expect.objectContaining({ percentage: getPercentage(0) }));
  });
});
