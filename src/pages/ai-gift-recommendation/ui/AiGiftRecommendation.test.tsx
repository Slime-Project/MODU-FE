import { fireEvent, render } from '@testing-library/react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation/model/consts';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import ProgressBar from '@/shared/ui/ProgressBar';
import { TopBar } from '@/shared/ui/TopBar';
import {
  GiftSection,
  RecipientSection,
  ExtraSection
} from '@/widgets/ai-gift-recommendation-sections';
import StepLoading from '@/widgets/stepLoading/ui';

import AiGiftRecommendation, { getPercentage } from './AiGiftRecommendation';

jest.mock('@/shared/lib/hooks/useTagSelection');
jest.mock('@/shared/lib/hooks/useHash');
jest.mock('@/shared/ui/TopBar');
jest.mock('@/shared/ui/ProgressBar');
jest.mock('@/widgets/stepLoading/ui');
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

  it('should render ExtraSection when hash is "extra"', () => {
    jest.mocked(useHash).mockReturnValue('extra');
    render(<AiGiftRecommendation />);
    expect(ExtraSection).toHaveBeenCalled();
  });

  it('should not render ExtraSection when hash is not "extra"', () => {
    jest.mocked(useHash).mockReturnValue('gift');
    render(<AiGiftRecommendation />);
    expect(ExtraSection).not.toHaveBeenCalled();
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

  it('should render TopBar if submit is not triggered', () => {
    render(<AiGiftRecommendation />);
    expect(TopBar).toHaveBeenCalled();
  });

  it('should render StepLoading if submit is triggered', () => {
    const { getByRole } = render(<AiGiftRecommendation />);
    const form = getByRole('form');
    fireEvent.submit(form);
    expect(StepLoading).toHaveBeenCalled();
  });
});
