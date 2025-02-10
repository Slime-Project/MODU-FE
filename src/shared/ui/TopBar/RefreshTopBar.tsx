import { Header, Title, BackBtn, IconBtn } from './common';

export default function RefreshTopBar({ title, refresh }: { title?: string; refresh: () => void }) {
  return (
    <Header>
      <h1 className="sr-only">MODU</h1>
      {title && <Title title={title} />}
      <BackBtn />
      <IconBtn className="ml-auto" onClick={refresh} src="/svgs/refresh.svg" alt="refresh" />
    </Header>
  );
}
