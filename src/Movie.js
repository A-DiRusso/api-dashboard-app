import React, { Component } from 'react'
import axios from 'axios';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            cast: '',
            showtimes: '',
            theaters: ''
    }
  }
  componentDidMount() {
      this._getMovie()
  }

  render() {
    return (
      <div>
        <h2>A Movie With Some Stars at A Thearter at A Time</h2>
        <div>{this.state.movie}</div>
        <div>{this.state.cast}</div>
        <div>{this.state.showtimes}</div>
        <div>{this.state.theaters}</div>
      </div>
    )
  }
  _getMovie = async () => {
      const response = await axios.get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-04-30&zip=30084&api_key=36zekhh8ta2kuj2cujbj55rd`)
      console.log(response.data[0].title)
      console.log(response.data[0].topCast)
      console.log(response.data[0].showtimes[0].dateTime)
      console.log(response.data[0].showtimes[0].theatre)
        this.setState({
            movie: response.data[0].title,
            cast: response.data[0].topCast,
            showtimes: response.data[0].showtimes[0].dateTime,
            theaters: response.data[0].showtimes[0].theatre.name
        })
    } 
}

    // let key1 = 'xguxvke7xybd3fsscb7h446v';
    // let key2 = '36zekhh8ta2kuj2cujbj55rd';
    // let key3 = '4g7bvs4v2vy929mbgrqynbkv';

    // let showtimeURL = `http://data.tmsapi.com/v1.1/movies/showings?startDate=${dateOnly}&zip=${zip}&api_key=${key2}`