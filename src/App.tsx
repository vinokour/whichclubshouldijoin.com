import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import Modal from './components/Modal';
import CategoryFilter from './components/filters/CategoryFilter';
import CareerPathFilter from './components/filters/CareerPathFilter';
import ClubCard from './components/ClubCard';
import { clubs } from './data/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCareerPaths, setSelectedCareerPaths] = useState<string[]>([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleCareerPath = (careerPath: string) => {
    setSelectedCareerPaths(prev =>
      prev.includes(careerPath)
        ? prev.filter(cp => cp !== careerPath)
        : [...prev, careerPath]
    );
  };

  const activeFiltersCount = 
    (selectedCategory ? 1 : 0) + selectedCareerPaths.length;

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory ? club.category === selectedCategory : true;
    
    const matchesCareerPaths = selectedCareerPaths.length === 0 ||
      selectedCareerPaths.some(path => club.careerPaths.includes(path));
    
    return matchesSearch && matchesCategory && matchesCareerPaths;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Discover University Clubs
          </h1>
          <p className="text-xl text-center text-blue-100 mb-8">
            Find your community and pursue your passions
          </p>
          <div className="flex justify-center gap-4 items-center">
            <SearchBar onSearch={setSearchQuery} />
            <FilterButton
              onOpen={() => setIsFilterModalOpen(true)}
              activeFiltersCount={activeFiltersCount}
            />
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filter Clubs"
      >
        <div className="space-y-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <CareerPathFilter
            selectedCareerPaths={selectedCareerPaths}
            onToggleCareerPath={toggleCareerPath}
          />
        </div>
      </Modal>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {filteredClubs.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600">No clubs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;