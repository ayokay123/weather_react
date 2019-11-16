import React from 'react';
import './App.css';
import Form from '../Form/Form';
import Weather from "../Weather/Weather";

import Weath from "../../utils/WeatherAPI";

class  App extends React.Component {
    state ={
        temper: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description:undefined,
        error : undefined
    };

    searchWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if (country&&city) {
            Weath.searchWeather(city, country).then(data => this.setState({
                temper: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error:''
            }));
        } else {
            this.setState({
                temper: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description:undefined,
                error : "Please Enter A Valid Value"
            })
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Weather App</h1>
                <Form search={this.searchWeather}/>
                <Weather
                    temper={this.state.temper}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default App;
