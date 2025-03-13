import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function PostComposer() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="What's on your mind?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PostComposer;
