import React from "react";
import CurrentlyReading from "./CurrentlyReading";
import { Link } from 'react-router-dom';
import WantToRead from "./WantToRead";
import Read from "./Read";
export default ({currentlyReading, wantRead, read, changeShelf}) => {

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading
                books={currentlyReading}
                changeShelf={changeShelf}
                />
              <WantToRead 
                books={wantRead}
                changeShelf={changeShelf}
              />
              <Read 
                changeShelf={changeShelf}
                books={read}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    );
}