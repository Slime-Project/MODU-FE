import { ChangeEventHandler } from 'react';

export const tagInputTheme = {
  size: {
    '2xs': 'text-2xs',
    sm: 'text-sm'
  }
};

export default function TagInput({
  type,
  name,
  value,
  label,
  size,
  checked,
  onChange
}: {
  type: 'radio' | 'checkbox';
  name: string;
  value: string;
  label: string;
  size: keyof typeof tagInputTheme.size;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <input
        className="peer sr-only"
        id={`${name}-${value}`}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={`${name}-${value}`}
        className={`${tagInputTheme.size[size]} cursor-pointer rounded-full border border-gray-300 p-1.5 leading-none peer-checked:border-primary-400`}
      >
        {label}
      </label>
    </>
  );
}
