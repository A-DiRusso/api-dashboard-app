import React, { Component } from 'react'
import axios from 'axios';

export default class Fortune extends Component {
  constructor(props) {
      super(props);
      this.state = {
          fortune: ''
      }
  }
  componentDidMount() {
      this._getFortune();
  }

  render() {
    return (
      <div>
        <h2>Not Ron Swanson Quote:</h2>
        <div>{this.state.fortune}</div>
      </div>
    )
  }
  _getFortune = async () => {
      const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
    //   console.log(response.data.fortune)
      this.setState({
          fortune: response.data.fortune
      })
  }

}
