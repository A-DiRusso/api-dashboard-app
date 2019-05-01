import React from 'react';
import './App.css';
// import axios from 'axios';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import Movie from './Movie'
import GoT from './GoT';
import Home from './Home';
import All from './All';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/home">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/fortune">Fortune</Link>
          <Link to="/joke">Joke</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/got">Got</Link>
          <Link to="/all">All the Things</Link>
  
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/fortune" component={Fortune} />
            <Route path="/joke" component={Joke} />
            <Route path="/movie" component={Movie} />
            <Route path="/got" component={GoT} />
            <Route path="/all" component={All} />
          </Switch>
        </header>
      </div>
    );
  }
}


export default App;
