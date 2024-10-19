

import React from 'react'

const Search = () => {
  return (
    <form className='search' method="GET">
  <input type="text" name="query" placeholder="find product..."/>
  <button type="submit">Search</button>
 </form>
  )
}

export default Search
