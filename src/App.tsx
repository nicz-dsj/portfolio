import React from 'react';
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Presentation from "./sections/Presentation";
import Abilities from "./sections/Abilities";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import './App.css';

function App() {
  return (
      <div className="App">
          <Nav />
          <Home />
          <Presentation />
          <Abilities />
          <Projects />
          <Contact />
      </div>
  );
}

export default App;
