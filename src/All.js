import React from 'react';
import './App.css';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import Movie from './Movie'
import GoT from './GoT';
import Home from './Home';




function All() {
return (
    <div className="App">
    <header className="App-header">
    <Weather />
    <Fortune />
    <Joke />
    <Movie />
    <GoT />
    <Home />
    </header>
    </div>
);
}

export default All;
