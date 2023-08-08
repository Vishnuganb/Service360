import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function serviceHead() {
  return (
    <>
      <div className="my-serivice-head-container">
        <Row>
          <Col className="my-serivice-head-container-col-1">
            <span
              className="my-serivice-head-container-col-1-span"
              style={{ fontWeight: "600" }}
            >
              My Services
            </span>
            <span
              className="my-serivice-head-container-col-1-no"
              style={{
                backgroundColor: "none",
                border: "2px solid black",
                color: "black",
                borderRadius: "10px",
              }}
            >
              3
            </span>
          </Col>
          <Col className="my-serivice-head-container-col-2">
            <Button
              className="btn-ServiceProvider-2 my-serivice-head-container-col-2-btn"
              style={{
                borderRadius: "10px",
              }}
            >
              <i className="fas fa-plus pe-2"></i>
              Add Services
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default serviceHead;