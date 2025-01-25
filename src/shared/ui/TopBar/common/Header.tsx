import { ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="fixed flex h-11 w-full max-w-3xl items-center bg-white px-4">
      {children}
    </header>
  );
}
