import axios from 'axios';

const API_KEY = 'e54723d58b2de0b7751a453c8beb51ee';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
    country = (!country) ? 'us' : country;
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}