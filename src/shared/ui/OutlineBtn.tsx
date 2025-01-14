import { MouseEventHandler, ReactNode } from 'react';

export const outlineBtnTheme = {
  size: {
    '2xs': 'text-2xs',
    sm: 'text-sm'
  },
  active: 'border-primary-400',
  inactive: 'border-gray-300'
};

export default function OutlineBtn({
  size,
  active,
  onClick,
  children
}: {
  size: keyof typeof outlineBtnTheme.size;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`${outlineBtnTheme.size[size]} rounded-full border p-1.5 leading-none ${active ? outlineBtnTheme.active : outlineBtnTheme.inactive}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
