import { fireEvent, render, screen } from '@testing-library/react';

import Input, { inputTheme } from './Input';

describe('Input Component', () => {
  it('renders the Input with the correct size class', () => {
    render(<Input label="" size="xs" placeholder="" value="" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(inputTheme.size.xs);
  });

  it('renders label text correctly', () => {
    const label = 'label';
    render(<Input label={label} size="xs" placeholder="" value="" onChange={() => {}} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders placeholder correctly', () => {
    render(<Input label="" size="xs" placeholder="입력해 주세요" value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('입력해 주세요')).toBeInTheDocument();
  });

  it('renders value correctly', () => {
    render(<Input label="" size="xs" placeholder="" value="선물" onChange={() => {}} />);
    expect(screen.getByDisplayValue('선물')).toBeInTheDocument();
  });

  it('calls onChange handler when changed', () => {
    const handleChange = jest.fn();
    render(<Input label="" size="xs" placeholder="" value="" onChange={handleChange} required />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '새로운 값' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies maxLength attribute correctly', () => {
    const maxLength = 10;
    render(
      <Input label="" size="xs" placeholder="" value="" onChange={() => {}} maxLength={maxLength} />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('maxLength', maxLength.toString());
  });

  it('applies min attribute correctly', () => {
    const min = 10;
    render(<Input label="" size="xs" placeholder="" value="" onChange={() => {}} min={min} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('min', min.toString());
  });

  it('applies max attribute correctly', () => {
    const max = 10;
    render(<Input label="" size="xs" placeholder="" value="" onChange={() => {}} max={max} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('max', max.toString());
  });

  it('applies type attribute correctly', () => {
    const type = 'number';
    render(<Input label="" size="xs" placeholder="" value="" onChange={() => {}} type={type} />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('type', type);
  });

  it('applies required attribute correctly', () => {
    render(<Input label="" size="xs" placeholder="" value="" onChange={() => {}} required />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('required');
  });

  it('adds custom className correctly', () => {
    const className = 'custom-class';
    render(
      <Input label="" size="xs" placeholder="" value="" onChange={() => {}} className={className} />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(className);
  });

  it('should have the label "for" attribute match the input "id"', () => {
    const label = 'label';
    render(<Input label={label} size="xs" placeholder="" value="" onChange={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    const labelElement = screen.getByText(label);

    expect(labelElement.getAttribute('for')).toEqual(inputElement.getAttribute('id'));
  });
});
