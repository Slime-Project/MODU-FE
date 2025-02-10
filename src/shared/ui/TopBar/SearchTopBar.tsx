import { FormEventHandler } from 'react';

import { Header, BackBtn, IconBtn } from './common';

export default function SearchTopBar({
  onSubmit
}: {
  onSubmit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Header>
      <h1 className="sr-only">MODU</h1>
      <BackBtn />
      <form
        className="relative mx-1.5 ml-3 flex w-full items-center"
        onSubmit={onSubmit}
        name="search"
      >
        <input
          className="w-full rounded-full bg-gray-200 p-2 pl-3 pr-9 text-xs leading-none placeholder:text-gray-700"
          type="text"
          maxLength={12}
          minLength={1}
          required
          placeholder="집들이 선물"
        />
        <IconBtn className="absolute right-0 p-2" src="/svgs/search.svg" alt="search" />
      </form>
    </Header>
  );
}
