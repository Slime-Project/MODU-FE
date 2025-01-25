import { render } from '@testing-library/react';

import BackLink from './BackLink';
import IconLink from './IconLink';

jest.mock('./IconLink');

describe('BackLink Component', () => {
  it('passes the className to IconBtn', () => {
    const className = 'custom-class';
    render(<BackLink className={className} />);
    expect(IconLink).toHaveBeenCalledWith(
      expect.objectContaining({ className }),
      expect.anything()
    );
  });
});
