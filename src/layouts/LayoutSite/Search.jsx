import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className='search' onSubmit={handleSearch}>
      <input
        type="text"
        name="query"
        placeholder="Tìm sản phẩm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Cập nhật trạng thái query
      />
      <button type="submit">Tìm kiếm</button>
    </form>
  );
};

export default Search;
