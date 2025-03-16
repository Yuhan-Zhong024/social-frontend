import React, { useState, useEffect } from "react";
import { Image, Form, Button} from "react-bootstrap";


function CommentComposer({ postId }) {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/comments/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Failed to fetch comments:", err));
  }, [postId]);

  return (
    <div style={{ marginTop: "10px" }}>

      {/* comment input*/}
      <Form  className="mt-3 mb-3 d-flex">
        <Form.Control
        type="text"
        rows={3}
        placeholder="Write a comment..."
        // value={}
        onChange={(e) => {}}
        className="me-2 flex-grow-1"
        style={{ height: "45px" }}
        />
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Form>

      {/* comment list */}
      {comments.map((comment) => {
        const profileUrl = comment.User?.profile_picture;
        const userName = comment.User?.name || "Unknown";

        return (
          <div
            key={comment.id}
            style={{
              border: "1px solid #ccc",        
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "5px"
            }}
          >
            
            {/* user info */}
            <div className="d-flex align-items-center">
              <Image
                src={profileUrl}
                roundedCircle
                width={30}
                height={30}
                className="me-2"
                alt="comment profile"
              />
              <strong>{userName}</strong>
            </div>

            <div 
              className="d-flex align-items-center justify-content-between"
              style={{ marginLeft: "35px" }}
            >

              {/* comment content */}
              <p className="mb-0" style={{ marginRight: "10px" }}>
                {comment.content}
              </p>
            </div>
          </div>
        );
      })}

      
    </div>
  );
}

export default CommentComposer;
