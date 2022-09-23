import React from "react";
import BookCard from "../components/BookCard";

export default ({ books, changeShelf }) => {

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                        books.map(book => (<BookCard key={book.id} book={book} changeShelf={changeShelf} />))
                    }
                  </ol>
                </div>
              </div>
    );
}