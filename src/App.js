import React from "react";
import "./App.css";
import Header from "./components/Header";
import Starships from "./components/Starships";

function App() {
  return (
      <div className="container">
        <Header />
        <Starships />
      </div>
  );
}

export default App;
