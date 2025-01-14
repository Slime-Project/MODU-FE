import { MouseEventHandler, ReactNode } from 'react';

export const btnTheme = {
  size: {
    xs: 'p-2.5 text-sm',
    sm: 'p-3 text-sm',
    base: 'p-4 text-base'
  },
  shadow: 'shadow-md'
};

export default function Btn({
  size,
  disabled,
  shadow,
  type,
  onClick,
  children
}: {
  size: keyof typeof btnTheme.size;
  disabled: boolean;
  shadow?: boolean;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${btnTheme.size[size]} ${shadow ? btnTheme.shadow : ''} rounded-lg bg-primary-400 font-bold leading-none text-white disabled:bg-gray-350`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
