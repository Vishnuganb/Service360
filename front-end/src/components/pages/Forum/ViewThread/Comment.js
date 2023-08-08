import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Comment = (props) => {
  const { commentData } = props;
  
  if (!commentData || commentData.length === 0) {
    return (
      <div>
        <p>No comments available.</p>
      </div>
    );
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#292D32" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="AskQPop">Comments</p>
          </Modal.Title>
        </Modal.Header>
        <div className="InnerCreateForum">
          <Form>
            <fieldset>
              {commentData.map((comment) => (
                <div key={comment.id}>
                  <div className="d-flex justify-content-center text-muted">
                    {comment.timestamp}
                  </div>

                  <div>
                    <div className="text-muted">{comment.author}</div>
                    <div>{comment.content}</div>
                  </div>
                </div>
              ))}
              <Form.Group className=" mt-3">
                <Form.Control
                  id="disabledTextInput"
                  required
                  placeholder="Post Your Comment"
                ></Form.Control>
              </Form.Group>
              <i className="fa-thin fa-paper-plane"></i>
            </fieldset>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Comment;
