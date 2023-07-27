import books from "../Database/db";

import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState(books);
  const [searchText, setSearchText] = useState("");

  const totalStatus = ["Currently Reading", "Want to Read", "Read"];

  const handleStatusChange = (e, selectedBook) => {
    const newBooksData = booksData.map((book) =>
      book.name === selectedBook.name
        ? { ...book, status: e.target.value }
        : book
    );
    setBooksData(newBooksData);
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const searchedBooks =
    searchText === ""
      ? []
      : booksData.filter((book) =>
          book.name.toLowerCase().includes(searchText.toLowerCase())
        );

  // useEffect(() => {
  //   console.log(searchedBooks);
  // }, [searchedBooks]);

  return (
    <BookContext.Provider
      value={{
        booksData,
        totalStatus,
        searchText,
        searchedBooks,
        handleStatusChange,
        handleSearchText
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
