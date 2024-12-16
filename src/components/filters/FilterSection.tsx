import React from 'react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">{title}</h3>
      {children}
    </div>
  );
}