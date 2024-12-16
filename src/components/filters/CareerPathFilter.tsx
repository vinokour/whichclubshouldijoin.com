import React from 'react';
import { careerPaths } from '../../data/mockData';
import FilterSection from './FilterSection';

interface CareerPathFilterProps {
  selectedCareerPaths: string[];
  onToggleCareerPath: (careerPath: string) => void;
}

export default function CareerPathFilter({
  selectedCareerPaths,
  onToggleCareerPath,
}: CareerPathFilterProps) {
  return (
    <FilterSection title="Career Paths">
      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
        {careerPaths.map((careerPath) => (
          <label
            key={careerPath.id}
            className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-gray-50 rounded-lg"
          >
            <input
              type="checkbox"
              checked={selectedCareerPaths.includes(careerPath.name)}
              onChange={() => onToggleCareerPath(careerPath.name)}
              className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-700 group-hover:text-gray-900">
                {careerPath.name}
              </span>
              <p className="text-sm text-gray-500">{careerPath.description}</p>
            </div>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}