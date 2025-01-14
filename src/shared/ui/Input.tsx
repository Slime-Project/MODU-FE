import { ChangeEventHandler } from 'react';

export const inputTheme = {
  size: {
    '2xs': 'text-2xs px-0.5 py-1.5',
    xs: 'text-xs px-1 py-2'
  }
};

export default function Input({
  size,
  className = '',
  placeholder,
  value,
  onChange,
  maxLength,
  required = false
}: {
  size: keyof typeof inputTheme.size;
  className?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  maxLength: number;
  required?: boolean;
}) {
  return (
    <input
      type="text"
      className={`${inputTheme.size[size]} w-full border-b border-gray-350 leading-none outline-0 placeholder:text-gray-600 focus:border-primary-400 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
    />
  );
}
