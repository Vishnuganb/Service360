import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const ForumSearch = () => {
  return (
    <Form >
      <fieldset>
        <Row className="AdsSearchRow">
          <h1>Search Questions</h1>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control id="disabledTextInput" placeholder="Search" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Select Category</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>Mechanic</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Newest</option>
                <option>Oldest</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </fieldset>
    </Form>
  );
};

export default ForumSearch;
