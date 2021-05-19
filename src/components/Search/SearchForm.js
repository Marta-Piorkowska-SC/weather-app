import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { fetchCityWeather } from '../../store/reducers/search/actions/fetchCityWeather';
import { connect } from 'react-redux';



class SearchForm extends Component {
    getCityName = data => {
        const { reset, fetchCityWeather } = this.props;
        const city = data.search
        fetchCityWeather(city)
        reset();
    }


    render() {
        const { handleSubmit } = this.props

        return (
            <form className="search-form" onSubmit={handleSubmit(this.getCityName)} >
                <Field name='search' component="input" type="text"></Field>
                <button id="search" type="submit" >Wyszukaj miasto</button>
            </form >
        )
    }
}


export default reduxForm({
    form: 'cityName',
})(connect(null, { fetchCityWeather })(SearchForm))



