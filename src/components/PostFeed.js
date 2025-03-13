import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function PostFeed() {
  const [showCommentBox, setShowCommentBox] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>Post content goes here...</Card.Text>
        <Button variant="link" onClick={() => setShowCommentBox(!showCommentBox)}>
          Comment
        </Button>
        {showCommentBox && (
          <Form className="mt-2">
            <Form.Group>
              <Form.Control type="text" placeholder="Write a comment..." />
            </Form.Group>
            <Button variant="primary" className="mt-2" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}

export default PostFeed;
