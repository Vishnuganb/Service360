import React, { useState } from 'react';
import { Row, Card, Col} from 'react-bootstrap';
import image1 from '../../../assets/images/home/AC-Repair.jpeg'
import image2 from '../../../assets/images/home/ElectricalWiring.jpeg';
import image3 from '../../../assets/images/home/plumbing.jpeg';
import image4 from '../../../assets/images/home/Tiles_Fitting.jpeg';
import image5 from '../../../assets/images/home/carpentry.jpeg';
import image6 from '../../../assets/images/home/painting.jpeg';
import image7 from '../../../assets/images/home/masonry.jpeg';
import image8 from '../../../assets/images/home/Glass-Aluminum.jpeg';
import image9 from '../../../assets/images/home/Iron-Work.jpeg';
import image10 from '../../../assets/images/home/Cctv.jpeg';
import image11 from '../../../assets/images/home/Fire-Alarm.jpeg';
import image12 from '../../../assets/images/home/video-Sur.jpeg';

import BgImage from '../../../assets/images/header/Background.png';
import '../../../style/User/ViewServices.css';


const servicesData = [
    { id: 1, image: image1, text: 'AC Repair', category: 'Electrical & Plumbing' },
    { id: 2, image: image2, text: 'Electrical Wiring', category: 'Electrical & Plumbing' },
    { id: 3, image: image3, text: 'Plumbing', category: 'Electrical & Plumbing' },
    { id: 4, image: image4, text: 'Tiles Fitting', category: 'Construction' },
    { id: 5, image: image5, text: 'Carpentry', category: 'Interior Works' },
    { id: 6, image: image6, text: 'Painting', category: 'Interior Works' },
    { id: 7, image: image7, text: 'Masonry', category: 'Construction' },
    { id: 8, image: image8, text: 'Glass&Aluminum', category: 'Construction' },
    { id: 9, image: image9, text: 'Iron Works', category: 'Construction' },
    { id: 10, image: image10, text: 'CCTV Repair', category: 'Security' },
    { id: 11, image: image11, text: 'Fire Alarm', category: 'Security' },
    { id: 12, image: image12, text: 'VideoSurveillance', category: 'Security' },
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

    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 8;
    const startIndex = (currentPage - 1) * cardsPerPage; // 
    const endIndex = startIndex + cardsPerPage;
    const displayedServices = servicesData.slice(startIndex, endIndex);


    return (
        <section id="service" className="block service-block" style={{ backgroundImage: `url(${BgImage})` }}>

            <Row className="cardflex">
                {displayedServices.slice(0, 4).map((service) => (
                    <Col key={service.id} xs={12} sm={6} md={3} lg={2}>
                        <Card className="card">
                            <Card.Img src={service.image} variant="top" alt="home" />
                            <Card.Body>
                                <Card.Text>{service.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="cardflex">
                {displayedServices.slice(4, 8).map((service) => (
                    <Col key={service.id} xs={12} sm={6} md={3} lg={2}>
                        <Card className="card">
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
