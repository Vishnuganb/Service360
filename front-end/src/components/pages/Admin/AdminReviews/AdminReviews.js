import React,{ useState, useEffect } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import BgImage from '../../../../assets/images/header/Background.png';
import '../../../../style/Admin/AdminReviews.css';

const reviewData = [
    {
        id: 1,
        image: require('../../../../assets/images/home/Customer_1.png'),
        name: 'Jolie',
        city: 'Jaffna',
        review: `I've been using this platform for a few months now, and it has made my life so much easier. 
        I can easily find service providers based on my requirements and hire them within minutes.
        The variety of services available is impressive, and the platform is user-friendly. Highly recommended!`,
    },
    {
        id: 2,
        image: require('../../../../assets/images/home/Customer_2.png'),
        name: 'Virat Sanjana',
        city: 'Colombo',
        review: `As a busy professional, I don't have the time to search for service providers individually. 
        This platform has simplified the process for me. I can compare prices, read reviews,
        and make an informed decision about hiring service providers.
        It has saved me time and provided me with reliable professionals. Thank you!`,
    },
    {
        id: 3,
        image: require('../../../../assets/images/home/Customer_3.png'),
        name: 'John Smith',
        city: 'Batticalo',
        review: `I recently used this platform to find a service provider, and I must say,
        I'm impressed.The website is intuitive, and the booking process was seamless.
        I found a skilled professional who delivered excellent service.
        It's great to have a platform that connects customers with trusted service providers.
        I will definitely be using it again.`,
    },
]

export default function AppReviews() {
    const [data, setData] = useState({
        category: 'default',
        service: '',
        selectedCategory: 'default',
        currentPage: 1,
        showModal: false,
        filteredServices: [],
        totalPages: 1,
        searchTerm: '',
        activeTab: 'All',
        filteredServiceProviders: [],
        displayedServices: [],
        showDetailsModal: false,
        selectedProvider: null,
        cardsPerPage: 3,
        showAcceptConfirmation: false,
        showRejectConfirmation: false,
    });

    const handleTabChange = (tab) => {

        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
        }));
    };

    return (
        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="All" title="All" />
                <Tab eventKey="Accepted" title="Accepted" />
            </Tabs>
            <section className="block review-block" style={{ backgroundImage: `url(${BgImage})` }}>
                <h2 className='ms-5 fw-bold align-self-start'>System Reviews</h2>
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {reviewData.map((item) => (
                        <Card key={item.id}>
                            <Card.Body className="py-3">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            className="rounded-circle mb-4 mb-lg-0 shadow-2 d-none d-lg-block"
                                            alt="Customers"
                                            width="100"
                                            height="100"
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
                                            <footer className="blockquote-footer mb-3">
                                                {item.name} {" "}
                                                <cite title="Source Title">{item.city}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}