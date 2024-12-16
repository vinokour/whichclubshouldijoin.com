import React from 'react';
import { categories } from '../../data/mockData';
import { iconMap } from '../../utils/iconMap';
import FilterSection from './FilterSection';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <FilterSection title="Categories">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              {category.name}
            </button>
          );
        })}
      </div>
    </FilterSection>
  );
}