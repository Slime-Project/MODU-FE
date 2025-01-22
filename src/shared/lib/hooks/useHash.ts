import { useEffect, useState } from 'react';

export default function useHash() {
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    const getHash = () => decodeURIComponent(window.location.hash.replace('#', ''));
    const updateHash = () => {
      setHash(getHash());
    };
    updateHash();

    window.addEventListener('hashchange', updateHash, false);

    return () => {
      window.removeEventListener('hashchange', updateHash, false);
    };
  }, []);

  return hash;
}
