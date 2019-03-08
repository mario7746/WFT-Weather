import React, { Component } from 'react'
import getWeather from '../api'
import Autocomplete from 'react-google-autocomplete'
import fingerLoader from '../images/fingerLoader.gif'

import { getCondition } from '../helpers/conditions'


class Weather extends Component {
  state={
    city: '',
    temp: '',
    conId: '',
    newInput: false,
    loading: false,
  }

  componentDidMount() {
    this.setState({loading: true})
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition((data) => {
        const lat = data.coords.latitude
        const lon = data.coords.longitude
        this.fetchWeather(lat, lon)
      })
    }
  }

  onCityChange = e => {
    this.setState({
      city: e.target.value,
      newInput: false
    })
  }

  fetchWeather = (lat, lon) => {
    this.setState({loading: true})
    getWeather(lat, lon)
      .then(data => {
        this.setState({
          city: data.name,
          temp: Math.ceil(data.main.temp),
          conId: data.weather[0].id,
          newInput: true,
          loading: false
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
    const { temp, city, conId, newInput, loading } = this.state

    return (
      <div className="container" style={{maxWidth: '300px', width: '100%'}}>
        { loading &&

          <div>
            <img src={fingerLoader} alt="middle finger gif"/>
            <h1>Loading Your Fuckin' Weather...</h1>
          </div>

        }

        { (!newInput && !loading) &&
          <div className="input-container">
            <Autocomplete
              style={{width: '100%',  textAlign: 'center', border: '1px solid #888'}}
              onPlaceSelected={(place) => {
                const lat = place.geometry.location.lat()
                const lng = place.geometry.location.lng()
                this.fetchWeather(lat, lng)
              }}
              componentRestrictions={{country: "us"}}
              onChange={this.onCityChange}
              value={city}
              placeholder="Your Fuckin' City"
            />

          </div>
        }

        { ( newInput && !loading ) &&
          <div className="weather-container">
            <div className="weather-text" style={{marginTop: '50px'}}>
              <h1>{city}</h1>
              <h3>It's fuckin' {temp}°F and {getCondition(conId)}</h3>
            </div>

            <button onClick={this.reset}>Check Another Fuckin' City</button>
          </div>

        }
      </div>
    )
  }
}

export default Weather