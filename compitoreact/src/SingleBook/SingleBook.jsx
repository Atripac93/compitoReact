import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import CommentArea from "../Components/CommentArea";

const SingleBook = ({ title, price, img }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Inserisci un commento</Button>
          {/* <CommentArea asin={asin} /> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
