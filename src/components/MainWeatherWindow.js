import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
  render(props) {
    const Title = this.props.city ? null : <h1 className='title'>Hava Durumu</h1>;

    return (
      <div className='main'>
        <div className='inner-main'>
          {Title}
          <img
            src={
              this.props.data
                ? require(`../images/${this.props.data.icon}.svg`)
                : require('../images/01d.svg')
            }
            alt='Güneşli'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
          />

          <div
            className='Bugün'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
          >
            <span>Bugün</span>
            <h1>{this.props.city}</h1>
            <p>
              Sıcaklık: {this.props.data ? Math.round(this.props.data.temp - 273.15) : 0}
              °C
            </p>
            <p>{this.props.data ? this.props.data.weather_desc.toLowerCase() : ''}</p>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
