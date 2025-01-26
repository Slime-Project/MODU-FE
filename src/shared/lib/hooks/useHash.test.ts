import { renderHook, act } from '@testing-library/react';

import changeHash from '@/shared/lib/utils/window';

import useHash from './useHash';

jest.mock('@/shared/lib/utils/window');

describe('useHash', () => {
  const hashes = ['initial', 'new'];

  it('should return the correct hash value', () => {
    window.location.hash = `#${hashes[0]}`;
    const { result } = renderHook(() => useHash(hashes));
    expect(result.current).toBe('initial');
  });

  it('should update hash state when hash changes', () => {
    window.location.hash = `#${hashes[0]}`;
    const { result } = renderHook(() => useHash(hashes));
    act(() => {
      window.location.hash = `#${hashes[1]}`;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(result.current).toBe(hashes[1]);
  });

  it('should clean up the event listener on unmount', () => {
    window.removeEventListener = jest.fn();
    const { unmount } = renderHook(() => useHash(hashes));
    unmount();
    expect(window.removeEventListener).toHaveBeenCalled();
  });

  it('should call changeHash current hash state when the hash is invalid', () => {
    window.location.hash = `#${hashes[0]}`;
    const { result } = renderHook(() => useHash(hashes));

    act(() => {
      window.location.hash = '#invalid';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(changeHash).toHaveBeenCalledWith(result.current);
  });

  it('should call changeHash with the first hash when hash is invalid and the hash state is undefind', () => {
    renderHook(() => useHash(hashes));

    act(() => {
      window.location.hash = '#invalid';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(changeHash).toHaveBeenCalledWith(hashes[0]);
  });
});
