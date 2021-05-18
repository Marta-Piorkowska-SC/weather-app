import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_ERROR } from './types'






export function fetchCityWeather(city) {
    console.log('fetchCityWeather');
    console.log(city);
    const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'
    // const APIKey2 = '4b40d772d9815a753181161602f31524'
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    const time = new Date().toLocaleString()

    return function (dispatch) {
        console.log('0');
        fetch(API)
            .then(response => {
                console.log('1');
                if (response.ok) {
                    return response
                }
                throw Error('błąd')
            })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: FETCH_CITY_WEATHER,
                    payload: data,
                    city,
                    error: false,
                    date: time,
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_CITY_WEATHER_ERROR,
                    city,
                    error: true,
                })
            })
    }
}
