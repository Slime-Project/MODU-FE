import { render } from '@testing-library/react';

import CloseTopBar from './CloseTopBar';
import { IconBtn, Title } from './common';

// Header 제외 모의
jest.mock('./common', () => ({
  ...jest.requireActual('./common'),
  IconBtn: jest.fn(),
  Title: jest.fn()
}));

describe('CloseTopBar Component', () => {
  it('passes the close function to IconBtn as onClick', () => {
    const close = () => {};
    render(<CloseTopBar close={close} />);

    expect(IconBtn).toHaveBeenCalledWith(
      expect.objectContaining({
        onClick: close
      }),
      {}
    );
  });

  it('renders Title when title is passed', () => {
    const title = 'title';
    render(<CloseTopBar close={() => {}} title={title} />);

    expect(Title).toHaveBeenCalledWith(
      expect.objectContaining({
        title
      }),
      {}
    );
  });
});
