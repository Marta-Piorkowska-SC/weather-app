import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCityWeather } from '../../actions/searchActions';



class SearchResult extends Component {

    componentDidMount() {
        this.props.fetchCityWeather('WarszawaA');
    }

    render() {
        const { date, error, city, sunrise, sunset, temp, preasure, wind } = this.props.search
        let content = null;
        let err = `Nie znaleziono wyników dla miasta ${city}`
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()


        if (!error && city) {
            content = (
                <div className="search-result">
                    <h4>Wyniki wyszukiwania dla miasta <em>{city}</em></h4>
                    <ul>
                        <li>
                            Dane dla dnia i godziny : {date}
                        </li>
                        <li>
                            Aktualna temperatura: {temp} &deg;C
                                </li>
                        <li>
                            Ciśnienie atmosferyczne: {preasure} hPa
                                </li>
                        <li>
                            Siła wiatru: {wind} m/s
                                </li>
                        <li>
                            Wschód słońca: {sunriseTime}
                        </li>
                        <li>
                            Zachód sońca: {sunsetTime}
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <div className='result' >
                { error ? err : content}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    search: state.search.searchWeather
})
export default connect(mapStateToProps, { fetchCityWeather })(SearchResult);
