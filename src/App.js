import React, { useState } from 'react';
import './App.css';

import SearchBar from './searchBar/searchBar';
import SearchResults from './searchResults/searchResults';

// App is responsible for holding and sharing data across the project

function App() {

  const [searched, setSearched] = useState('');     // what is being typed in to search box
  const [results, setResults] = useState('');       // what was typed in, after search button clicked
  
  const searchPressed = (e) =>{
    e.preventDefault();
    setResults(searched);
  };


  return (
    
    <div className="App">

      {/* Title */}
      <div className="title">Jamming <text style = {{color:'darkorange'}}>Project</text></div>

      {/* Search Bar - params allow the component to save what is typed in to the search field*/}
      <SearchBar value={searched} setSearched = {setSearched}/>   <br/><br/>

      {/* Search Button */}
      <form onSubmit= {searchPressed}>  <button type="submit">Search</button>  </form>

      {/* Results Area */}
      <SearchResults results={results}/>  

      
    
    </div>
  );
}

export default App;
