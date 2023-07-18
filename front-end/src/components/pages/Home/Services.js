import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import image1 from './../../../assets/images/home/AC-Repair.jpeg';
import image2 from './../../../assets/images/home/ElectricalWiring.jpeg';
import image3 from './../../../assets/images/home/plumbing.jpeg';
import image4 from './../../../assets/images/home/Tiles_Fitting.jpeg';
import image5 from './../../../assets/images/home/carpentry.jpeg';
import image6 from './../../../assets/images/home/painting.jpeg';
import image7 from './../../../assets/images/home/masonry.jpeg';
import image8 from './../../../assets/images/home/Glass-Aluminum.jpeg';
import image9 from './../../../assets/images/home/Iron-Work.jpeg';
import image10 from './../../../assets/images/home/Cctv.jpeg';
import image11 from './../../../assets/images/home/Fire-Alarm.jpeg';
import image12 from './../../../assets/images/home/video-Sur.jpeg';


function AppServices() {
    return (
        <section id="service" className="block service-block m-5">

            <div className="title-holder">
                <h2>What do you need to be done</h2>
                <div className="subtitle">Connect with Trusted Service Providers</div>
            </div>

            <Row className="cardflex">

                <Card className="card">
                    <Card.Img src={image1} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>AC Repair</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image2} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>ElectricalWiring</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image3} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Plumbing</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image4} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Tiles Fitting</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img src={image5} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Carpentry</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img src={image6} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Painting</Card.Text>
                    </Card.Body>
                </Card>

            </Row>

            <Row className="cardflex">

                <Card className="card">
                    <Card.Img src={image7} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Masonry</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image8} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Glass&Aluminum</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image9} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Iron Works</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image10} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>CCTV Repair</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image11} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>Fire Alarm</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card">
                    <Card.Img src={image12} variant='top' alt="home" />
                    <Card.Body>
                        <Card.Text>VideoSurveillance</Card.Text>
                    </Card.Body>
                </Card>

            </Row>

        </section>
    );
}

export default AppServices;

