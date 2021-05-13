import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_ERROR } from '../actions/types'

const initialState = {
    searchWeather: {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        preasure: '',
        wind: '',
        error: false,
    }
}

export default function search(state = initialState, action) {
    console.log('przed');
    console.log(state);

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
        default:
            return state;
    }
}