import { render, screen } from '@testing-library/react';

import ProgressBar from '.';

describe('ProgressBar', () => {
  it('should render with the correct percentage', () => {
    const percentage = 50;

    render(<ProgressBar percentage={50} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveTextContent(`${percentage}%`);
    expect(progressBar).toHaveStyle(`width: ${percentage}%`);
  });
});
