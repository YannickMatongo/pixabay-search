// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher des images..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:ring focus:ring-blue-300 focus:border-blue-300"
        value={query}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Rechercher
      </button>
    </form>
  );
};

export default SearchBar;
