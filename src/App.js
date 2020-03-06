import React from 'react';
import './App.css';
import Disciplinas from './Disciplinas';
import Graphs from './Graphs';
import Calendary from './Calendary';

function App() {
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <Calendary/>
      <Graphs/>
    </div>
  );
}

export default App;
