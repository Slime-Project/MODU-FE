import { renderHook, act } from '@testing-library/react';

import useHash from './useHash';

describe('useHash', () => {
  beforeEach(() => {
    window.location.hash = '#initial';
  });

  it('should return the correct hash value', () => {
    const { result } = renderHook(() => useHash());
    expect(result.current).toBe('initial');
  });

  it('should update hash state when hash changes', () => {
    const { result } = renderHook(() => useHash());
    act(() => {
      window.location.hash = '#new';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(result.current).toBe('new');
  });

  it('should clean up the event listener on unmount', () => {
    window.removeEventListener = jest.fn();
    const { unmount } = renderHook(() => useHash());
    unmount();
    expect(window.removeEventListener).toHaveBeenCalled();
  });
});
