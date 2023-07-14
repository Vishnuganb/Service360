import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image from '../../../assets/images/home/homeImage.jpeg';

function JoinServices() {
    return (
        <>
            <Container className="join_services">
                <Row>
                    <Col xs={12} lg={4} className="join_details">
                        <img src={image} alt="home" className="image_details" />
                        <h4>Post Your jobs</h4>
                        <h6>
                            Share your needs with us, post a job for FREE and find the match.
                        </h6>
                    </Col>
                    <Col xs={12} lg={4} className="join_details">
                        <img src={image} alt="home" className="image_details" />
                        <h4>Post Your jobs</h4>
                        <h6>
                            Share your needs with us, post a job for FREE and find the match.
                        </h6>
                    </Col>
                    <Col xs={12} lg={4} className="join_details">
                        <img src={image} alt="home" className="image_details" />
                        <h4>Post Your jobs</h4>
                        <h6>
                            Share your needs with us, post a job for FREE and find the match.
                        </h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default JoinServices;
