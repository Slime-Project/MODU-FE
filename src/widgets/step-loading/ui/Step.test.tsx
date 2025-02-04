import { render, screen } from '@testing-library/react';

import { CheckIcon } from '@/shared/assets/svgs';

import Step from './Step';

jest.mock('@/shared/assets/svgs', () => ({ CheckIcon: jest.fn() }));

describe('Step Component', () => {
  it('renders description correctly', () => {
    render(<Step description="테스트 설명" isDone />);
    expect(screen.getByText('테스트 설명')).toBeInTheDocument();
  });

  it('applies different classNames to CheckIcon based on isDone prop', () => {
    const { rerender } = render(<Step description="완료" isDone={false} />);
    rerender(<Step description="완료" isDone />);

    const firstRenderClassName = CheckIcon.mock.calls[0][0].className;
    const secondRenderClassName = CheckIcon.mock.calls[1][0].className;

    expect(firstRenderClassName).not.toBe(secondRenderClassName);
  });
});
