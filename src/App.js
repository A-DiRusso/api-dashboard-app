import React from 'react';
import './App.css';
// import axios from 'axios';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import Movie from './Movie'
import GoT from './GoT';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Weather />
        <Fortune />
        <Joke />
        <Movie />
        <GoT />
      </header>
    </div>
  );
}

export default App;
