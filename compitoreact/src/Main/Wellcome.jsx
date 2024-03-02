import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import SingleBook from "../SingleBook/SingleBook";
import { nanoid } from "nanoid";
import Loading from "../Spinner/Loading";

const Welcome = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchBooks, setSearchBooks] = useState("");

  const getBooks = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      setBooks(data.slice(0, 12));
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const changeInput = (e) => {
    setSearchBooks(e.target.value);
  };

  const filterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBooks.toLowerCase())
  );

  return (
    <Container className="mt-3">
      <input
        className="mb-3"
        type="text"
        placeholder="cerca libro..."
        value={searchBooks}
        onChange={changeInput}
      />
      <div className="row">
        <div className="col d-flex flex-wrap gap-3">
          {error && !isLoading && <div>Ops, errore!</div>}
          {!error && isLoading && <Loading />}
          {!error && !isLoading && filterBooks.length === 0 && (
            <div className="fs-1 m-5">Libro non trovato!</div>
          )}
          {!error &&
            !isLoading &&
            filterBooks.map((book) => (
              <SingleBook
                key={nanoid()}
                title={book.title}
                price={book.price}
                img={book.img}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
