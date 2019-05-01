import React from 'react';
import './App.css';
// import axios from 'axios';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import Movie from './Movie'
import GoT from './GoT';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/weather">Weather</Link>
        <Link to="/fortune">Fortune</Link>
        <Link to="/joke">Joke</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/got">Got</Link>

        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/fortune" component={Fortune} />
          <Route path="/joke" component={Joke} />
          <Route path="/movie" component={Movie} />
          <Route path="/got" component={GoT} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
