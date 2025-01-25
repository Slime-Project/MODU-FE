import { render } from '@testing-library/react';

import IconBtn from './IconBtn';
import LanguageBtn from './LanguageBtn';

jest.mock('./IconBtn');

describe('LanguageBtn Component', () => {
  it('passes the className to IconBtn', () => {
    const className = 'custom-class';
    render(<LanguageBtn className={className} />);
    expect(IconBtn).toHaveBeenCalledWith(expect.objectContaining({ className }), expect.anything());
  });
});
