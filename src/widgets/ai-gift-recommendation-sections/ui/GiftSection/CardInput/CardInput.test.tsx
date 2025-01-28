import { render, screen, fireEvent } from '@testing-library/react';

import CardInput from '.';

describe('CardInput Component', () => {
  it('renders label text correctly', () => {
    render(<CardInput emoji="robot" label="label" name="name" value="value" onChange={() => {}} />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('renders value correctly', () => {
    render(<CardInput emoji="robot" label="label" name="name" value="value" onChange={() => {}} />);
    expect(screen.getByDisplayValue('value')).toBeInTheDocument();
  });

  it('applies name attribute correctly', () => {
    const name = 'name';
    render(<CardInput emoji="robot" label="label" name={name} value="value" onChange={() => {}} />);
    const input = screen.getByRole('radio');
    expect(input).toHaveAttribute('name', name);
  });

  it('calls change handler when changed', () => {
    const handleChange = jest.fn();
    render(
      <CardInput emoji="robot" label="label" name="name" value="robot" onChange={handleChange} />
    );
    const input = screen.getByRole('radio');
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should have the label "for" attribute match the input "id"', () => {
    const label = 'label';
    render(<CardInput emoji="robot" label="label" name="name" value="robot" onChange={() => {}} />);

    const input = screen.getByRole('radio');
    const labelElement = screen.getByText(label);

    expect(labelElement.getAttribute('for')).toEqual(input.getAttribute('id'));
  });
});
