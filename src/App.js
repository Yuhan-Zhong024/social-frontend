import React from "react";
import AppNavbar from "./components/Navbar";
import PostComposer from "./components/PostComposer";
import PostFeed from "./components/PostFeed";
import UserInfo from "./components/UserInfo";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <AppNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <PostComposer />
            <PostFeed />
          </Col>
          <Col md={4}>
            <UserInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
