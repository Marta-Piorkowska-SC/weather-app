import { FETCH_CITY_WEATHER, FETCH_CITY_WEATHER_ERROR } from './types'
import { GEOLOCATION_CITY_NAME, GEOLOCATION_CITY_NAME_ERROR } from './types'
import { FETCH_CITY_POLUTION, FETCH_CITY_POLUTION_ERROR } from './types'
import { START_LOADING, END_LOADING } from './types'


export function getLocation() {

    function success(pos) {
        const crd = pos.coords;
        let lat = crd.latitude.toString();
        let lon = crd.longitude.toString();
        console.log(lat);
        console.log(lon);
        return function (dispatch) {
            dispatch(
                getCityName(lat, lon),
                startLoading()
            )
        }
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };


    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        return function (dispatch) {
            dispatch(
                {
                    type: GEOLOCATION_CITY_NAME_ERROR,
                    error: true,
                },
                endLoading()
            )
        }
    }
    return function (dispatch) {

        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(dispatch(success()));
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(dispatch(success()), dispatch(errors()), options);
                    } else if (result.state === "denied") {
                        alert("Odmówiłeś podania swojej obecnej pozycji");
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
            alert("Nie można pobrać twojej obecnej pozycji");
        }
    }


}

export function getCityName(lat, lon) {
    const APIKey = 'pk.2071e0046d101c051f7116cd10935bf4'
    let API = `https://us1.locationiq.com/v1/reverse.php?key=${APIKey}&lat=${lat}&lon=${lon}&format=json`;
    console.log(API);
    console.log('getCityName function ');

    return function (dispatch) {
        console.log('fetch');
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('błąd')
            })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GEOLOCATION_CITY_NAME,
                    payload: data,
                    error: false,
                    loading: false
                })
            })
            .catch(err => {
                dispatch({
                    type: GEOLOCATION_CITY_NAME_ERROR,
                    error: true,
                    loading: false
                })
            })
    }
}

export function fetchCityPolution(lat, lon) {
    const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'
    // const APIKey2 = '4b40d772d9815a753181161602f31524'
    const API = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;

    return function (dispatch) {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('błąd')
            })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: FETCH_CITY_POLUTION,
                    payload: data,
                    error: false,
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_CITY_POLUTION_ERROR,
                    error: true,
                })
            })
    }
}



export function fetchCityWeather(city) {
    const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'
    // const APIKey2 = '4b40d772d9815a753181161602f31524'
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=pl`;
    const time = new Date().toLocaleString()

    return function (dispatch) {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('błąd')
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
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

export function startLoading() {
    return function (dispatch) {
        dispatch({
            type: START_LOADING,
            loading: true
        })
    }
}

export function endLoading() {
    return function (dispatch) {
        dispatch({
            type: END_LOADING,
            loading: false
        })
    }
}
