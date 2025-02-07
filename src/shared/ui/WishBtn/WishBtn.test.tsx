import { render, screen, fireEvent } from '@testing-library/react';

import WishBtn, { wishBtnTheme } from '.';

jest.mock('next/navigation');

describe('WishBtn Component', () => {
  it('renders the button with the correct size class', () => {
    render(<WishBtn size="sm" color="gray" isWished toggleWish={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(wishBtnTheme.size.sm);
  });

  it('adds custom className correctly', () => {
    render(
      <WishBtn size="sm" color="gray" isWished className="border-white" toggleWish={() => {}} />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-white');
  });

  it('calls toggleWish handler when clicked', () => {
    const toggleWish = jest.fn();
    render(<WishBtn size="sm" color="gray" isWished toggleWish={toggleWish} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(toggleWish).toHaveBeenCalledTimes(1);
  });
});
