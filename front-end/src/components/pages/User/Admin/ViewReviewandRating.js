import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col, Form, Container } from "react-bootstrap";
import BgImage from "../../../../assets/images/header/Background.png";
import "../../../../style/User/Admin/ViewReviewandRating.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import profileIcon from "../../../../assets/images/header/user.jpg";
import reviewImg from "../../../../assets/images/header/reviews.png"

const AddReviewandRating = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const ratingsData = [
    { stars: 5, count: 5000 },
    { stars: 4, count: 3000 },
    { stars: 3, count: 2000 },
    { stars: 2, count: 1000 },
    { stars: 1, count: 1000 },
  ];

  const totalRatings = ratingsData.reduce(
    (total, rating) => total + rating.count,
    0
  );
  const averageRating =
    ratingsData.reduce((sum, rating) => sum + rating.stars * rating.count, 0) /
    totalRatings;

  const starCounts = ratingsData.map((rating) => rating.count);

  const barChartData = {
    labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    datasets: [
      {
        label: "Star Count",
        data: starCounts,
        backgroundColor: "gold",
      },
    ],
  };

  const renderStars = (ratingValue) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars}
          icon={faStarHalfAlt}
          style={{ color: "gold" }}
        />
      );
    }

    return stars;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      <h2>View Reviews And Ratings About Our System</h2>
      <Form
        className="block py-5  "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <Row className="mt-5 d-justify flex-content-around">
          <Col>
            <Card style={{ backgroundImage: `url(${BgImage})`, height: '190px' }} className="block">
              <div className="text-center">
                <div className="d-flex justify-content-center fs-3 px-2">
                  Average Rating:
                </div>
                <div className="fs-1 d-flex justify-content-center fw-bold px-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="d-flex justify-content-center fs-1 px-2">
                  {renderStars(averageRating)}
                </div>
              </div>
            </Card>
          </Col>

          <Col>
            <Card style={{ backgroundImage: `url(${BgImage})`, height: '190px' }} className="block">
              <div className="text-center">
                <div className="fs-3 d-flex justify-content-center px-2">
                  {" "}
                  Reviews
                </div>
                <div className="fs-1 d-flex justify-content-center fw-bold px-2">
                  {totalRatings}
                </div>
                <div className="fs-1 d-flex justify-content-center fw-bold px-2">
                  <img src={reviewImg} style={{ height: '50px', width: '50px' }} />
                </div>
              </div>
            </Card>
          </Col>

          <Col>
            <Card className="block" style={{ backgroundImage: `url(${BgImage})`, height: '190px' }}>
              <div className="px-2">
                {ratingsData.map((rating) => (
                  <star key={rating.stars}>
                    <div className="" >
                      <div className="" style={{ display: "flex", alignItems: "center" }}>
                        <div className="" style={{ marginRight: "20px", marginLeft: "10px" }}>
                          <span style={{ fontWeight: 500, fontSize: 20, marginLeft: "20px" }}>
                            {rating.stars}
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{ color: "gold", marginLeft: "20px" }}
                            />
                          </span>
                        </div>
                        <div
                          style={{
                            flex: 2,
                            height: 15,
                            borderRadius: 15,
                            overflow: "hidden",
                            backgroundColor: "rgb(231, 227, 227)",
                            marginLeft: "10px",

                          }}
                        >
                          <div
                            style={{
                              width: `${(rating.count / totalRatings) * 100}%`,
                              height: 15,
                              backgroundColor: "#333F7D",
                            }}
                          ></div>
                        </div>

                      </div>
                    </div>
                  </star>
                ))}
              </div>
            </Card>
          </Col>
        </Row>


        <Row className="mt-5">
          <Col className="d-flex justify-content-center  input-group">
            <DatePicker
              style={{ borderradius: 40 }}
              selected={startDate}
              onChange={handleStartDateChange}
              placeholderText="From Date"
              dateFormat="dd/MM/yyyy"
              className="form-control"
            />
            <span className="input-group-text">
              <i class="bi bi-calendar2-week"></i>
            </span>
          </Col>

          <Col className="input-group">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              placeholderText="To Date"
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              className="form-control"
            />
            <span className="input-group-text">
              <i class="bi bi-calendar2-week"></i>
            </span>
          </Col>
        </Row>
        <Card className="mt-5 mb-5 text-center display: 'flex'" style={{ backgroundImage: `url(${BgImage})` }}>
          <Row className="mt-5 ">
            <Col>
              <div>
                <h3>Profile Picture</h3>
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="abc"
                  style={{
                    width: "auto",
                    height: "80px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>
                <h3>Date</h3>
                10/08/2023.
              </div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>
                <h3>User Name</h3>
                <Form.Group>
                  <Form.Label>S.Mithilan</Form.Label>
                </Form.Group>
              </div>
            </Col>

            <Col style={{ fontWeight: 50, fontSize: 20 }}>
              <h3>Review and Rating</h3>
              Very Helpful And Thank You
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <div>
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="abc"
                  style={{
                    width: "auto",
                    height: "80px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>10/08/2023.</div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>
                <Form.Group>
                  <Form.Label>S.Mithilan</Form.Label>
                </Form.Group>
              </div>
            </Col>

            <Col style={{ fontWeight: 50, fontSize: 20 }}>
              Very Helpful And Thank You
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
              </div>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col>
              <div>
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="abc"
                  style={{
                    width: "auto",
                    height: "80px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>10/08/2023.</div>
            </Col>

            <Col>
              <div style={{ fontWeight: 50, fontSize: 20 }}>
                <Form.Group>
                  <Form.Label>S.Mithilan</Form.Label>
                </Form.Group>
              </div>
            </Col>

            <Col style={{ fontWeight: 50, fontSize: 20 }}>
              Very Helpful And Thank You
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
              </div>
            </Col>
          </Row>
        </Card>
      </Form>
    </Container>
  );
};

export default AddReviewandRating;