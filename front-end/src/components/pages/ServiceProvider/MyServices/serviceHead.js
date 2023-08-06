import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function serviceHead() {
  return (
    <div className='ms-lg-2 me-lg-2'>
      <div className="my-serivice-head-container">
        <Row>
          <Col className="my-serivice-head-container-col-1">
            <span
              className="my-serivice-head-container-col-1-span ms-2"
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
              4
            </span>
          </Col>
          <Col className="my-serivice-head-container-col-2">
            <Button
              className="btn-ServiceProvider-2 my-serivice-head-container-col-2-btn me-3"
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
    </div>
  );
}

export default serviceHead;