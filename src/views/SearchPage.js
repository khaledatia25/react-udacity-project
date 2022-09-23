import React from "react";
import {Link} from 'react-router-dom';
import BookCard from '../components/BookCard';
export default ({searchText, searchResult, found, changeShelf, onSearchTextChange}) => {
    

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {found&&
                  searchResult.map(book => (<BookCard key={book.id} book={book} changeShelf={changeShelf}/>))
                }
                {!found&&<div
                    style={{
                      width: '100%',
                      height:'100%',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      color:'#777',
                      fontSize:'50px'
                    }}
                  >No Results</div>}
            </ol>
          </div>
        </div>
    );
}