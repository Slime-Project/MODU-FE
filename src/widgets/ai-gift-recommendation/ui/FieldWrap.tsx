import { ReactNode } from 'react';

export default function FieldWrap({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-base">{title}</h4>
      {children}
    </div>
  );
}
