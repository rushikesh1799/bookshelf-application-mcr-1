import React, { useContext } from "react";
import Book from "../Component/Book";
import { BookContext } from "../Context/BookContext";

const Search = () => {
  const { searchText, searchedBooks, handleSearchText } = useContext(
    BookContext
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search Book"
        value={searchText}
        onChange={(e) => handleSearchText(e)}
        className="search-box"
      />

      <h1>Searched Books:</h1>
      <div className="books-container">
        {searchText === "" ? (
          <p>Type Something in search box</p>
        ) : (
          searchedBooks.map((book) => <Book book={book} />)
        )}
      </div>
    </div>
  );
};

export default Search;
