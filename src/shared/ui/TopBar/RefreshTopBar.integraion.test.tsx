import { render } from '@testing-library/react';

import { IconBtn, Title } from './common';
import RefreshTopBar from './RefreshTopBar';

// Header 제외 모의
jest.mock('./common', () => ({
  ...jest.requireActual('./common'),
  IconBtn: jest.fn(),
  LanguageBtn: jest.fn(),
  Title: jest.fn(),
  BackLink: jest.fn()
}));

describe('RefreshTopBar Component', () => {
  it('passes the refresh function to IconBtn as onClick', () => {
    const refresh = () => {};
    render(<RefreshTopBar refresh={refresh} />);

    expect(IconBtn).toHaveBeenCalledWith(
      expect.objectContaining({
        onClick: refresh
      }),
      {}
    );
  });

  it('renders Title when title is passed', () => {
    const title = 'title';
    render(<RefreshTopBar refresh={() => {}} title={title} />);

    expect(Title).toHaveBeenCalledWith(
      expect.objectContaining({
        title
      }),
      {}
    );
  });
});
