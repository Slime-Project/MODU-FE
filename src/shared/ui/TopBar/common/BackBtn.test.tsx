import { render } from '@testing-library/react';

import BackLink from './BackBtn';
import IconBtn from './IconBtn';

jest.mock('./IconBtn');

describe('BackLink Component', () => {
  it('passes the className to IconBtn', () => {
    const className = 'custom-class';
    render(<BackLink className={className} />);
    expect(IconBtn).toHaveBeenCalledWith(expect.objectContaining({ className }), expect.anything());
  });
});
