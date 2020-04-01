import React from 'React'
import { checkPropTypes } from 'prop-types';

const BookList = () => {
   return(
       <div className="List">
           {
               props.books.map((books, i) =>{
                   return <bookCard/>
               })
           }
       </div>
   )
}

export default BookList;