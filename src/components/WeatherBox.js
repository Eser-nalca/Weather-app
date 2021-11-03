import React from 'react';
import './WeatherBox.css';

export default class WeatherBox extends React.Component {
  getDay = date => {
    let weekday = new Array(7);
    weekday[0] = 'Pazartesi';
    weekday[1] = 'Salı';
    weekday[2] = 'Çarşamba';
    weekday[3] = 'Perşembe';
    weekday[4] = 'Cuma';
    weekday[5] = 'Cumartesi';
    weekday[6] = 'Pazar';

    return weekday[new Date(date).getDay()];
  };

  render(props) {
    return (
      <div className='weather-box'>
        <h1>{this.props.date ? this.getDay(this.props.date) : ''}</h1>
        <img
          src={
            this.props.icon
              ? require(`../images/${this.props.icon}.svg`)
              : require('../images/01d.svg')
          }
          alt='sun'
        />
        <span className='temp'>{Math.round(this.props.temp - 273.15)}°C</span>
      </div>
    );
  }
}
