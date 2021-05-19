import {
  FETCH_CITY_WEATHER_ERROR,
  FETCH_CITY_WEATHER_STARTED,
  FETCH_CITY_WEATHER_SUCCESS
} from "./types";
import {APIKey} from "../../../../constants/apiKeys";


export const fetchCityWeather = (city) => async (dispatch) => {
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=pl`;
  const time = new Date().toLocaleString()
  dispatch({
    type: FETCH_CITY_WEATHER_STARTED,
    payload: city,
  })
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error('wrong-call')
    }

    const data = await response.json();
    dispatch({
      type: FETCH_CITY_WEATHER_SUCCESS,
      payload: {
        data,
        date: time,
      }
    })

  } catch (e) {
    dispatch({
      type: FETCH_CITY_WEATHER_ERROR,
      payload: e.message
    })
  }
}
