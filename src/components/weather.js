import React, { Component } from 'react'
import getWeather from '../api'
import Autocomplete from 'react-google-autocomplete'


class Weather extends Component {
  state={
    city: '',
    temp: '',
    conId: '',
    newInput: false
  }

  onCityChange = e => {
    this.setState({
      city: e.target.value,
      newInput: false
    })
  }

  fetchWeather = (city, lat, lng) => {
    getWeather(lat, lng).then(data => {
      this.setState({
        city: city,
        temp: Math.ceil(data.main.temp),
        conId: data.weather[0].id,
        newInput: true
      })
    })
  }


  getCondition = id => {
    if(id >= 200 && id <=299) {
      return "you got some fuckin' thunderstorms!"
    } else if(id >= 300 && id <=399) {
      return "drizzly as fuck out there!"
    } else if(id >= 500 && id <=599) {
      return "raining cats and fuckin' dogs!"
    } else if(id >= 600 && id <=699) {
      return "it's fuckin' snowing!"
    } else if(id >= 700 && id <=799) {
      return "you got some weird fucking hazy weather!"
    } else if(id === 800) {
      return "it's clear as fuck!"
    } else if(id >= 801 && id <=899) {
      return "theres fuckin' clouds and shit!"
    } else {
      return "it's fuckin' weather outside!"
    }
  }

  reset = () => {
    this.setState({
      city: '',
      temp: '',
      conId: '',
      newInput: false
    })
  }

  render() {
    const { temp, city, conId, newInput } = this.state

    return (
      <div className="container" style={{maxWidth: '300px', width: '100%'}}>
        { !newInput &&
          <div className="input-container">
            <Autocomplete
              style={{width: '100%',  textAlign: 'center', border: '1px solid #888'}}
              onPlaceSelected={(place) => {
                const lat = place.geometry.location.lat()
                const lng = place.geometry.location.lng()
                this.fetchWeather(place.name, lat, lng)
              }}
              componentRestrictions={{country: "us"}}
              onChange={this.onCityChange}
              value={city}
              placeholder="Your Fuckin' City"
            />

          </div>
        }

        { newInput &&
          <div className="weather-container">
            <div className="weather-text" style={{marginTop: '50px'}}>
              <h1>{city}</h1>
              <h3>It's fuckin' {temp}°F and {this.getCondition(conId)}</h3>
            </div>

            <button onClick={this.reset}>Reset</button>
          </div>

        }
      </div>
    )
  }
}

export default Weather