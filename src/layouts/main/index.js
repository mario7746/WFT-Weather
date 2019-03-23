import React, { Component } from 'react'
import Weather from '../../components/weather'
import './styles.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>What's the Fuckin' Weather?</h1>
          <Weather/>
      </div>
    );
  }
}

export default App
