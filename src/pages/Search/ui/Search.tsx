'use client';

import TabBar from '@/shared/ui/TabBar';
import { SearchTopBar } from '@/shared/ui/TopBar';

export default function Search() {
  const tabs = ['통합', '상품', '선물 모음'];
  const currTabIndex = 0;

  return (
    <>
      <SearchTopBar onSubmit={() => {}} />
      <main className="mt-2">
        <TabBar tabs={tabs} currTabIndex={currTabIndex} />
      </main>
    </>
  );
}
