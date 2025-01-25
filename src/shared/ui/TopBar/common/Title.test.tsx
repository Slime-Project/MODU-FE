import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Title Component', () => {
  it('renders children correctly', () => {
    const title = 'title';
    render(<Title title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
