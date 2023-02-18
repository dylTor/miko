import { useState } from 'react';

import Search from './Search';
import Board from './Board';

import apiCaller from './api';

function App() {
    const [currentData, setCurrentData] = useState(null);

    async function handleSearchSubmit (city) {
        setCurrentData(await apiCaller(city));
        return;
    }

    if (!currentData) {
        return (
            <div className="container">
                <Search handleSearchSubmit={handleSearchSubmit} apiCaller={apiCaller} />
            </div>
            );
    }

    return(
        <div className="container">
            <Search handleSearchSubmit={handleSearchSubmit}  apiCaller={apiCaller}/>
            <Board data={currentData}/>
        </div>
    );

}

export default App;
