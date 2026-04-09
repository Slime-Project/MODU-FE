import { useEffect, useState } from 'react';

import changeHash from '@/shared/lib/utils/window';

export default function useHash<T extends string>(hashes: readonly T[]) {
  const [hash, setHash] = useState<T>();

  useEffect(() => {
    const isValidHash = (value: string): value is T => hashes.some(v => v === value);
    const getHash = () => decodeURIComponent(window.location.hash.replace('#', ''));
    const updateHash = () => {
      const curr = getHash();

      if (isValidHash(curr)) {
        setHash(curr);
      } else {
        changeHash(hash || hashes[0]);
      }
    };
    updateHash();

    window.addEventListener('hashchange', updateHash, false);

    return () => {
      window.removeEventListener('hashchange', updateHash, false);
    };
  }, [hash]);

  return hash;
}
