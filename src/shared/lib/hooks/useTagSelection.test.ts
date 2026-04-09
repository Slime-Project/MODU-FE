import { renderHook, act } from '@testing-library/react';

import { useSingleTagSelection, useMultiTagSelection } from './useTagSelection';

describe('useSingleTagSelection', () => {
  it('should initialize with null tag', () => {
    const { result } = renderHook(() => useSingleTagSelection());
    expect(result.current.tag).toBeNull();
  });

  it('should update tag when updateTag is called', () => {
    const { result } = renderHook(() => useSingleTagSelection());
    act(() => {
      result.current.updateTag('#tag');
    });
    expect(result.current.tag).toBe('#tag');
  });
});

describe('useMultiTagSelection', () => {
  it('should initialize with an empty array of tags', () => {
    const { result } = renderHook(() => useMultiTagSelection());
    expect(result.current.tags).toEqual([]);
  });

  describe('togleTag', () => {
    it('should add a tag if it does not exist', () => {
      const { result } = renderHook(() => useMultiTagSelection());
      act(() => {
        result.current.togleTag('#tag');
      });
      expect(result.current.tags).toEqual(['#tag']);
    });

    it('should remove a tag if it exists', () => {
      const { result } = renderHook(() => useMultiTagSelection());
      act(() => {
        result.current.togleTag('#tag');
      });
      act(() => {
        result.current.togleTag('#tag');
      });
      expect(result.current.tags).toEqual([]);
    });
  });
});
