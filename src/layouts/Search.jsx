

import React from 'react'

const Search = () => {
  return (
    <form className='search' action="search.php" method="GET">
  <input type="text" name="query" placeholder="find product..."/>
  <button type="submit">Search</button>
 </form>
  )
}

export default Search
