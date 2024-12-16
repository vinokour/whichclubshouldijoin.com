import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterButtonProps {
  onOpen: () => void;
  activeFiltersCount: number;
}

export default function FilterButton({ onOpen, activeFiltersCount }: FilterButtonProps) {
  return (
    <button
      onClick={onOpen}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
    >
      <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      <span className="text-gray-700">Filters</span>
      {activeFiltersCount > 0 && (
        <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-500 rounded-full">
          {activeFiltersCount}
        </span>
      )}
    </button>
  );
}