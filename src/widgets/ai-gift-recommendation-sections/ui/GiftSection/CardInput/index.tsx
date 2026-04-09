import { ChangeEventHandler } from 'react';

import { Emoji, EMOJIS } from '@/shared/ui/emojis';

export default function CardInput({
  name,
  value,
  label,
  emoji,
  checked,
  onChange
}: {
  name: string;
  value: string;
  label: string;
  emoji: Emoji;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <input
        className="peer sr-only"
        id={`${name}-${value}`}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={`${name}-${value}`}
        className="flex aspect-square cursor-pointer flex-col justify-center rounded-xl border border-gray-300 p-4 text-center text-base peer-checked:border-2 peer-checked:border-primary-400"
      >
        <span className="text-xl">{EMOJIS[emoji]}</span>
        {label}
      </label>
    </>
  );
}
