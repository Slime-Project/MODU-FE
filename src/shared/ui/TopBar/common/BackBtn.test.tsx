import { render } from '@testing-library/react';

import BackBtn from './BackBtn';
import IconBtn from './IconBtn';

jest.mock('./IconBtn');
jest.mock('next/navigation');

describe('BackBtn Component', () => {
  it('passes the className to IconBtn', () => {
    const className = 'custom-class';
    render(<BackBtn className={className} />);
    expect(IconBtn).toHaveBeenCalledWith(expect.objectContaining({ className }), expect.anything());
  });
});
