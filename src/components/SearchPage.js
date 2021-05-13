import React, { Component } from 'react';
import SearchForm from './Search/SearchForm'
import SearchResult from './Search/SearchResult'
import '../styles/SearchPage.css'



class SearchPage extends Component {

    HandleInputChange = (e) => {
        // this.setState({
        //     value: e.target.value
        // })
    }

    HandelCitySubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <div className='search'>
                <SearchForm
                // value={this.state.value}
                // change={this.HandleInputChange}
                // submit={this.HandelCitySubmit}
                />
                <SearchResult />
            </div>
        );
    }
}

export default SearchPage;