import React, { useState } from "react";
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
const AddReviewandRating = (props) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission here
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const [startDate, setStartDate] = useState(null);

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
                  value={rating}
                  onChange={handleRatingChange}
                  size={40}
                  activeColor="#ffd700"
                />
              </Col>
              {/* <Col>
                  <div className="input-group ">
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      placeholderText="Select Date"
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i class="bi bi-calendar2-week"></i>
                    </span>
                  </div>
                </Col> */}
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
    </Modal>
  );
};

export default AddReviewandRating;