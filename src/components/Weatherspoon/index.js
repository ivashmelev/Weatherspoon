import React, { Component } from 'react';
import './style.css';
import City from '../City';

class Weatherspoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperatura: '',
      humidity: '',
      // city: '',
      cities: localStorage['cities'] ? localStorage['cities'].split(',') : []
    };
  }

  async authApi(key = '215f2edd98eb0876341f2a455aada914') {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({
        city: data.city.name
      });
      console.log(this.state.cities)
    }
  }

  async componentDidMount() {
    await this.authApi()
  }

  addCity(city = 'Moscow') {
    localStorage['cities'] = [...this.state.cities, city];

    this.setState(prevState => ({
      cities: [...prevState.cities, city]
    }));

    // if (localStorage['cities']) {
    // }

  }

  render() {
    setInterval(async () => {
      await this.authApi();
    }, 540000);
    return (
      <div className="wrapper">
        <div className="head">
          <h2 className="title">Weatherspoon</h2>
          <div className="content">
            <div className="background"></div>
            {this.state.cities.map((element, index) =>
              <City key={index} value={element} />
            )}
          </div>
          <div className="add_city">
            <input type="text" id='cityInput' />
            <button onClick={() => this.addCity(document.getElementById('cityInput').value)}>add</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Weatherspoon;
