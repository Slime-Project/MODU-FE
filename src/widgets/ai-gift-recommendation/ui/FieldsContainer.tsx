import { ReactNode } from 'react';

export default function FieldsContainer({ children }: { children: ReactNode }) {
  return <div className="mt-11 flex flex-col gap-12">{children}</div>;
}
