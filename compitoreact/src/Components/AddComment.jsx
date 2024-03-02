import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const AddComment = ({ book }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

  console.log(book);

  useEffect(() => {
    setComment((comment) => ({
      ...comment,
      elementId: book.asin,
    }));
  }, [book.asin]);

  const commentSend = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUyZjkyN2E4MDg3ZjAwMTljMmEzNzAiLCJpYXQiOjE3MDkzNzM3MzYsImV4cCI6MTcxMDU4MzMzNn0.kFsHC_TK7EwnUDI2FOsSMKtPd5M9P_SklxBkQICbvRw",
          },
        }
      );
      if (response.ok) {
        alert("Commento inviato con successo!");
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        });
      } else {
        throw new Error("Errore durante l'invio");
      }
    } catch (e) {
      alert("Si è verificato un errore!");
    }
  };

  return (
    <Form onSubmit={commentSend}>
      <FormGroup>
        <FormLabel>Recensione</FormLabel>
        <FormControl
          type="text"
          placeholder="Inserisci qui il commento..."
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Valutazione</FormLabel>
        <FormControl
          as="select"
          value={comment.rate}
          onChange={(e) =>
            setComment({ ...comment, rate: parseInt(e.target.value) })
          }
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </FormControl>
      </FormGroup>
      <Button type="submit">Invia</Button>
    </Form>
  );
};

export default AddComment;
