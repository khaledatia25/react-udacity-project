import "./App.css";
import { useState, useEffect } from "react";
import ListBooks from "./views/ListBooks";
import SearchPage from './views/SearchPage';
import { search, getAll, update } from './BooksAPI';
import { Routes, Route } from 'react-router-dom';


function App() {
  let cancel= false;
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantRead, setWantRead] = useState([]);
  const [read, setRead] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [found, setFound] = useState(false);
  useEffect(() => {
    if(!cancel) getBooks();
    return () => {
      cancel = true;
    }
  },[]);
  const getBooks = () => {
    getAll().then((data) => {
      
      setCurrentlyReading(data.filter(b => b.shelf === "currentlyReading"));
      setWantRead(data.filter(b => b.shelf === "wantToRead"));
      setRead(data.filter(b=>b.shelf === "read"));
    });
  }
  const changeShelf = (book, shelf) => {
      update(book, shelf).then(() => {
        
        getBooks();
      });
  }
  const onSearchTextChange = (text) => {
    setSearchText(text);
    if(text === ""){
      setFound(false);
      setSearchResult([]);
    }else{
      search(text).then((res) => {
        
        if(res.error){
          setFound(false);
          setSearchResult([]);
        }else{
          setFound(true);
          setSearchResult(res);
        }
      });
    }
    
  }
  return (
    <Routes className="app">
      <Route path="/" exact element={
          <ListBooks 
          currentlyReading={currentlyReading} 
          wantRead={wantRead}
          read={read}
          changeShelf={changeShelf}
          /> 
      } />
      <Route path='/search' exact element={
        <SearchPage 
          searchText={searchText}
          searchResult={searchResult}
          found={found}
          changeShelf={changeShelf}
          onSearchTextChange={onSearchTextChange}
        />}/> 
    
    </Routes>
  );
}

export default App;
