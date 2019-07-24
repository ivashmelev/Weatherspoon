import React, { Component } from 'react';
import './style.css';
import City from '../City';

class Weatherspoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperatura: '',
      humidity: '',
      cities: ''
    };
  }

  async authApi(key = '215f2edd98eb0876341f2a455aada914') {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`
    );
    if (response.ok) {
      // const data = await response.json();
      // this.setState({
      //   city: data.city.name
      // });
      // console.log(this.state.city)
    }
  }

  async componentDidMount() {
    await this.authApi()
  }



  render() {
    setInterval(async () => {
      await this.authApi();
    }, 540000);
    return (
      <div className="wrapper">
        <div className="head">
          <h2 className="title">Город</h2>
          <div className="content">
            {this.state.cities}
          </div>
          <button onClick={this.addCity}>add</button>
        </div>
      </div>
    )
  }
}

export default Weatherspoon;
