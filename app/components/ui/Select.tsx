'use client';

interface SelectProps {
  value: string | number;
  onChange: (value: string) => void;
  options: { value: string | number; label: string }[];
  className?: string;
}

export default function Select({ value, onChange, options, className = '' }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-yellow focus:border-brand-yellow ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}