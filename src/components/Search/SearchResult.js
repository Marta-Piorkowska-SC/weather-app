import React from 'react';


const SearchResult = (props) => {
    const { date, error, city, sunrise, sunset, temp, preasure, wind } = props.weather
    let content = null;
    let err = `Nie znaleziono odpowiedzi dla miasta ${city}`
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

export default SearchResult;