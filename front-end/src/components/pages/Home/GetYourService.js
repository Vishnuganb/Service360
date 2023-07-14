import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from './../../../assets/images/home/homeImage.jpeg';

function GetYourService() {
    return (
        <Container className="getyourservices">
            <Row className="mb-5">
                <Col xs={12} lg={6}>
                    <h1>Join our service provider</h1>
                    <h6>
                        Need your services done quickly and efficiently? Look no further!
                        Explore a wide variety of services offered by professionals who can
                        deliver exceptional results.
                    </h6>
                    <Button className="btn_getservices">I want to hire</Button> 
                </Col>
                <Col xs={12} lg={6}>
                    <img src={image} alt="home" className="image_getservice" />
                </Col>
            </Row>
            
            <Row className="mb-4">
                <Col xs={12} lg={6}>
                    <img src={image} alt="home" className="image_getservice" />
                </Col>
                <Col xs={12} lg={6}>
                    <h1>Join our service provider</h1>
                    <h6>
                        Need your services done quickly and efficiently? Look no further!
                        Explore a wide variety of services offered by professionals who can
                        deliver exceptional results.
                    </h6>
                    <Button className="btn_getservices">I want to hire</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GetYourService;
