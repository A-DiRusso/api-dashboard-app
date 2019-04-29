import React, { Component } from 'react';
import axios from 'axios';

export default class Joke extends Component {
  constructor(props) {
      super(props);
      this.state = {
          joke: ''
      }
  }
  componentDidMount()  {
      this._getJoke()
  }

  render() {
    return (
      <div>
          <h3>Dad Joke:</h3>
          {this.state.joke ? <div>{this.state.joke}</div> : null }
       
      </div>
    )
  }
  _getJoke = async () => {
      const response = await axios.get('https://icanhazdadjoke.com/',
        { headers: { Accept: 'application/json'} })
      this.setState({
          joke: response.data.joke
      })
  }
}
