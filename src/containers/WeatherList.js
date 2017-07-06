import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = _.map(cityData.list.map(weather => { return weather.main.temp; }), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => { return weather.main.pressure; })
        const humidities = cityData.list.map(weather => { return weather.main.humidity; })
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td className="col-md-2 align-middle"><GoogleMap lon={lon} lat={lat} /></td>
                <td className="col-md-1 align-middle">{cityData.city.country}</td>
                <td className="col-md-3 align-middle"><Chart data={temps} color="blue" units="C" /></td>
                <td className="col-md-3 align-middle"><Chart data={pressures} color="red" units="hPa" /></td>
                <td className="col-md-3 align-middle"><Chart data={humidities} color="green" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="col-md-2 align-middle">City</th>
                        <th className="col-md-1 align-middle"> Country</th>
                        <th className="col-md-3 align-middle">Temperature (C)</th>
                        <th className="col-md-3 align-middle">Pressure (hPa)</th>
                        <th className="col-md-3 align-middle">Humidity (%)</th>
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