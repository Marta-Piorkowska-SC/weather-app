import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchResult extends Component {

    render() {
      const { city, searchWeather } = this.props;
        const { date, error, sunrise, sunset, temp, preasure, wind, description, icon } = searchWeather
        let content = null;
        let err = `Nie znaleziono wyników dla miasta ${city}`
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        let img = `http://openweathermap.org/img/w/${icon}.png`


        if (!error && city) {
            content = (
                <div className="search-result">
                    <h4>Wyniki wyszukiwania dla miasta <em>{city}</em></h4>
                    <ul>
                        <li>
                            <img src={img} alt="" />
                        </li>
                        <li>
                            {description}
                        </li>
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
    searchWeather: state.search.searchWeather,
    city: state.search.city,
})
export default connect(mapStateToProps, null)(SearchResult);
