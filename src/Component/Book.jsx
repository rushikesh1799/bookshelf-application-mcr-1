import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Book = ({ book }) => {
  const { handleStatusChange } = useContext(BookContext);

  return (
    <div className="book-card" key={book.name}>
      <img src={book.img} alt={book.name + " img"}></img>
      <h3>{book.name}</h3>
      <p>{book.author}</p>
      <select
        name="status"
        id="status"
        defaultValue={book.status}
        onChange={(e) => handleStatusChange(e, book)}
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
    </div>
  );
};

export default Book;
