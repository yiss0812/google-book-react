import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.SearchBook} action="">
                <imput onChange={props.handleSearch} type="text"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
}