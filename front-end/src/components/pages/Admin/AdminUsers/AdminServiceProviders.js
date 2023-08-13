import React, { useState, useEffect } from 'react';
import { Card, Tab, Tabs, Modal, Button, Form } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import person1 from '../../../../assets/images/home/Customer_1.png';
import person2 from '../../../../assets/images/home/Customer_2.png';
import person3 from '../../../../assets/images/home/Customer_3.png';
import person4 from '../../../../assets/images/home/Customer_4.jpg';
import person5 from '../../../../assets/images/home/Customer_5.jpg';
import person6 from '../../../../assets/images/home/Customer_6.jpg';
import person7 from '../../../../assets/images/home/Customer_7.jpg';
import person8 from '../../../../assets/images/home/Customer_8.jpg';
import person9 from '../../../../assets/images/home/Customer_9.jpg';
import { set } from 'lodash';

const searchInputStyle = {
    height: '38px',
};

const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-end;
    `;

function AdminServiceProvider() {

    const serviceProvidersData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '123 Main Street, City',
            registeredDate: '2023-08-01',
            service: 'Carpentry',
            category: 'Interior Works',
            image: person1,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '456 Oak Avenue, Town',
            registeredDate: '2023-08-02',
            service: 'AC Repair',
            category: 'Electrical & Plumbing',
            image: person2,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 3,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '789 Maple Lane, Village',
            registeredDate: '2023-08-03',
            service: 'Masonry',
            category: 'Construction',
            image: person3,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 4,
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '101 Pine Street, City',
            registeredDate: '2023-08-04',
            service: 'CCTV Repair',
            category: 'Security',
            image: person2,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 5,
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '222 Oak Road, Town',
            registeredDate: '2023-08-05',
            service: 'Sofa cleaning',
            category: 'cleaning',
            image: person3,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 6,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '333 Maple Street, Village',
            registeredDate: '2023-08-06',
            service: 'Painting',
            category: 'Interior Works',
            image: person1,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 7,
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '444 Pine Avenue, City',
            registeredDate: '2023-08-07',
            service: 'Electrical Wiring',
            category: 'Electrical & Plumbing',
            image: person4,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 8,
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '555 Oak Lane, Town',
            registeredDate: '2023-08-08',
            service: 'Tiles Fitting',
            category: 'Construction',
            image: person5,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 9,
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '666 Maple Road, Village',
            registeredDate: '2023-08-09',
            service: 'Fire Alarm',
            category: 'Security',
            image: person6,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 10,
            firstName: 'Johnes',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '777 Main Street, City',
            registeredDate: '2023-08-10',
            service: 'Carpentry',
            category: 'Interior Works',
            image: person1,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 11,
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '888 Oak Avenue, Town',
            registeredDate: '2023-08-11',
            service: 'AC Repair',
            category: 'Electrical & Plumbing',
            image: person2,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 12,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '999 Maple Lane, Village',
            registeredDate: '2023-08-12',
            service: 'Masonry',
            category: 'Construction',
            image: person3,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 13,
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '1010 Pine Street, City',
            registeredDate: '2023-08-13',
            service: 'CCTV Repair',
            category: 'Security',
            image: person7,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 14,
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '111 Oak Road, Town',
            registeredDate: '2023-08-14',
            service: 'Sofa cleaning',
            category: 'cleaning',
            image: person8,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 15,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '1212 Maple Street, Village',
            registeredDate: '2023-08-15',
            service: 'Painting',
            category: 'Interior Works',
            image: person9,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 16,
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '1313 Pine Avenue, City',
            registeredDate: '2023-08-16',
            service: 'Electrical Wiring',
            category: 'Electrical & Plumbing',
            image: person3,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 17,
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '1414 Oak Lane, Town',
            registeredDate: '2023-08-17',
            service: 'Tiles Fitting',
            category: 'Construction',
            image: person1,
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 18,
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '1515 Maple Road, Village',
            registeredDate: '2023-08-18',
            service: 'Fire Alarm',
            category: 'Security',
            image: person2,
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
    ];

    const serviceCategories = {
        "Interior Works": ["Carpentry", "Painting"],
        "Electrical & Plumbing": ["AC Repair", "Electrical Wiring", "Plumbing"],
        "Construction": ["Masonry", "Tiles Fitting", "Iron Works", "Glass & Aluminum"],
        "Security": ["CCTV Repair", "Fire Alarm", "Video Surveillance"],
        "cleaning": ["Sofa cleaning", "Carpet cleaning"],
    };

    const [data, setData] = useState({
        category: 'default',
        service: '',
        selectedCategory: 'default',
        currentPage: 1,
        showModal: false,
        filteredServices: [],
        totalPages: 1,
        searchTerm: '',
        activeTab: 'Pending',
        filteredServiceProviders: [],
        displayedServices: [],
        showDetailsModal: false,
        selectedProvider: null,
        cardsPerPage: 3,
        showAcceptConfirmation: false,
        showRejectConfirmation: false,
        enable: true,
        rejectReason: '',
        rejectReasonErrorMessage: '',
    });

    // const cardsPerPage = data.windowWidth <= 768 ? 3 : 6;
    const totalPages = Math.ceil(serviceProvidersData.length / data.cardsPerPage);
    const startIndex = (data.currentPage - 1) * data.cardsPerPage;
    const endIndex = startIndex + data.cardsPerPage;
    const displayedServices = serviceProvidersData.slice(startIndex, endIndex);

    const filterServiceProvidersByCategory = (category) => {
        if (category === 'default') {
            return serviceProvidersData;
        } else {
            return serviceProvidersData.filter((provider) => provider.category === category);
        }
    };


    const handlePageChange = (page) => {
        const startIndex = (page - 1) * data.cardsPerPage;
        const endIndex = startIndex + data.cardsPerPage;
        const filteredData = data.filteredServiceProviders[data.activeTab];
        const displayedServices = filteredData.slice(startIndex, endIndex);

        setData({
            ...data,
            currentPage: page,
            displayedServices,
        });

    };


    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    const filterServiceProviders = (status) => {
        const filteredServices = data.selectedCategory !== 'default'
            ? serviceProvidersData.filter((service) => service.category === data.selectedCategory)
            : serviceProvidersData;

        const filteredProviders = filteredServices.filter((service) =>
            service.status === status && (
                service.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                service.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                service.service.toLowerCase().includes(data.searchTerm.toLowerCase())
            )
        );

        return filteredProviders;
    };


    const calculateTotalPages = (filteredServices) => Math.ceil(filteredServices.length / data.cardsPerPage);

    const handleServiceCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const filteredServiceProvidersByCategory = filterServiceProvidersByCategory(selectedCategory);

        const displayedServices = filteredServiceProvidersByCategory.filter((service) => {
            return service.status === data.activeTab;
        });

        setData((prevState) => ({
            ...prevState,
            selectedCategory,
            displayedServices,
            currentPage: 1,
            totalPages: calculateTotalPages(displayedServices),
        }));
    };

    const handleTabChange = (tab) => {

        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
        }));
    };


    useEffect(() => {
        const filteredServicesByStatus = {
            Pending: filterServiceProviders('Pending'),
            Accepted: filterServiceProviders('Accepted'),
            Rejected: filterServiceProviders('Rejected'),
        };

        const filteredProviders = filteredServicesByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredProviders.length / data.cardsPerPage);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredServiceProviders: filteredServicesByStatus,
            displayedServices: filteredProviders.slice(0, data.cardsPerPage),
            currentPage: 1,
        }));
    }, [data.selectedCategory, data.searchTerm, data.activeTab]);

    const handleConfirmAccept = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleConfirmReject = () => {
        setData({ ...data, showRejectConfirmation: false });
    };

    const handleAcceptProvider = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleRejectProvider = (rejectReason) => {
        let isError = false;
        let rejectReasonErrorMessage = '';

        if (rejectReason === '') {
            isError = true;
            rejectReasonErrorMessage = 'Please enter a reason for rejection.';
        }

        setData({ ...data, rejectReasonErrorMessage });

        if(!isError){
            setData({ ...data, showRejectConfirmation: false, rejectReason });
        }
    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedProvider: provider });
    };


    return (

        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="Pending" title="Pending" />
                <Tab eventKey="Accepted" title="Accepted" />
                <Tab eventKey="Rejected" title="Rejected" />
            </Tabs>

            <section id="service-page" className="block serviceProvider m-5 p-5" style={{ backgroundImage: `url(${BgImage})` }} >

                <h2 className="ms-5 fw-bold align-self-start">Service Providers</h2>

                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 m-3'>
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

                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 col-xxl-3 m-3'>
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

                </div>

                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {data.displayedServices && data.displayedServices.map((provider) => (
                        <Card className="m-3" key={provider.id}>
                            <Card.Img src={provider.image} alt="Service Provider" className="rounded-circle" width="50" height="50" />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <p className="card-text fw-bold d-none d-md-block">{provider.firstName}{' '}{provider.lastName}</p>
                                <p className="card-text d-none d-md-block align-self-start">Service: {provider.service}</p>
                                <p className="card-text d-none d-md-block align-self-start">Category: {provider.category}</p>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <button onClick={() => handleShowDetails(provider)} className="btn" style={{ backgroundColor: '#0B85A0' }} > More Details </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#0D6445" }}
                                        onClick={() => {
                                            setData({ ...data, showAcceptConfirmation: true, selectedProvider: provider });
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#B60E0E" }}
                                        onClick={() => {
                                            setData({ ...data, showRejectConfirmation: true, selectedProvider: provider });
                                        }}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="pagination justify-content-center">
                    {Array.from({ length: data.totalPages }, (_, index) => (
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

            </section>

            <Modal show={data.showAcceptConfirmation} onHide={() => setData({ ...data, showAcceptConfirmation: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Confirm Acceptance</Modal.Title>
                </Modal.Header>
                {data.selectedProvider && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedProvider.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to accept this service provider?</p>
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect2' onClick={() => setData({ ...data, showAcceptConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={handleAcceptProvider}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showRejectConfirmation} onHide={() => setData({ ...data, showRejectConfirmation: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Confirm Rejection</Modal.Title>
                </Modal.Header>
                {data.selectedProvider && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedProvider.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to Reject this service provider?</p>
                        <p>If you select "Yes," please enter the reason for rejection.<span style={{color: 'red' }}>*</span></p>
                        <input type="text" value={data.rejectReason} onChange={(e) => setData({ ...data, rejectReason: e.target.value })} placeholder="Enter Reject Reason" />
                        {data.rejectReasonErrorMessage && <p className="text-danger p-0 m-0">{data.rejectReasonErrorMessage}</p>}
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect3' onClick={() => setData({ ...data, showRejectConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={() => handleRejectProvider(data.rejectReason)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showDetailsModal} onHide={() => setData({ ...data, showDetailsModal: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Service Provider Details</Modal.Title>
                </Modal.Header>
                {data.selectedProvider && (
                    <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-start">
                                    <img src={data.selectedProvider.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>First Name: </span> {data.selectedProvider.firstName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Last Name: </span> {data.selectedProvider.lastName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>NIC: </span> {data.selectedProvider.nic}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Email: </span> {data.selectedProvider.email}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Address: </span> {data.selectedProvider.address}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Registered Date: </span> {data.selectedProvider.registeredDate}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Service: </span> {data.selectedProvider.service}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Category:</span> {data.selectedProvider.category}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 " style={{ marginTop: '100px' }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <h6 className="text-center">Certificates And Documents</h6>
                                    </div>
                                    <ul className="list-unstyled">
                                        {data.selectedProvider.uploadedFiles.map((file, index) => (
                                            <li key={index}>
                                                <div className="d-flex align-items-center mb-2 p-2 rounded hover-effect" style={{ backgroundColor: "#ccc" }}>
                                                    <i className="bi bi-file-earmark-arrow-down-fill me-2 fs-4"></i>
                                                    <a href={file.url} download className="text-decoration-none text-dark fw-bold">
                                                        {file.fileName}
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                )}
                <StyledModalFooter>
                    {data.activeTab === 'Accepted' && (
                        <>

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
                                className='ms-0 me-5 custom-radio'
                            />

                        </>
                    )}
                    <div className="col-sm-6 d-flex justify-content-end align-items-end m-0">
                        <Button className="btn-effect3 me-2" onClick={() => setData({ ...data, showDetailsModal: false })}>
                            Cancel
                        </Button>
                        <Button type="submit" className="btn-effect">
                            More Info
                        </Button>
                    </div>
                </StyledModalFooter>

            </Modal>
        </div>
    );
}

export default AdminServiceProvider;
