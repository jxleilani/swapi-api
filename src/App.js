import React from "react";
import "./App.css";
import Starships from "./components/Starships";

function App() {
  return (
    <div className="container">
      <header>
        <div className="title">
          Starwars API using <span>swapi.dev</span>
        </div>
      </header>
      <Starships />
    </div>
  );
}

export default App;
