import axios from 'axios';

const API_KEY ='7a2bd453934340953e6d2f6e10bafd1c';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
const url = `${URL}&q=${city},us`;
const request = axios.get(url)
console.log('requested',request)
return{
  type:FETCH_WEATHER,
  payload:request
}
}
