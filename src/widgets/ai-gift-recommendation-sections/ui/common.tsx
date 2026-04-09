import { ReactNode } from 'react';

export function SectionTitle({ title }: { title: string }) {
  return <h3 className="text-xl font-bold">{title}</h3>;
}

export function FieldsContainer({ children }: { children: ReactNode }) {
  return <div className="mt-11 flex flex-col gap-12">{children}</div>;
}

export function FieldWrap({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-base">{title}</h4>
      {children}
    </div>
  );
}
