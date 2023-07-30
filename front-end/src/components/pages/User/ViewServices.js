import React from 'react';
import { Row, Card, Col} from 'react-bootstrap';
import image1 from '../../../assets/images/home/AC-Repair.jpeg'
import image2 from '../../../assets/images/home/ElectricalWiring.jpeg';
import image3 from '../../../assets/images/home/plumbing.jpeg';
import image4 from '../../../assets/images/home/Tiles_Fitting.jpeg';
import image5 from '../../../assets/images/home/carpentry.jpeg';


import BgImage from '../../../assets/images/header/Background.png';
import '../../../style/User/ViewServices.css';


const servicesData = [
    { id: 1, image: image1, text: 'AC Repair', category: 'Electrical & Plumbing' },
    { id: 2, image: image2, text: 'Electrical Wiring', category: 'Electrical & Plumbing' },
    { id: 3, image: image3, text: 'Plumbing', category: 'Electrical & Plumbing' },
    { id: 4, image: image4, text: 'Tiles Fitting', category: 'Construction' },
    { id: 5, image: image5, text: 'Carpentry', category: 'Interior Works' },
];

const serviceCategories = {
    "Interior Works": [
        "Carpentry",
        "Painting",
    ],
    "Electrical & Plumbing": [
        "AC Repair",
        "Electrical Wiring",
        "Plumbing",
    ],
    "Construction": [
        "Masonry",
        "Tiles Fitting",
        "Iron Works"
    ],
    "Security": [
        "CCTV Repair",
        "Fire Alarm",
        "Video Surveillance",
    ],
    "cleaning": [
        "Sofa cleaning",
        "Carpet cleaning",
    ],
};



function ViewServices() {

    return (
        <section id="service" className="block service" style={{ backgroundImage: `url(${BgImage})` }}>

            <Row className="cardflex">
                {servicesData.map((service) => (
                    <Col key={service.id} xs={5} sm={3} md={3} lg={3}>
                        <Card className="card d-flex flex-column justify-content-center">
                            <Card.Img src={service.image} variant="top" alt="home" />
                            <Card.Body>
                                <Card.Text>{service.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </section>
    );
}

export default ViewServices;
