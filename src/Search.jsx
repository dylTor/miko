import React from 'react';
import { useState } from 'react';

function Search({handleSearchSubmit}) {
  const [inputString, setInputString] = useState("");

  return (
    <div className="search">
        <p id="search-para">

            <input 
            onChange={(event)=>setInputString(String(event.target.value))}
            id="search-input" type="text"/>

            <button 
            onClick={()=>handleSearchSubmit(inputString)}
            id="search-sub-btn">
              Search
            </button>

        </p> 
    </div>
  )
}

export default Search;