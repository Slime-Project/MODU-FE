import { fireEvent, render, screen } from '@testing-library/react';

import Input, { inputTheme } from './Input';

describe('Input Component', () => {
  it('renders the input with the correct size class', () => {
    render(
      <Input size="xs" placeholder="입력해 주세요" value="" onChange={() => {}} maxLength={10} />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(inputTheme.size.xs);
  });

  it('adds custom className correctly', () => {
    render(
      <Input
        size="xs"
        placeholder="입력해 주세요"
        value=""
        className="border-white"
        onChange={() => {}}
        maxLength={10}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-white');
  });

  it('renders placeholder correctly', () => {
    render(
      <Input size="xs" placeholder="입력해 주세요" value="" onChange={() => {}} maxLength={10} />
    );
    expect(screen.getByPlaceholderText('입력해 주세요')).toBeInTheDocument();
  });

  it('renders value correctly', () => {
    render(
      <Input
        size="xs"
        placeholder="입력해 주세요"
        value="선물"
        onChange={() => {}}
        maxLength={10}
      />
    );
    expect(screen.getByDisplayValue('선물')).toBeInTheDocument();
  });

  it('applies maxLength attribute correctly', () => {
    render(
      <Input
        size="xs"
        placeholder="입력해 주세요"
        value="선물"
        onChange={() => {}}
        maxLength={10}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('maxLength', '10');
  });

  it('applies required attribute correctly', () => {
    render(
      <Input
        size="xs"
        placeholder="입력해 주세요"
        value="선물"
        onChange={() => {}}
        maxLength={10}
        required
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('required');
  });

  it('calls onClick handler when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Input
        size="xs"
        placeholder="입력해 주세요"
        value="선물"
        onChange={handleChange}
        maxLength={10}
        required
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '새로운 값' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
