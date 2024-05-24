import React from 'react';
import './searchBar.css';

function SearchBar(props) {
        
   // Saves Search Box input to 'searched' project wide variable
   const handleChange = (e) => {
      e.preventDefault();
      props.setSearched(e.target.value);
    };
  

   return (
      <input className = "searchbox" name="searchbox" type="text" value={props.searched}  placeholder="Search for an Artist" onChange={handleChange}/>
   );
}

export default SearchBar;