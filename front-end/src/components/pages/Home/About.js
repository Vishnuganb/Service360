import React from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const aboutData = [
    {
        id: 1,
        image: require('../../../assets/images/home/Customer_1.png'),
        name: 'Angelina Jolie',
        city: 'Jaffna',
        review: `I've been using this platform for a few months now, and it has made my life so much easier. 
        I can easily find service providers based on my requirements and hire them within minutes.
        The variety of services available is impressive, and the platform is user-friendly. Highly recommended!`,
    },
    {
        id: 2,
        image: require('../../../assets/images/home/Customer_2.png'),
        name: 'Virat Kholi',
        city: 'Colombo',
        review: `As a busy professional, I don't have the time to search for service providers individually. 
        This platform has simplified the process for me. I can compare prices, read reviews,
        and make an informed decision about hiring service providers.
        It has saved me time and provided me with reliable professionals. Thank you!`,
    },
    {
        id: 3,
        image: require('../../../assets/images/home/Customer_3.png'),
        name: 'John Smith',
        city: 'Batticalo',
        review: `I recently used this platform to find a service provider, and I must say,
        I'm impressed.The website is intuitive, and the booking process was seamless.
        I found a skilled professional who delivered excellent service.
        It's great to have a platform that connects customers with trusted service providers.
        I will definitely be using it again.`,
    },
]

export default function AppAbout() {
    return (
        <section className="block about-block">

            <div className="title-holder">
                <h2>What Customers Says About</h2>
                <div className="subtitle">Discover insightful blogs uploaded by service providers</div>
            </div>

            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col xl="10">
                        <Card>
                            <Card.Body className="py-5">
                                <Carousel controls indicators>
                                    {
                                        aboutData.map((item) => {
                                            return (
                                                <Carousel.Item key={item.id}>
                                                    <Row className="justify-content-center">
                                                        <Col md="8" lg="9" xl="8">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        src= {item.image}
                                                                        className="rounded-circle mb-4 mb-lg-0 shadow-2 d-none d-lg-block"
                                                                        alt="Customers"
                                                                        width="90"
                                                                        height="90"
                                                                    />
                                                                </div>
                                                                <div className="flex-grow-1 ms-4 ps-3">
                                                                    <blockquote className="blockquote mb-4">
                                                                        <FontAwesomeIcon
                                                                            icon={faQuoteLeft}
                                                                            className="fa-lg text-warning me-2"
                                                                        />
                                                                        <p>
                                                                            <span className="font-italic">
                                                                                {item.review}
                                                                            </span>
                                                                        </p>
                                                                        <footer className="blockquote-footer mb-0">
                                                                            {item.name} {" "}
                                                                            <cite title="Source Title">{item.city}</cite>
                                                                        </footer>
                                                                    </blockquote>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
