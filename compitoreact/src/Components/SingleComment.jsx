import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, setComments }) => {
  const deleteComment = async (asin) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUyZjkyN2E4MDg3ZjAwMTljMmEzNzAiLCJpYXQiOjE3MDkzNzM3MzYsImV4cCI6MTcxMDU4MzMzNn0.kFsHC_TK7EwnUDI2FOsSMKtPd5M9P_SklxBkQICbvRw",
          },
        }
      );
      if (resp.ok) {
        alert("Commento eliminato con successo");
        setComments((prevComments) =>
          prevComments.filter((com) => com._id !== asin)
        );
      } else {
        throw new Error("Errore durante l'eliminazione del commento");
      }
    } catch (error) {
      console.error(error);
      alert("Si è verificato un errore durante l'eliminazione del commento");
    }
  };
};

return (
  <ListGroup.Item>
    {comment.comment}
    <Button variant="danger" onClick={() => deleteComment(comment._id)}>
      Elimina
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
