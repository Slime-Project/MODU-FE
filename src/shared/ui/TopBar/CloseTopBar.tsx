import { Header, IconBtn, LanguageBtn, Title } from './common';

export default function CloseTopBar({ close, title }: { close: () => void; title?: string }) {
  return (
    <Header>
      <h1 className="sr-only">MODU</h1>
      {title && <Title title={title} />}
      <LanguageBtn className="ml-auto" />
      <IconBtn src="/svgs/x.svg" alt="close" onClick={close} />
    </Header>
  );
}
