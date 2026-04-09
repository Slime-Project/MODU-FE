import TagInput from '@/shared/ui/TagInput';

export default function SingleTagSelector<T extends string>({
  tags,
  name,
  selectedTag,
  updateTag,
  className = ''
}: Readonly<{
  tags: readonly T[];
  name: string;
  selectedTag: T | null;
  updateTag: (tag: T) => void;
  className?: string;
}>) {
  return (
    <ul className={`${className} slider relative flex gap-2`}>
      {tags.map(tag => (
        <li key={tag} className="shrink-0">
          <TagInput
            type="radio"
            name={name}
            label={tag}
            value={tag}
            size="sm"
            checked={selectedTag === tag}
            onChange={() => updateTag(tag)}
          />
        </li>
      ))}
    </ul>
  );
}
