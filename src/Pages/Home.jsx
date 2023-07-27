import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import Book from "../Component/Book";

const Home = () => {
  const { booksData, totalStatus } = useContext(BookContext);

  // console.log(booksData);

  return (
    <div>
      {totalStatus.map((status) => (
        <div key={status}>
          <h3>{status}</h3>
          <div className="books-container">
            {booksData.filter((book) => book.status === status).length <= 0 ? (
              <p>
                Please add something{" "}
                {status === "Currently Reading"
                  ? "that you're Currently Reading"
                  : status === "Want to Read"
                  ? "you Want to Read"
                  : "that you've already Read"}
                , ¯\_(ツ)_/¯
              </p>
            ) : (
              booksData
                .filter((book) => book.status === status)
                .map((book) => <Book book={book} />)
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
