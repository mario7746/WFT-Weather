import React, { Component } from 'react'
import getWeather from '../api'
import Autocomplete from 'react-google-autocomplete'

import { getCondition } from '../helpers/conditions'


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
              <h3>It's fuckin' {temp}°F and {getCondition(conId)}</h3>
            </div>

            <button onClick={this.reset}>Reset</button>
          </div>

        }
      </div>
    )
  }
}

export default Weather