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
    else {
      this.setState({
        city: ''
      });
      this.cleanData(this.state.city)
    }
  }

  async componentDidMount() {
    await this.getWeather(this.state.city);
  }

  cleanData(value) {
    const arr = localStorage['cities'].split(',')
    for (let i in arr) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        localStorage['cities'] = arr.join(',');
      }
    }

    console.log(localStorage['cities']);
  }

  render() {
    return (
      this.state.city ?
        <div className="city">
          <span className="name">{this.state.city} </span>
          <span className="value">{this.state.temperatura} ℃</span>
        </div>
        : null
    )
  }
}

export default City;
