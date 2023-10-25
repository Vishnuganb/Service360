import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import Rating from "react-rating-stars-component";
import BgImage from "../../../../assets/images/header/Background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import axios from 'axios';


const serverLink = "http://localhost:8080"; 

function AddReviewandRating(props) {

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [userDetail, setUserDetail] = useState([]); 
  const response = sessionStorage.getItem('authenticatedUser');
  const userData = JSON.parse(response);

  
 
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newValue) => {
    setRating(newValue); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (userDetail) {
      
      const reviewData = {
        review: review,
        rating: parseInt(rating), 
        userId: userDetail.userid, 
        
      };
      console.log(reviewData, "data");
      
      fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      })
        .then((data) => {
    
          console.log("Review added successfully:", data);
          setShowSuccessMessage(true); 
        })
        .catch((error) => {
          
          console.error("Error adding review:", error);
        })
        .finally(() => {
          
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); 
          setTimeout(() => {
            window.location.reload();
          }, 3000); 
        });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#292D32", color: "#ffffff" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Add Review And Rating</h2>
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Card
          className="py-4 px-2"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <Card.Body>
            <Row className="d-flex justify-content-center mt-3">
              <Col>
                <div style={{ fontWeight: 50, fontSize: 20 }}>
                  Give Your Rating For Our System
                </div>
                <Rating
                  count={5}
                  value={parseInt(rating)} // Convert rating to a number
                  onChange={handleRatingChange}
                  size={40}
                  activeColor="#ffd700"
                />
              </Col>
            </Row>

            <div className="mt-3">
              <Form.Group controlId="comment">
                <Form.Label style={{ fontWeight: 50, fontSize: 20 }}>
                  Please Give Your Comments To Improve Our System
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your comment"
                  rows={3}
                  onChange={handleReviewChange}
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-end  mt-3">
              <Button type="submit" className=" btn-effect">
                <FontAwesomeIcon icon={faCheck} className="submit-icon" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Form>
      {showSuccessMessage && (
        <div className="alert alert-success mt-3">
          Successfully added the review and rating!
        </div>
      )}
    </Modal>
  );
}

export default AddReviewandRating;
