import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "react-bootstrap";
import CommentComposer from "./CommentComposer";

function PostFeed({ user, refresh }) {
  const [posts, setPosts] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        data.forEach((post) => fetchLikeCount(post.id));
      })
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, [refresh]);

  const fetchLikeCount = (postId) => {
    fetch(`http://127.0.0.1:5000/posts/${postId}/count`)
      .then((res) => res.json())
      .then((data) => setLikeCounts((prev) => ({ ...prev, [postId]: data.likeCount })))
      .catch((err) => console.error("Failed to fetch like count:", err));
  };

  const handleLike = (postId) => {
    fetch(`http://127.0.0.1:5000/posts/${postId}/like`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`, 
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => fetchLikeCount(postId)) 
      .catch((err) => console.error("Failed to like post:", err));
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBox((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

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

            {/* Post Timestamp */}
            <div className="text-muted" style={{ fontSize: "0.9em" }}>
              {new Date(post.createdAt).toLocaleString()}
            </div>

            {/* Post Content */}
            <Card.Text className="mt-2">{post.content}</Card.Text>

            {/* Display Post Images (if available) */}
            {post.PostImages?.length > 0 && (
              <div className="d-flex flex-wrap">
                {post.PostImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img.imageUrl}
                    thumbnail
                    className="me-2 mb-2"
                    style={{ maxWidth: "600px", maxHeight: "600px" }}
                  />
                ))}
              </div>
            )}

            {/* Like Button & Like Count */}
            <div className="d-flex align-items-center">
              <Button variant="outline-primary" size="sm" onClick={() => handleLike(post.id)}>
                👍 Like {likeCounts[post.id] !== undefined ? likeCounts[post.id] : ""}
              </Button>

              {/* Show Comment Button */}
              <Button variant="outline-primary" className="ms-3" size="sm" onClick={() => toggleCommentBox(post.id)}>
                {showCommentBox[post.id] ? "Hide Comment" : "Show Comment"}
              </Button>
            </div>

            {/* Display Comments */}
            {showCommentBox[post.id] && <CommentComposer postId={post.id} user={user} />}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PostFeed;
