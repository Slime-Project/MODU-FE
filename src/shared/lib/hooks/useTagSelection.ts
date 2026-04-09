import { useState } from 'react';

export function useSingleTagSelection<T extends string>() {
  const [tag, setTag] = useState<T | null>(null);
  const updateTag = (selectedTag: T) => {
    setTag(selectedTag);
  };
  return { tag, updateTag };
}

export function useMultiTagSelection<T extends string>() {
  const [tags, setTags] = useState<T[]>([]);
  const addTag = (selectedTag: T) => {
    setTags(prev => [...prev, selectedTag]);
  };
  const removeTag = (deselectedTag: T) => {
    setTags(prev => prev.filter(v => v !== deselectedTag));
  };
  const togleTag = (clickedTag: T) => {
    if (tags.includes(clickedTag)) {
      removeTag(clickedTag);
    } else {
      addTag(clickedTag);
    }
  };
  return { tags, togleTag };
}
