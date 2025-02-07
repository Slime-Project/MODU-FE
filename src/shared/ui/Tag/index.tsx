import { ReactNode } from 'react';

export const TagTheme = {
  size: {
    sm: 'text-sm'
  }
};

export default function Tag({
  size,
  children
}: {
  size: keyof typeof TagTheme.size;
  children: ReactNode;
}) {
  return (
    <span
      className={`${TagTheme.size[size]} rounded-full border border-primary-400 p-1.5 leading-none`}
    >
      {children}
    </span>
  );
}
