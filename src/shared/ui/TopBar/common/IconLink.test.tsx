import { render } from '@testing-library/react';

import Icon from '@/shared/ui/TopBar/common/Icon';

import IconLink from './IconLink';

jest.mock('./Icon');

describe('IconLink Component', () => {
  it('should apply the given className', () => {
    const className = 'custom-class';
    const { getByRole } = render(<IconLink href="/search" className={className} src="" alt="" />);
    expect(getByRole('link')).toHaveClass(className);
  });

  it('should render an anchor tag with the given href', () => {
    const href = '/search';
    const { getByRole } = render(<IconLink href={href} src="" alt="" />);
    expect(getByRole('link')).toHaveAttribute('href', href);
  });

  it('should call Icon with correct props', () => {
    const src = '/test.svg';
    const alt = 'test';
    render(<IconLink href="" src={src} alt={alt} />);
    expect(Icon).toHaveBeenCalledWith({ src, alt }, expect.anything());
  });
});
