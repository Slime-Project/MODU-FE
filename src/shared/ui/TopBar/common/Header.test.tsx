import { render } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
  it('renders children correctly', () => {
    const children = 'children';
    const { getByText } = render(<Header>{children}</Header>);
    expect(getByText(children)).toBeInTheDocument();
  });
});
