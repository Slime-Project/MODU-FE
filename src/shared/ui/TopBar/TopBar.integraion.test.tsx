import { render } from '@testing-library/react';

import { SearchLink, Title } from './common';
import TopBar from './TopBar';

// Header 제외 모의
jest.mock('./common', () => ({
  ...jest.requireActual('./common'),
  Title: jest.fn(),
  BackBtn: jest.fn(),
  SearchLink: jest.fn()
}));

describe('TopBar Component', () => {
  it('renders Title when title is passed', () => {
    const title = 'title';
    render(<TopBar title={title} />);

    expect(Title).toHaveBeenCalledWith(
      expect.objectContaining({
        title
      }),
      {}
    );
  });

  it('renders the SearchLink when hasSearchLink is true', () => {
    const title = 'title';
    render(<TopBar title={title} hasSearchLink />);

    expect(SearchLink).toHaveBeenCalled();
  });

  it('does not render the SearchLink when hasSearchLink is false', () => {
    const title = 'title';
    render(<TopBar title={title} hasSearchLink={false} />);

    expect(SearchLink).not.toHaveBeenCalled();
  });
});
