import React from 'react';
import './App.css';
import Starships from './components/Starships';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Starwars API using<span>swapi.dev</span></h1>
      </header>
      <Starships />
    </div>
  );
}

export default App;
