import { ChangeEventHandler } from 'react';

import Input, { inputTheme } from './Input';

export default function TextInput({
  size,
  label,
  placeholder,
  value,
  maxLength,
  onChange,
  className = '',
  required = false
}: {
  size: keyof typeof inputTheme.size;
  label: string;
  placeholder: string;
  value: string;
  maxLength: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  required?: boolean;
}) {
  return (
    <Input
      type="text"
      size={size}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
      label={label}
    />
  );
}
