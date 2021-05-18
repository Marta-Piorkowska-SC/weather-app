import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { fetchCityWeather } from '../../actions/searchActions';
import { connect } from 'react-redux';



class SearchForm extends Component {


    getcityName = data => {
        const { reset, fetchCityWeather } = this.props;
        const city = data.search

        fetchCityWeather(city)
        reset();
    }


    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.getcityName)} >
                <Field name='search' component="input" type="text"></Field>
                <button id="search" type="submit" >Wyszukaj miasto</button>
            </form >
        )
    }
}


export default reduxForm({
    form: 'cityName',
})(connect(null, { fetchCityWeather })(SearchForm))



