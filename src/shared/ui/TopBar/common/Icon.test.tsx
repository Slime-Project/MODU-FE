import { render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon Component', () => {
  it('should render an anchor tag with the given src', () => {
    const src = '/test.svg';
    const { container } = render(<Icon src={src} alt="" />);
    expect(container).toBeInTheDocument();
  });

  it('should render an anchor tag with the given alt', () => {
    const alt = '/search';
    const { getByAltText } = render(<Icon src="/test.svg" alt={alt} />);
    expect(getByAltText(alt)).toBeInTheDocument();
  });
});
