import React, { Component } from 'react';
import SearchForm from './Search/SearchForm'
import SearchResult from './Search/SearchResult'
import '../styles/SearchPage.css'


const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'
const APIKey2 = '4b40d772d9815a753181161602f31524'


class SearchPage extends Component {

    state = {
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

    HandleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    HandelCitySubmit = (e) => {
        e.preventDefault()
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('błąd')
            })
            .then(response => response.json())
            .then(data => {
                const time = new Date().toLocaleString()
                this.setState(prevState => ({
                    error: false,
                    date: time,
                    city: prevState.value,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    preasure: data.main.pressure,
                    wind: data.wind.speed,
                }))
            })
            .catch(err => {
                this.setState(prevState => ({
                    error: true,
                    city: prevState.value
                }))
            })
    }

    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.value.length <= 2) return
    //     if (prevState.value !== this.state.nalue) {
    //         const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    //         fetch(API)
    //             .then(response => {
    //                 if (response.ok) {
    //                     return response
    //                 }
    //                 throw Error('błąd')
    //             })
    //             .then(response => response.json())
    //             .then(data => {
    //                 const time = new Date().toLocaleString()
    //                 this.setState(prevState => ({
    //                     error: false,
    //                     date: time,
    //                     city: prevState.value,
    //                     sunrise: data.sys.sunrise,
    //                     sunset: data.sys.sunset,
    //                     temp: data.main.temp,
    //                     preasure: data.main.pressure,
    //                     wind: data.wind.speed,
    //                 }))
    //             })
    //             .catch(err => {
    //                 this.setState(prevState => ({
    //                     error: true,
    //                     city: prevState.value
    //                 }))
    //             })
    //     }
    // }

    render() {
        return (
            <div className='search'>
                <SearchForm
                    value={this.state.value}
                    change={this.HandleInputChange}
                    submit={this.HandelCitySubmit}
                />
                <SearchResult
                    weather={this.state}
                />
            </div>
        );
    }
}

export default SearchPage;