import { render, screen, fireEvent } from '@testing-library/react';

import OutlineBtn, { outlineBtnTheme } from './OutlineBtn';

describe('OutlineBtn Component', () => {
  it('renders the button with the correct size class', () => {
    render(
      <OutlineBtn size="sm" active onClick={() => {}}>
        Click Me
      </OutlineBtn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(outlineBtnTheme.size.sm);
  });

  it('renders active button with correct class', () => {
    render(
      <OutlineBtn size="sm" active onClick={() => {}}>
        #10대
      </OutlineBtn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(outlineBtnTheme.active);
  });

  it('renders inactive button with correct class', () => {
    render(
      <OutlineBtn size="sm" active={false} onClick={() => {}}>
        #10대
      </OutlineBtn>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(outlineBtnTheme.inactive);
  });

  it('renders children correctly', () => {
    render(
      <OutlineBtn size="sm" active onClick={() => {}}>
        #10대
      </OutlineBtn>
    );
    expect(screen.getByText('#10대')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <OutlineBtn size="sm" active onClick={handleClick}>
        #10대
      </OutlineBtn>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
