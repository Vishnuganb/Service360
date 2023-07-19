import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './../../../assets/images/home/serviceProviders.jpeg';
import image2 from './../../../assets/images/home/customer.jpeg';

function GetYourService() {
    return (
        <Container className="getyourservices">
            <Row className="mb-5">
                <Col xs={12} lg={4}>
                    <h2 className='fw-bold' style={{ color:"#9F390D"}}>Get Your Services Done Faster</h2>
                    <h6 className='text-muted mb-5 lh-lg'>
                        Looking for efficient and reliable service providers?
                        We've got you covered! Discover a diverse range of skilled professionals who are ready to deliver exceptional results and meet your service needs with speed and precision.
                    </h6>
                    <Button className="btn_getservices">I want to hire</Button> 
                </Col>
                <Col xs={12} lg={2} className='align-self-center'>
                    <img src={image2} alt="home" className="image_getservice d-none d-lg-block" />
                </Col>
                
                <Col xs={12} lg={4}>
                    <h2 className="fw-bold" style={{ color: "#9F390D" }}>Join Our Service Provider Network</h2>
                    <h6 className='text-muted mb-5 lh-lg'>
                        Are you a skilled professional seeking new opportunities? Join our service provider network and showcase your expertise to a wide range of potential clients.
                    </h6>
                    <Button className="btn_getservices align-self-right">I want to Work</Button>
                </Col>
                <Col xs={12} lg={2} className='align-self-center'>
                    <img src={image1} alt="home" className="image_getservice d-none d-lg-block" />
                </Col>
            </Row>
            
            
        </Container>
    );
}

export default GetYourService;
