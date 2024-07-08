import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4 mt-11">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-36 md:w-96 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
