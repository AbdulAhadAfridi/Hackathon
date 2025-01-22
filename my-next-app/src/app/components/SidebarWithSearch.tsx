"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<{ name: string, imagePath: string, price: string }[] | null>(null);

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await fetch(`/api/categories?query=${searchTerm}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={() => setSearchBarOpen(!isSearchBarOpen)}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center transition-all duration-300"
      >
        <GoSearch size={24} className="text-gray-700" />
      </button>

      <div
        className={`transition-all duration-300 flex items-center ${isSearchBarOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}
      >
        <Input
          type="text"
          placeholder="Search through categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-white text-black rounded-full hover:bg-black hover:text-white border border-gray-300 transition-all duration-300"
        >
          Search
        </button>
      </div>

      {data && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg p-4">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="p-2 border-b last:border-b-0">
                <div>{item.name}</div>
                <img src={item.imagePath} alt={item.name} className="w-20 h-20 object-cover" />
                <p>${item.price}</p>
              </div>
            ))
          ) : (
            <div className="text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
