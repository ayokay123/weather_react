import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    render() {
        return (
          <div className="weather">
              <div className="Business-information">
                  <div className="Business-address">
                      {this.props.city && this.props.country ? <p>Location: {this.props.city},{this.props.country} </p> : ''}
                      {this.props.temper ? <p>Temperature: {this.props.temper}</p>: ''}
                      {this.props.humidity ? <p>Humidity: {this.props.humidity}</p>: ''}
                      {this.props.description ? <p>Description: {this.props.description}</p> : ''}
                      {this.props.error ? <p>{this.props.error}</p>: ''}
                  </div>
              </div>
          </div>
        );
    }
}

export default Weather;
