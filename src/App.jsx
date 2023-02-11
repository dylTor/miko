import react from 'react';

import Search from './Search';

import apiCall from './api';

const go = apiCall();

console.log(go);

function App() {
    return (
        <div className="container">
            <h1>HELLO!</h1>
            <Search />
        </div>
    );
}

export default App;