import React from 'react';

import './SearchBox.styles.css';

const SearchBox = (props) => {
  return (
      <input 
      type='search'
      placeholder='Search a monster'
      onChange={event => props.onChange(event.target.value)}
      />
  );
};

export default SearchBox;