import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_ERROR } from '../actions/types'
import { GEOLOCATION_CITY_NAME, GEOLOCATION_CITY_NAME_ERROR } from '../actions/types'
import { FETCH_CITY_POLUTION, FETCH_CITY_POLUTION_ERROR } from '../actions/types'
import { START_LOADING, END_LOADING } from '../actions/types'

const initialState = {
    searchWeather: {
        date: '',
        city: '',
        description: '',
        icon: '',
        sunrise: '',
        sunset: '',
        temp: '',
        preasure: '',
        wind: '',
        polution: '',
        error: false,
    },
    geolocationCityName: {
        cityName: '',
        error: false,
    },
    loading: false,
}


export default function search(state = initialState, action) {
    switch (action.type) {
        case FETCH_CITY_WEATHER:
            return {
                ...state,
                searchWeather: {
                    error: action.error,
                    date: action.date,
                    city: action.city,
                    description: action.payload.weather[0].description,
                    icon: action.payload.weather[0].icon,
                    sunrise: action.payload.sys.sunrise,
                    sunset: action.payload.sys.sunset,
                    temp: action.payload.main.temp,
                    preasure: action.payload.main.pressure,
                    wind: action.payload.wind.speed,
                }
            }
        case FETCH_CITY_WEATHER_ERROR:
            return {
                ...state,
                searchWeather: {
                    city: action.city,
                    error: action.error,
                }
            }
        case FETCH_CITY_POLUTION:
            return {
                ...state,
                searchWeather: {
                    polution: action.payload.list.main.aqi,
                    error: action.error,
                }
            }
        case FETCH_CITY_POLUTION_ERROR:
            return {
                ...state,
                searchWeather: {
                    error: action.error,
                }
            }
        case GEOLOCATION_CITY_NAME:
            return {
                ...state,
                geolocationCityName: {
                    cityName: action.payload,
                    error: action.error,
                }
            }
        case GEOLOCATION_CITY_NAME_ERROR:
            return {
                ...state,
                geolocationCityName: {
                    error: action.error,
                }
            }
        case START_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case END_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}