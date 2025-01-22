import { render, screen, fireEvent } from '@testing-library/react';

import Btn, { btnTheme } from '.';

describe('Btn Component', () => {
  it('renders the button with the correct size class', () => {
    render(
      <Btn size="sm" disabled onClick={() => {}}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(btnTheme.size.sm);
  });

  it('applies shadow class when shadow prop is true', () => {
    render(
      <Btn size="base" disabled shadow onClick={() => {}}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(btnTheme.shadow);
  });

  it('does not apply shadow class when shadow prop is false', () => {
    render(
      <Btn size="base" disabled shadow={false} onClick={() => {}}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass(btnTheme.shadow);
  });

  it('renders children correctly', () => {
    render(
      <Btn size="base" disabled onClick={() => {}}>
        Click Me
      </Btn>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('adds custom className correctly', () => {
    render(
      <Btn size="base" className="border-white" disabled onClick={() => {}}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-white');
  });

  it('does not trigger click when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Btn size="sm" disabled onClick={handleClick}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Btn size="sm" disabled={false} onClick={handleClick}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies type attribute correctly', () => {
    render(
      <Btn size="base" disabled type="submit" onClick={() => {}}>
        Click Me
      </Btn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
