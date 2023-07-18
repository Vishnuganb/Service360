import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './../../../assets/images/home/serviceProviders.jpeg';
import image2 from './../../../assets/images/home/customer.jpeg';

function GetYourService() {
    return (
        <Container className="getyourservices">
            <Row className="mb-5">
                <Col xs={12} lg={8}>
                    <h1 className='fw-bold' style={{ color:"#9F390D"}}>Get Your Services Done Faster</h1>
                    <h6 className='text-muted mb-5 lh-lg'>
                        Looking for efficient and reliable service providers? We've got you covered! Discover a diverse range of skilled professionals who are ready to deliver exceptional results and meet your service needs with speed and precision.
                        Whether it's home repairs, event planning, or any other service, our platform connects you with experienced professionals who can get the job done quickly and efficiently.
                        Say goodbye to delays and hassle – hire the right service provider today and experience the convenience of swift, top-notch services at your doorstep.
                    </h6>
                    <Button className="btn_getservices">I want to hire</Button> 
                </Col>
                <Col xs={12} lg={4} className='align-self-center'>
                    <img src={image2} alt="home" className="image_getservice" />
                </Col>
            </Row>
            
            <Row className="mb-5">
                <Col xs={12} lg={4} className='align-self-center'>
                    <img src={image1} alt="home" className="image_getservice" />
                </Col>
                <Col xs={12} lg={8}>
                    <h1 className="fw-bold" style={{ color: "#9F390D" }}>Join Our Service Provider Network</h1>
                    <h6 className='text-muted mb-5 lh-lg'>
                        Are you a skilled professional seeking new opportunities? Join our service provider network and showcase your expertise to a wide range of potential clients.
                        Work on your own terms, set your own prices, and enjoy the freedom of being your own boss.
                        Expand your client base, gain valuable experience, and grow your business with us. Join today and take the next step towards a successful career as a service provider.
                        Don't miss out on the chance to connect with like-minded professionals, collaborate on exciting projects, and build a thriving business. background: #f2f2f2;
                    </h6>
                    <Button className="btn_getservices">I want to Work</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GetYourService;
