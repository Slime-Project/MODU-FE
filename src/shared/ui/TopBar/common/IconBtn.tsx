import { MouseEventHandler } from 'react';

import Icon from './Icon';

export default function IconBtn({
  type,
  onClick,
  className = '',
  src,
  alt
}: {
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`w-auto shrink-0 p-1.5 ${className}`}
      onClick={onClick}
    >
      <Icon src={src} alt={alt} />
    </button>
  );
}
