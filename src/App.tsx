import React from 'react';
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Presentation from "./sections/Presentation";
import './App.css';

function App() {
  return (
      <div className="App">
          <Nav />
          <Home />
          <Presentation />
      </div>
  );
}

export default App;
