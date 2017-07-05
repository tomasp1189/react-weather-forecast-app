import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => {
            return weather.main.temp;
        })
        const pressures = cityData.list.map(weather => {
            return weather.main.pressure;
        })
        const humidities = cityData.list.map(weather => {
            return weather.main.humidity;
        })
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{cityData.city.country}</td>
                <td><Chart data={temps} color="blue" units="K"/></td>
                <td><Chart data={pressures} color="red" units="hPa"/></td>
                <td><Chart data={humidities} color="green" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);