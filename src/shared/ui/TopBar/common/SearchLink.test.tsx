import { render } from '@testing-library/react';

import IconLink from './IconLink';
import SearchLink from './SearchLink';

jest.mock('./IconLink');

describe('SearchLink Component', () => {
  it('passes the className to IconBtn', () => {
    const className = 'custom-class';
    render(<SearchLink className={className} />);
    expect(IconLink).toHaveBeenCalledWith(
      expect.objectContaining({ className }),
      expect.anything()
    );
  });
});
