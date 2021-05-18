import {
    FETCH_CITY_WEATHER,
    FETCH_CITY_WEATHER_ERROR,
    GEOLOCATION_CITY_NAME_LOADING,
    GEOLOCATION_CITY_NAME,
    GEOLOCATION_CITY_NAME_ERROR
} from '../actions/types'

const initialState = {
    searchWeather: {
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        preasure: '',
        wind: '',
        error: false,
    },
    geolocationCityName: {
        cityName: '',
        error: false,
        loading: false
    }
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
        case GEOLOCATION_CITY_NAME:
            return {
                ...state,
                geolocationCityName: {
                    cityName: action.payload,
                    error: action.error,
                    loading: action.loading,
                }
            }
        case GEOLOCATION_CITY_NAME_LOADING:
            return {
                ...state,
                geolocationCityName: {
                    loading: action.loading,
                }
            }
        case GEOLOCATION_CITY_NAME_ERROR:
            return {
                ...state,
                geolocationCityName: {
                    loading: action.loading,
                    error: action.error,
                }
            }
        default:
            return state;
    }
}