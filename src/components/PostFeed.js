import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "react-bootstrap";

function PostFeed({ refresh }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, [refresh]); // <-- Rerun when refresh changes

  return (
    <div style={{ maxHeight: "600px", overflowY: "scroll", padding: "10px" }}>
      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            {/* User Info */}
            <div className="d-flex align-items-center">
              <Image
                src={post.User?.profile_picture || "https://via.placeholder.com/40"}
                roundedCircle
                width={40}
                height={40}
                className="me-2"
              />
              <strong>{post.User?.name || "Unknown User"}</strong>
            </div>

            {/* Post Content */}
            <Card.Text className="mt-2">{post.content}</Card.Text>

            {/* Display Post Images (if available) */}
            {post.PostImages?.length > 0 && (
              <div className="d-flex flex-wrap">
                {post.PostImages.map((img, index) => (
                  <Image
                    key={index}
                    src={`http://localhost:5000${img.imageUrl}`}
                    thumbnail
                    className="me-2 mb-2"
                    style={{ maxWidth: "600px", maxHeight: "600px" }}
                  />
                ))}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PostFeed;
