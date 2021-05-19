import { GEOLOCATION_CITY_NAME, GEOLOCATION_CITY_NAME_ERROR, FETCH_CITY_WEATHER_ERROR, FETCH_CITY_WEATHER_STARTED, FETCH_CITY_WEATHER_SUCCESS, FETCH_CITY_POLUTION, FETCH_CITY_POLUTION_ERROR, END_LOADING, START_LOADING } from './actions/types'


const initialState = {
  city: null,
  searchWeatherError: null,
  searchWeather: {
    date: '',
    description: '',
    icon: '',
    sunrise: '',
    sunset: '',
    temp: '',
    preasure: '',
    wind: '',
    polution: '',

  },
  geolocationCityName: {
    cityName: '',
    error: false,
  },
  loading: false,
}


export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY_WEATHER_STARTED:
      return {
        ...state,
        city: action.payload,
        loading: true,
        searchWeatherError: null,
      }
    case FETCH_CITY_WEATHER_SUCCESS:
      const { data, date } = action.payload
      return {
        ...state,
        loading: false,
        searchWeather: {
          date: date,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          sunrise: data.sys.sunrise,
          sunset:data.sys.sunset,
          temp: data.main.temp,
          preasure: data.main.pressure,
          wind: data.wind.speed,
        }
      }
    case FETCH_CITY_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        searchWeatherError: action.payload,
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
