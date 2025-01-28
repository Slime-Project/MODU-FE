import { ChangeEventHandler } from 'react';

export const inputTheme = {
  size: {
    xs: 'text-xs px-1 py-2'
  },
  base: 'border-b border-gray-350 leading-none outline-0 placeholder:text-gray-600 focus:border-primary-400'
};

export default function Input({
  size,
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  min,
  max,
  type = 'text',
  required = false,
  className = ''
}: {
  size: keyof typeof inputTheme.size;
  label: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  min?: number;
  max?: number;
  type?: 'text' | 'number';
  required?: boolean;
  className?: string;
}) {
  return (
    <>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className={`${inputTheme.size[size]} ${inputTheme.base} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        maxLength={maxLength}
        required={required}
      />
    </>
  );
}
