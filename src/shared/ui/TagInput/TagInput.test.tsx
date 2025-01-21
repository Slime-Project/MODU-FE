import { render, screen, fireEvent } from '@testing-library/react';

import TagInput, { tagInputTheme } from '.';

describe('TagInput Component', () => {
  it('renders the input label with the correct size class', () => {
    render(
      <TagInput size="sm" type="radio" label="label" name="name" value="#tag" onChange={() => {}} />
    );
    const label = screen.getByText('label');
    expect(label).toHaveClass(tagInputTheme.size.sm);
  });

  it('renders label text correctly', () => {
    render(
      <TagInput size="sm" type="radio" label="label" name="name" value="#tag" onChange={() => {}} />
    );
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('renders value correctly', () => {
    render(
      <TagInput size="sm" type="radio" label="label" name="name" value="#tag" onChange={() => {}} />
    );
    expect(screen.getByDisplayValue('#tag')).toBeInTheDocument();
  });

  it('applies name attribute correctly', () => {
    render(
      <TagInput size="sm" type="radio" label="label" name="name" value="#tag" onChange={() => {}} />
    );
    const input = screen.getByRole('radio');
    expect(input).toHaveAttribute('name', 'name');
  });

  it('applies type attribute correctly', () => {
    render(
      <TagInput
        size="sm"
        type="checkbox"
        label="label"
        name="name"
        value="#tag"
        onChange={() => {}}
      />
    );
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('type', 'checkbox');
  });

  it('calls change handler when changed', () => {
    const handleChange = jest.fn();
    render(
      <TagInput
        size="sm"
        type="radio"
        label="label"
        name="name"
        value="#tag"
        onChange={handleChange}
      />
    );
    const input = screen.getByRole('radio');
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
