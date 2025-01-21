import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AI 선물 추천'
};

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header />
      {children}
    </>
  );
}
