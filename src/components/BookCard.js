import React, {useState}  from "react";
import {get} from '../BooksAPI';
export default ({book, changeShelf}) => {
    const [shelf, setShelf] = useState(book.shelf);
    const onChangeShelf = (e) => {
      setShelf(e.target.value);
      get(book.id).then((book) => {
          changeShelf(book, e.target.value);
        });
    }
    if(!book.shelf){
      get(book.id).then((b) => {
        setShelf(b.shelf);

      });
    }
    return (
    
        <li>
                     <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage:
                                 `url("${
                                  book.imageLinks
                                  ? book.imageLinks.thumbnail
                                    ? book.imageLinks.thumbnail
                                    : book.imageLinks.smallThumbnail
                                    ? book.imageLinks.smallThumbnail
                                    : ""
                                  : ""
                                }")`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select value={shelf} onChange={(e) => onChangeShelf(e)}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading" >
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          {book.title}
                        </div>
                        <div className="book-authors">{book.authors && book.authors.join(" - ")}</div>
                      </div>
                    </li>
    );

}