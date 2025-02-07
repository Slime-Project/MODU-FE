import { render, screen } from '@testing-library/react';

import PrimaryLink, { primaryLinkTheme } from '.';

describe('PrimaryLink Component', () => {
  it('renders the button with the correct size class', () => {
    render(
      <PrimaryLink size="sm" href="/">
        link
      </PrimaryLink>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass(primaryLinkTheme.size.sm);
  });

  it('renders children correctly', () => {
    render(
      <PrimaryLink size="sm" href="/">
        link
      </PrimaryLink>
    );
    expect(screen.getByText('link')).toBeInTheDocument();
  });

  it('adds custom className correctly', () => {
    render(
      <PrimaryLink size="base" className="border-white" href="/">
        Click Me
      </PrimaryLink>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('border-white');
  });

  it('applies href attribute correctly', () => {
    const href = '/';
    render(
      <PrimaryLink size="base" href={href}>
        Click Me
      </PrimaryLink>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', href);
  });

  it('applies target attribute correctly', () => {
    const target = '_blank';
    render(
      <PrimaryLink size="base" href="/" target={target}>
        Click Me
      </PrimaryLink>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', target);
  });
});
