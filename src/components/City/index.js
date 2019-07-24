import React, { Component } from 'react';
import './style.css';

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperatura: '',
      humidity: '',
      city: this.props.value
    };
  }

  async getWeather(place, key = '215f2edd98eb0876341f2a455aada914') {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${key}`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({
        temperatura: data.main.temp,
        humidity: data.main.humidity
      });
    }
  }

  async componentDidMount() {
    await this.getWeather(this.state.city);
  }

  render() {
    return (
      <div className="city">
        <span className="name">{this.state.city}</span>
        <span className="value">{this.state.temperatura}</span>
      </div>
    )
  }
}

export default City;
