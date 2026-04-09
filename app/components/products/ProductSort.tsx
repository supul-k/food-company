'use client';
import Select from '../ui/Select';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function ProductSort({ sortBy, onSortChange }: ProductSortProps) {
  const sortOptions = [
    { value: 'default', label: 'Default sorting' },
    { value: 'popularity', label: 'Sort by popularity' },
    { value: 'price-low', label: 'Sort by price: low to high' },
    { value: 'price-high', label: 'Sort by price: high to low' },
    { value: 'name-asc', label: 'Sort by name: A to Z' },
    { value: 'name-desc', label: 'Sort by name: Z to A' },
  ];

  return (
    <Select value={sortBy} onChange={onSortChange} options={sortOptions} />
  );
}