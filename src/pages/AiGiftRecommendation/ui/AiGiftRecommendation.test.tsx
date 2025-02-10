import { render } from '@testing-library/react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation';
import useAiGiftRecommendation from '@/features/get-ai-gift-recommendation';
import useHash from '@/shared/lib/hooks/useHash';
import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';
import ProgressBar from '@/shared/ui/ProgressBar';
import StepLoading from '@/shared/ui/StepLoading';
import { TopBar } from '@/shared/ui/TopBar';
import {
  GiftSection,
  RecipientSection,
  ExtraSection
} from '@/widgets/ai-gift-recommendation-sections';

import AiGiftRecommendation, { getPercentage } from '.';

jest.mock('next/navigation');

jest.mock('@/shared/lib/hooks/useTagSelection');
jest.mock('@/shared/lib/hooks/useHash');
jest.mock('@/shared/ui/TopBar');
jest.mock('@/shared/ui/ProgressBar');
jest.mock('@/shared/ui/StepLoading');
jest.mock('@/widgets/ai-gift-recommendation-sections');
jest.mock('@/features/get-ai-gift-recommendation');

describe('AiGiftRecommendation', () => {
  beforeEach(() => {
    jest.mocked(useSingleTagSelection).mockReturnValue({
      tag: null,
      updateTag: jest.fn()
    });
    jest.mocked(useAiGiftRecommendation).mockReturnValue({
      isPending: false,
      mutate: jest.fn(),
      error: null
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

  it('should render TopBar when isPending is false', () => {
    render(<AiGiftRecommendation />);
    expect(TopBar).toHaveBeenCalled();
  });

  it('should render StepLoading when isPending is true', () => {
    jest.mocked(useAiGiftRecommendation).mockReturnValue({
      isPending: true,
      mutate: jest.fn(),
      error: null
    });
    render(<AiGiftRecommendation />);
    expect(StepLoading).toHaveBeenCalled();
  });

  it('should throw error if error is not null', () => {
    const error = new Error('Test error');
    jest.mocked(useAiGiftRecommendation).mockReturnValue({
      isPending: false,
      mutate: jest.fn(),
      error
    });

    expect(() => render(<AiGiftRecommendation />)).toThrow('Test error');
  });
});
