import React, { useState, useEffect } from 'react';
import { Row, Card, Col, Button, Modal, Form } from 'react-bootstrap';
import image1 from '../../../../assets/images/home/AC-Repair.jpeg'
import image2 from '../../../../assets/images/home/ElectricalWiring.jpeg';
import image3 from '../../../../assets/images/home/plumbing.jpeg';
import image4 from '../../../../assets/images/home/Tiles_Fitting.jpeg';
import image5 from '../../../../assets/images/home/carpentry.jpeg';
import image6 from '../../../../assets/images/home/painting.jpeg';
import image7 from '../../../../assets/images/home/masonry.jpeg';
import image8 from '../../../../assets/images/home/Glass-Aluminum.jpeg';
import image9 from '../../../../assets/images/home/Iron-Work.jpeg';
import image10 from '../../../../assets/images/home/Cctv.jpeg';
import image11 from '../../../../assets/images/home/Fire-Alarm.jpeg';
import image12 from '../../../../assets/images/home/video-Sur.jpeg';

import BgImage from '../../../../assets/images/header/Background.png';
import '../../../../style/Admin/AdminServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { set } from 'lodash';



const servicesData = [
    { id: 1, image: image1, text: 'AC Repair', category: 'Electrical & Plumbing' },
    { id: 2, image: image2, text: 'Electrical Wiring', category: 'Electrical & Plumbing' },
    { id: 3, image: image3, text: 'Plumbing', category: 'Electrical & Plumbing' },
    { id: 4, image: image4, text: 'Tiles Fitting', category: 'Construction' },
    { id: 5, image: image5, text: 'Carpentry', category: 'Interior Works' },
    { id: 6, image: image6, text: 'Painting', category: 'Interior Works' },
    { id: 7, image: image7, text: 'Masonry', category: 'Construction' },
    { id: 8, image: image8, text: 'Glass & Aluminum', category: 'Construction' },
    { id: 9, image: image9, text: 'Iron Works', category: 'Construction' },
    { id: 10, image: image10, text: 'CCTV Repair', category: 'Security' },
    { id: 11, image: image11, text: 'Fire Alarm', category: 'Security' },
    { id: 12, image: image12, text: 'Video Surveillance', category: 'Security' },
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
        "Iron Works",
        "Glass & Aluminum",
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

const StyledButton2 = styled(Button)`
        background-color: #282b3d;
        width: 30%;
        @media (max-width: 768px) {
            width: 100%; 
            margin-top: 1rem; 
        }
        &:hover {
            background: #fff;
            border-color: #292D32;
            color: #9f390d;
        }
    `;

const searchInputStyle = {
    height: '38px',
};


function AdminServices() {

    const [data, setData] = useState({
        category: 'default',
        service: '',
        image: null,
        selectedCategory: 'default',
        currentPage: 1,
        showModal: false,
        serviceCategoryErrorMessage: '',
        serviceErrorMessage: '',
        imageErrorMessage: '',
        filteredServices: [],
        totalPages: 1,
        searchTerm: '',
    });

    const cardsPerPage = 8;
    const totalPages = Math.ceil(servicesData.length / cardsPerPage);
    const startIndex = (data.currentPage - 1) * cardsPerPage; // 
    const endIndex = startIndex + cardsPerPage;
    const displayedServices = servicesData.slice(startIndex, endIndex);

    const handleServiceCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setData({
            ...data,
            selectedCategory: selectedCategory,
        });
    };

    const handlePageChange = (page) => {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const displayedServices = data.filteredServices.slice(startIndex, endIndex);
        setData({ ...data, currentPage: page, displayedServices });
    };

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    // Function to handle opening and closing the modal
    const handleModalOpen = () => {
        setData({ ...data, showModal: true });
    };

    const handleModalClose = () => {
        setData({ ...data, showModal: false });
    };

    // Function to handle input field changes in the modal
    const handleNewServiceChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(data.selectedCategory);
    };

    // Function to handle image file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData((prevState) => ({
            ...prevState,
            image: file,
        }));
    };

    useEffect(() => {
        // Calculate the total pages based on whether a category is selected or not
        const filteredServices = data.selectedCategory !== 'default'
            ? servicesData.filter((service) => service.category === data.selectedCategory)
            : servicesData;

        // Filter based on the search term if it's not empty
        const searchedServices = data.searchTerm.trim() === ''
            ? filteredServices
            : filteredServices.filter((service) =>
                service.text.toLowerCase().includes(data.searchTerm.toLowerCase())
            );

        const totalPages = Math.ceil(searchedServices.length / cardsPerPage);

        // When the selected category or search term changes, update the displayed services based on the filter
        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredServices: searchedServices,
            displayedServices: searchedServices.slice(0, cardsPerPage),
        }));
    }, [data.selectedCategory, data.searchTerm]);


    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let isError = false;
        let serviceCategoryErrorMessage = '';
        let serviceErrorMessage = '';
        let imageErrorMessage = '';

        if (data.category === 'default') {
            isError = true;
            serviceCategoryErrorMessage = 'Please select a service category';
        }

        if (data.service.trim() === '') {
            isError = true;
            serviceErrorMessage = 'Please enter a service name';
        }

        if (data.image === null) {
            isError = true;
            imageErrorMessage = 'Please select an image';
        }

        setData({
            ...data,
            serviceCategoryErrorMessage,
            serviceErrorMessage,
            imageErrorMessage,
        });

        if (!isError) {
            setData({ ...data, showModal: false });
        }
    };


    return (
        <section id="service" className="block service-block" style={{ backgroundImage: `url(${BgImage})` }}>
            <h2 className='ms-5 fw-bold align-self-start '>Services</h2>
            <div className="d-flex align-items-center  w-100">
                <div className='me-xs-2 col-xs-2 col-md-3 m-3'>
                    <div className="input-group">
                        <select
                            className="form-select"
                            value={data.selectedCategory}
                            onChange={handleServiceCategoryChange}
                            required
                        >
                            <option value="default">Select a Service Category</option>
                            {Object.keys(serviceCategories).map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='me-xs-2 col-xs-2 col-md-3 m-3'>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Services"
                            value={data.searchTerm}
                            onChange={handleSearchChange}
                            style={searchInputStyle}
                        />
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>

                <button
                    className="btn btn-primary me-2 d-block d-md-none"
                    onClick={handleModalOpen}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <Button
                    variant="primary"
                    onClick={handleModalOpen}
                    className="ms-auto me-xs-1 me-md-5 d-none d-md-block"
                    style={searchInputStyle}
                >
                    Add New Service
                </Button>

            </div>

            <Row className="cardflex">
                {data.displayedServices && data.displayedServices.map((service) => (
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

            <div className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-link ${data.currentPage === index + 1 ? 'active' : ''}`}
                        style={{ backgroundColor: '#292D32', color: '#fff' }}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <Modal show={data.showModal} onHide={handleModalClose}>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Add New Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Select the Service</Form.Label>
                            <select
                                className='form-select'
                                name="category"
                                value={data.category}
                                onChange={handleNewServiceChange}
                                required
                            >
                                <option value="default">Select a Service Category</option>
                                {Object.keys(serviceCategories).map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            {data.serviceCategoryErrorMessage && <p className="text-danger p-0 m-0">{data.serviceCategoryErrorMessage}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Service Name</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                name="service"
                                value={data.service}
                                onChange={handleNewServiceChange}
                                required
                            />
                            {data.serviceErrorMessage && <p className="text-danger p-0 m-0">{data.serviceErrorMessage}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose an Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleImageChange} required />
                            {data.imageErrorMessage && <p className="text-danger p-0 m-0">{data.imageErrorMessage}</p>}
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Cancel
                            </Button>
                            <StyledButton2 variant="primary" type="submit" className="btn btn-dark btn-block" onClick={handleFormSubmit}>
                                Submit
                            </StyledButton2>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

        </section>
    );
}

export default AdminServices;