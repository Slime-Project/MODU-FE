import { render } from '@testing-library/react';

import Tag, { TagTheme } from '.';

describe('Tag Component', () => {
  it('renders the component with the correct size class', () => {
    const { getByText } = render(<Tag size="sm">#tag</Tag>);
    const tagElement = getByText('#tag');
    expect(tagElement).toHaveClass(TagTheme.size.sm);
  });
});
