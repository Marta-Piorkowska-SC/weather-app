import React from 'react';

const SearchForm = (props) => {


    return (
        <form className='search-form'
            onSubmit={props.submit}
        >
            <input
                type="text"
                value={props.value}
                name="search"
                placeholder="Wpisz miasto"
                onChange={props.change} />
            <button id="search">Wyszukaj miasto</button>
        </form>
    );
}

export default SearchForm;