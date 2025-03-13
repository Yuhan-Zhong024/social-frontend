import React from "react";
import { Card } from "react-bootstrap";

function UserInfo() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User Info</Card.Title>
        <Card.Text>
          Display the current logged-in user or a selected user’s profile.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserInfo;
