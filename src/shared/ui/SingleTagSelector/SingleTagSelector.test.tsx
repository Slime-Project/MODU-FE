import { render } from '@testing-library/react';

import TagInput from '@/shared/ui/TagInput';

import SingleTagSelector from '.';

jest.mock('@/shared/ui/TagInput');

describe('SingleTagSelector', () => {
  const tags = ['#tag'];
  const name = 'name';
  const updateTagMock = jest.fn();

  it('should apply the given className to the wrapper element', () => {
    const className = 'custom-class';
    const { container } = render(
      <SingleTagSelector
        tags={tags}
        name={name}
        updateTag={updateTagMock}
        className={className}
        selectedTag={null}
      />
    );
    expect(container.firstChild).toHaveClass(className);
  });

  it('should render TagInput with correct props', () => {
    render(
      <SingleTagSelector tags={tags} name={name} updateTag={updateTagMock} selectedTag={null} />
    );
    tags.forEach(tag => {
      expect(TagInput).toHaveBeenCalledWith(
        expect.objectContaining({
          name,
          label: tag,
          value: tag,
          onChange: expect.any(Function),
          checked: false
        }),
        expect.anything()
      );
    });
  });
});
