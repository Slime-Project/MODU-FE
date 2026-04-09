import { ChangeEventHandler } from 'react';

import Input, { inputTheme } from './Input';

export default function NumberInput({
  size,
  label,
  placeholder,
  value,
  max,
  min,
  onChange,
  className = '',
  required = false
}: {
  size: keyof typeof inputTheme.size;
  label: string;
  placeholder: string;
  value: string;
  max: number;
  min: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  required?: boolean;
}) {
  return (
    <Input
      type="number"
      size={size}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      max={max}
      min={min}
      required={required}
      label={label}
    />
  );
}
