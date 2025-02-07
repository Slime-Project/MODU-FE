import Link from 'next/link';
import { ReactNode } from 'react';

export const primaryLinkTheme = {
  size: {
    xs: 'p-2.5 text-sm',
    sm: 'p-3 text-sm',
    base: 'p-4 text-base'
  }
};

export default function PrimaryLink({
  size,
  href,
  target,
  className = '',
  children
}: {
  size: keyof typeof primaryLinkTheme.size;
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      className={`${className} ${primaryLinkTheme.size[size]} w-full rounded-lg bg-primary-400 text-center font-bold leading-none text-white disabled:bg-gray-350`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
