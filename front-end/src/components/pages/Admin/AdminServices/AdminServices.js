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

const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-start;
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
        selectedNewCategory: 'default',
        selectedEditCategory: 'default',
        currentPage: 1,
        showModal: false,
        serviceCategoryErrorMessage: '',
        serviceErrorMessage: '',
        imageErrorMessage: '',
        editserviceCategoryErrorMessage: '',
        editserviceErrorMessage: '',
        editimageErrorMessage: '',
        filteredServices: [],
        totalPages: 1,
        searchTerm: '',
        selectedService: null,
        showServiceModal: false,
        enable: true,
    });

    const cardsPerPage = 9;
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

        if (value === "new") {
            setData((prevState) => ({
                ...prevState,
                selectedNewCategory: 'new',
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleEditServiceChange = (e, selectedService, previousCategory) => {
        const { name, value } = e.target;

        console.log('Selected service:', selectedService);
        console.log('Previous category:', previousCategory);

        if (name === 'selectedEditCategory') {
            const updatedService = { ...selectedService, category: null };

            setData((prevState) => ({
                ...prevState,
                selectedService: updatedService,
                selectedEditCategory: value,
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
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

        if (data.selectedNewCategory === 'default') {
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

    const handleServiceFormSubmit = (e) => {
        e.preventDefault();

        let isError = false;
        let editserviceCategoryErrorMessage = '';
        let editserviceErrorMessage = '';
        let editimageErrorMessage = '';

        if (data.selectedNewCategory === 'default') {
            isError = true;
            editserviceCategoryErrorMessage = 'Please select a service category';
        }

        if (data.service.trim() === '') {
            isError = true;
            editserviceErrorMessage = 'Please enter a service name';
        }

        if (data.image === null) {
            isError = true;
            editimageErrorMessage = 'Please select an image';
        }

        setData({
            ...data,
            editserviceCategoryErrorMessage,
            editserviceErrorMessage,
            editimageErrorMessage,
        });

        if (!isError) {

            if (data.selectedService) {
                const updatedService = {
                    ...data.selectedService,
                    category: data.selectedNewCategory,
                    text: data.service,
                    image: data.image ? URL.createObjectURL(data.image) : data.selectedService.image,
                };


                const updatedServicesData = servicesData.map((service) => (
                    service.id === data.selectedService.id ? updatedService : service
                ));

                setData({
                    ...data,
                    showModal: false,
                    showServiceModal: false,
                    selectedService: null,
                    data: updatedServicesData,
                });
            } else {

                const newService = {
                    id: servicesData.length + 1,
                    category: data.selectedNewCategory,
                    text: data.service,
                    image: data.image ? URL.createObjectURL(data.image) : null,
                };

                setData({
                    ...data,
                    showModal: false,
                    showServiceModal: false,
                    selectedService: null,
                    data: [...servicesData, newService],
                });
            }
        }
    };

    return (
        <section id="service" className="block service-block p-5" style={{ backgroundImage: `url(${BgImage})` }}>
            <h2 className='ms-5 fw-bold align-self-start'>Services</h2>
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
                    <Col key={service.id} xs={8} sm={6} md={4} lg={3} xl={3}>
                        <Card className="card d-flex flex-column align-items-center justify-content-center h-100" onClick={() => (
                            setData({ ...data, selectedService: service, showServiceModal: true })
                        )}>
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

            <Modal show={data.showServiceModal} onHide={() => setData({ ...data, showServiceModal: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>{data.selectedService ? 'Edit Service' : 'Add New Service'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundImage: `url(${BgImage})` }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Current Image</Form.Label>
                            {data.selectedService ? (
                                <img
                                    src={data.selectedService.image}
                                    alt="Current Service"
                                    style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }}
                                    className='rounded'
                                />
                            ) : (
                                <p>No image selected.</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose a New Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleImageChange} required />
                            {data.editimageErrorMessage && <p className="text-danger p-0 m-0">{data.editimageErrorMessage}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Change the Service Category</Form.Label>
                            <select
                                className='form-select'
                                name="selectedEditCategory"
                                value={data.selectedService ? data.selectedService.category : data.category}
                                onChange={(e) => handleEditServiceChange(e, data.selectedService, data.selectedService ? data.selectedService.category : data.category)}
                                required
                            >
                                <option value="default">Select a Service Category</option>
                                {Object.keys(serviceCategories).map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            {data.editserviceCategoryErrorMessage && <p className="text-danger p-0 m-0">{data.editserviceCategoryErrorMessage}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Change Service Name</Form.Label>
                            <input
                                type="text"
                                className="form-control"
                                name="service"
                                value={data.selectedService ? data.selectedService.text : data.service}
                                onChange={handleEditServiceChange}
                                required
                            />
                            {data.editserviceErrorMessage && <p className="text-danger p-0 m-0">{data.editserviceErrorMessage}</p>}
                        </Form.Group>

                        <StyledModalFooter>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 d-flex justify-content-start align-items-center">
                                        <Form.Check
                                            type="radio"
                                            name="enableDisableRadio"
                                            id="enableRadio"
                                            label="Enable"
                                            checked={data.enable}
                                            onChange={() => setData({ ...data, enable: true })}
                                            className='ms-0 me-1 custom-radio'
                                        />
                                        <Form.Check
                                            type="radio"
                                            name="enableDisableRadio"
                                            id="disableRadio"
                                            label="Disable"
                                            checked={!data.enable}
                                            onChange={() => setData({ ...data, enable: false })}
                                            className='ms-0 me-1 custom-radio'
                                        />
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-center align-items-center m-0">
                                        <Button className="btn-effect3 me-2" onClick={() => setData({ ...data, showServiceModal: false })}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="btn-effect" onClick={handleServiceFormSubmit}>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </StyledModalFooter>

                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={data.showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Add New Service</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundImage: `url(${BgImage})` }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Select the Service Category<span style={{color: 'red' }}>*</span></Form.Label>
                            <select
                                className="form-select"
                                name="selectedNewCategory"
                                value={data.selectedNewCategory}
                                onChange={handleNewServiceChange}
                                required
                            >
                                <option value="default">Select a Service Category</option>
                                {Object.keys(serviceCategories).map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                                <option value="new">Add New Category</option>
                            </select>
                            {data.serviceCategoryErrorMessage && <p className="text-danger p-0 m-0">{data.serviceCategoryErrorMessage}</p>}
                        </Form.Group>
                        {data.selectedNewCategory === "new" && (
                            <div className="mb-3">
                                <label htmlFor="newCategory">New Category Name<span style={{color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="newCategory"
                                    name="selectedNewCategory"
                                    value={data.category}
                                    onChange={handleNewServiceChange}
                                    required
                                />
                            </div>
                        )}
                        <Form.Group className="mb-3">
                            <Form.Label>Service Name<span style={{ color: 'red' }}>*</span></Form.Label>
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
                            <Form.Label>Choose an Image<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="file" name="image" onChange={handleImageChange} required />
                            {data.imageErrorMessage && <p className="text-danger p-0 m-0">{data.imageErrorMessage}</p>}
                        </Form.Group>
                        <Modal.Footer >
                            <StyledButton2 variant="secondary" onClick={handleModalClose}>
                                Cancel
                            </StyledButton2>
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