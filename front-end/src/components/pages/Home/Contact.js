import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact() {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact</h2>
                    <div className="subtitle">Get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as='textarea' placeholder="Enter your message" required />
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit">Submit</Button>
                    </div>

                </Form>
            </Container>

            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:Service360@example.com" style={{color:'black'}}>service.360.50@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+0123456788" style={{ color: 'black' }}>+01 234 567 88</a>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <p style={{ color: 'black' }}>Nelson Place, Colombo, Sri Lanka</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}