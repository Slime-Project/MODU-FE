import Image from 'next/image';

import { Header, SearchLink, LanguageBtn } from './common';

export default function LogoTopBar() {
  return (
    <Header>
      <h1 className="absolute right-1/2 h-5 translate-x-2/4">
        <Image className="h-full" width={87} height={20} src="/svgs/logo.svg" alt="MODU" />
      </h1>
      <SearchLink className="ml-auto" />
      <LanguageBtn />
    </Header>
  );
}
