import React, { Component } from 'react';
import SearchForm from './Search/SearchForm'
import SearchResult from './Search/SearchResult'
import '../styles/SearchPage.css'



class SearchPage extends Component {

    render() {
        return (
            <div className='search'>
                <SearchForm />
                <SearchResult />
            </div>
        );
    }
}

export default SearchPage;