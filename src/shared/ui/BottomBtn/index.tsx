import { MouseEventHandler, ReactNode } from 'react';

import Btn from '@/shared/ui/Btn';

export default function BottomBtn({
  disabled,
  type,
  onClick,
  children
}: {
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-x-0 bottom-4 mx-auto max-w-3xl px-4">
      <Btn type={type} size="base" disabled={disabled} shadow onClick={onClick}>
        {children}
      </Btn>
    </div>
  );
}
