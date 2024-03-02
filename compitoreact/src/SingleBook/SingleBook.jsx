import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "../Components/CommentArea";

const SingleBook = ({ book }) => {
  const [buch, setBuch] = useState(null);

  useEffect(() => {
    setBuch({
      book,
    });
  }, [book]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <CommentArea book={book} />
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
