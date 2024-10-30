import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/home/search-results?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className='search' onSubmit={handleSearch}>
      <input
        type="text"
        name="query"
        placeholder="Find products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Cập nhật trạng thái query
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
