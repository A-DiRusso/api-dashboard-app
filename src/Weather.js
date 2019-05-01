import React, { Component } from 'react'
import axios from 'axios';

export default class Weather extends Component {
  constructor(props) {
      super(props);
      this.state = {
        quote: '',
        city: 'Atlanta',
          sky: ';sctattered clouds',
          temp: '78'
        
      }
  }
  componentDidMount() {
      this._getSwansonQuote();
  }
  render() {
      const style = {
          background: "#54C1CC"
      }
    return (
  
      <div style={style}>
        <h2>Weather And A Ron Swanson Quote</h2>
        <div>Location: {this.state.city}</div>
        <div>Conditions: {this.state.sky}</div>
        <div>Temp: {this.state.temp}</div>
        <h2>Ron Swanson Quote:</h2>
        <div>{this.state.quote}</div>
      </div>
    )
  }
  _getSwansonQuote = async () => {
    //   const zipcode = 30084;
    //   const weatherApiKey = "03458bfd7dc0cbf327a517b3f034df4d";
    //   const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${weatherApiKey}`)
      const quoteResponse = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    //   console.log(response.data.list[0].main.temp)
      this.setState({
          quote: quoteResponse.data,
        //   city: response.data.city.name,
        //   sky: response.data.list[0].weather[0].description,
        //   temp: Math.floor(((response.data.list[0].main.temp - 273) * 9/5) + 32)
          
    

      })
      
  }


                
  
}
