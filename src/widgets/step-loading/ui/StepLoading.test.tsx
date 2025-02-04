import { render, screen } from '@testing-library/react';

import Step from './Step';
import StepLoading from './StepLoading';

jest.mock('./Step');
jest.mock('next/image');

describe('StepLoading Component', () => {
  const steps = [['진행중'], ['완료']];

  it('renders title correctly', () => {
    const title = 'title';
    render(<StepLoading title={title} steps={steps} step={0} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the steps correctly', () => {
    const step = 1;
    render(<StepLoading title="title" steps={steps} step={step} />);

    steps[0].forEach((_, i) => {
      expect(Step).toHaveBeenCalledWith(
        expect.objectContaining({ description: steps[step][i], isDone: step > i }),
        {}
      );
    });
  });
});
