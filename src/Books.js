import React, {component, Component } from 'react';
import SearchArea from './SearchArea';
import request from 'books';
import BookList from './BookList';

class Book extends Component{
    constructor(props){
        super(props);
        this.state ={
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefaul();
        request
        .get("http://www.googleapis.com/books/v1/volumes")
        .query({q: this.state.searchField})
        .then((data)=>{
            console.log(data);
            this.setState({ books: [...data.body.items]})
        })
    }

     handleSearch = (e) =>{
         this.setState({ searchField: e.target.value })
     }

render() {
    return(
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
            <BookList/>
        </div>
    );
}
}

export default Book;