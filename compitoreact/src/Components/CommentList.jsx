import React from "react";
import { Row, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow, setComments }) => {
  return (
    <Row>
      <ListGroup>
        {commentsToShow.map((comment) => (
          <SingleComment
            setComments={setComments}
            comment={comment}
            key={comment._id}
          />
        ))}
      </ListGroup>
    </Row>
  );
};

export default CommentList;
