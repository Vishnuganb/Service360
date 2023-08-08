import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Dropdown,
  Card,
} from "react-bootstrap";
import Rating from "react-rating-stars-component"; // Import the rating component
import BgImage from "../../../../assets/images/header/Background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const AddReviewandRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission here
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <h2>Add Review and Rating</h2>
      <Form onSubmit={handleSubmit} className="block py-3">
        <Card
          className="block  py-5"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <Card.Body>
            <h3 className="mt-1 " style={{ fontWeight: 50 }}>
              Which Service You Access From Our Website
            </h3>

            <Row className="d-flex justify-content-center">
              <Col style={{ fontWeight: 50, fontSize: 20 }}>
                Select Services:
              </Col>

              <Col>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Select Service Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Card.Title
              className="mt-3"
              style={{ fontWeight: 50, fontSize: 20 }}
            >
              Give Your Rating For Our System
            </Card.Title>
            {/* Include the rating component */}
            <Rating
              count={5}
              value={rating}
              onChange={handleRatingChange}
              size={24}
              activeColor="#ffd700"
            />

            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your comment"
                rows={3}
              />
            </Form.Group>

            <Button type="submit" className="btn-effect">
              <FontAwesomeIcon icon={faCheck} className="submit-icon" />
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default AddReviewandRating;
