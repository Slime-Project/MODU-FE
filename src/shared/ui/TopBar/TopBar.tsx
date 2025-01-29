import { Header, Title, BackBtn, SearchLink, LanguageBtn } from './common';

export default function TopBar({
  title,
  hasSearchLink = true
}: {
  title?: string;
  hasSearchLink?: boolean;
}) {
  return (
    <Header>
      <h1 className="sr-only">MODU</h1>
      {title && <Title title={title} />}
      <BackBtn />
      {hasSearchLink && <SearchLink className="ml-auto" />}
      <LanguageBtn />
    </Header>
  );
}
