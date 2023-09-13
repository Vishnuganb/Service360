import React, { useState, useEffect } from 'react';
import { Card, Tab, Tabs, Modal, Button, Form, Carousel } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Ad1_1 from '../../../../assets/images/admin/ads/Driller_1.jpg';
import Ad1_2 from '../../../../assets/images/admin/ads/Driller_2.jpg';
import Ad1_3 from '../../../../assets/images/admin/ads/Driller_3.jpg';
import Ad2_1 from '../../../../assets/images/admin/ads/Screw_1.jpeg';
import Ad2_2 from '../../../../assets/images/admin/ads/Screw_2.jpeg';
import Ad2_3 from '../../../../assets/images/admin/ads/Screw_3.jpeg';
import Ad3_1 from '../../../../assets/images/admin/ads/Grinder_1.jpeg';
import Ad3_2 from '../../../../assets/images/admin/ads/Grinder_2.jpeg';
import Ad3_3 from '../../../../assets/images/admin/ads/Grinder_3.jpeg';
import Ad4_1 from '../../../../assets/images/admin/ads/drills_2.jpeg';
import Ad4_2 from '../../../../assets/images/admin/ads/drills_1.jpeg';
import Ad4_3 from '../../../../assets/images/admin/ads/drills_3.jpeg';
import Ad5_1 from '../../../../assets/images/admin/ads/handsaw_1.jpeg';
import Ad5_2 from '../../../../assets/images/admin/ads/handsaw_2.jpeg';
import Ad5_3 from '../../../../assets/images/admin/ads/handsaw_3.jpeg';
import Ad6_1 from '../../../../assets/images/admin/ads/hammer_1.jpeg';
import Ad6_2 from '../../../../assets/images/admin/ads/hammer_2.jpeg';
import Ad6_3 from '../../../../assets/images/admin/ads/hammer_3.jpeg';
import Ad7_1 from '../../../../assets/images/admin/ads/disk_2.jpeg';
import Ad7_2 from '../../../../assets/images/admin/ads/disk_1.jpeg';
import Ad7_3 from '../../../../assets/images/admin/ads/disk_3.jpeg';
import Ad8_1 from '../../../../assets/images/admin/ads/plier_1.jpeg';
import Ad8_2 from '../../../../assets/images/admin/ads/plier_2.jpeg';
import Ad8_3 from '../../../../assets/images/admin/ads/plier_3.jpeg';
import Ad9_1 from '../../../../assets/images/admin/ads/wrench_1.jpeg';
import Ad9_2 from '../../../../assets/images/admin/ads/wrench_2.jpeg';
import Ad9_3 from '../../../../assets/images/admin/ads/wrench_3.jpeg';
import { set } from 'lodash';

const searchInputStyle = {
    height: '38px',
};

const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-end;
    `;

function AdminAdvertisements() {

    const advertisementsData = [
        {
            id: 1,
            adName: 'Driller',
            firstName: 'John',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '123 Main Street, City',
            registeredDate: '2023-08-01',
            service: 'Carpentry',
            category: 'Tools',
            shopName: 'The Handyman Hub',
            shopAddress: '123 Main Street, City',
            images: [Ad1_1, Ad1_2, Ad1_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 2,
            adName: 'ScrewDriver',
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '456 Oak Avenue, Town',
            registeredDate: '2023-08-02',
            service: 'AC Repair',
            category: 'Tools',
            shopName: 'Electric Fixers',
            shopAddress: '456 Oak Avenue, Town',
            images: [Ad2_1, Ad2_2, Ad2_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 3,
            adName: 'Grinder',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '789 Maple Lane, Village',
            registeredDate: '2023-08-03',
            service: 'Masonry',
            category: 'Tools',
            shopName: 'Creative Carpentry',
            shopAddress: '789 Maple Lane, Village',
            images: [Ad3_1, Ad3_2, Ad3_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 4,
            adName: 'ScrewDriver',
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '101 Pine Street, City',
            registeredDate: '2023-08-04',
            service: 'CCTV Repair',
            category: 'Tools',
            shopName: 'Master Plumbers',
            shopAddress: '101 Pine Street, City',
            images: [Ad2_1, Ad2_2, Ad2_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 5,
            adName: 'Grinder',
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '222 Oak Road, Town',
            registeredDate: '2023-08-05',
            service: 'Sofa cleaning',
            category: 'Tools',
            shopName: 'All Seasons Cleaners',
            shopAddress: '222 Oak Road, Town',
            images: [Ad3_1, Ad3_2, Ad3_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 6,
            adName: 'Driller',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '333 Maple Street, Village',
            registeredDate: '2023-08-06',
            service: 'Painting',
            category: 'Tools',
            shopName: 'Artisan Masons',
            shopAddress: '333 Maple Street, Village',
            images: [Ad1_1, Ad1_2, Ad1_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 7,
            adName: 'Drills',
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '444 Pine Avenue, City',
            registeredDate: '2023-08-07',
            service: 'Electrical Wiring',
            category: 'Spare Parts',
            shopName: 'SecureTech Solutions',
            shopAddress: '444 Pine Avenue, City',
            images: [Ad4_1, Ad4_2, Ad4_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 8,
            adName: 'Handsaw',
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '555 Oak Lane, Town',
            registeredDate: '2023-08-08',
            service: 'Tools',
            category: 'Tools',
            shopName: 'Elite Interior Design',
            shopAddress: '555 Oak Lane, Town',
            images: [Ad5_1, Ad5_2, Ad5_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 9,
            adName: 'Hammer',
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '666 Maple Road, Village',
            registeredDate: '2023-08-09',
            service: 'Fire Alarm',
            category: 'Tools',
            shopName: 'GreenThumb Landscaping',
            shopAddress: '666 Maple Road, Village',
            images: [Ad6_1, Ad6_2, Ad6_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 10,
            adName: 'Driller',
            firstName: 'Johnes',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '777 Main Street, City',
            registeredDate: '2023-08-10',
            service: 'Carpentry',
            category: 'Tools',
            shopName: 'TopNotch Roofing',
            shopAddress: '777 Main Street, City',
            images: [Ad1_1, Ad1_2, Ad1_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 11,
            adName: 'ScrewDriver',
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '888 Oak Avenue, Town',
            registeredDate: '2023-08-11',
            service: 'AC Repair',
            category: 'Tools',
            shopName: 'TechZone Electronics',
            shopAddress: '888 Oak Avenue, Town',
            images: [Ad2_1, Ad2_2, Ad2_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 12,
            adName: 'Grinder',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '999 Maple Lane, Village',
            registeredDate: '2023-08-12',
            service: 'Masonry',
            category: 'Tools',
            shopName: 'AquaFlow Plumbing',
            shopAddress: '999 Maple Lane, Village',
            images: [Ad3_1, Ad3_2, Ad3_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 13,
            adName: 'Grinder Disks',
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '1010 Pine Street, City',
            registeredDate: '2023-08-13',
            service: 'CCTV Repair',
            category: 'Spare Parts',
            shopName: 'SparkleClean Services',
            shopAddress: '1010 Pine Street, City',
            images: [Ad7_1, Ad7_2, Ad7_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 14,
            adName: 'Pliers',
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '111 Oak Road, Town',
            registeredDate: '2023-08-14',
            service: 'Sofa cleaning',
            category: 'Tools',
            shopName: 'Precision Builders',
            shopAddress: '111 Oak Road, Town',
            images: [Ad8_1, Ad8_2, Ad8_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 15,
            adName: 'Wrench',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '1212 Maple Street, Village',
            registeredDate: '2023-08-15',
            service: 'Painting',
            category: 'Tools',
            shopName: 'SkyHigh Air Conditioning',
            shopAddress: '1212 Maple Street, Village',
            images: [Ad9_1, Ad9_2, Ad9_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 16,
            adName: 'Grinder',
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '1313 Pine Avenue, City',
            registeredDate: '2023-08-16',
            service: 'Electrical Wiring',
            category: 'Tools',
            shopName: 'Golden Hammer Construction',
            shopAddress: '1313 Pine Avenue, City',
            images: [Ad3_1, Ad3_2, Ad3_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 17,
            adName: 'Driller',
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '1414 Oak Lane, Town',
            registeredDate: '2023-08-17',
            service: 'Tiles Fitting',
            category: 'Tools',
            shopName: 'SilverLock Security',
            shopAddress: '1414 Oak Lane, Town',
            images: [Ad1_1, Ad1_2, Ad1_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 18,
            adName: 'ScrewDriver',
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '1515 Maple Road, Village',
            registeredDate: '2023-08-18',
            service: 'Fire Alarm',
            category: 'Tools',
            shopName: 'Elegant Designs',
            shopAddress: '1515 Maple Road, Village',
            images: [Ad2_1, Ad2_2, Ad2_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
    ];

    const advertisementsCategories = {
        "Tools": ["Carpentry", "Painting"],
        "Spare Parts": ["AC Repair", "Electrical Wiring", "Plumbing"],
        "Equipment": ["Masonry", "Tiles Fitting", "Iron Works", "Glass & Aluminum"],
        "others": ["CCTV Repair", "Fire Alarm", "Video Surveillance"],
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
        filteredAdvertisements: [],
        displayedServices: [],
        showDetailsModal: false,
        selectedAdvertisement: null,
        cardsPerPage: 3,
        showAcceptConfirmation: false,
        showRejectConfirmation: false,
        enable: true,
        rejectReason: '',
        rejectReasonErrorMessage: '',
    });

    // const cardsPerPage = data.windowWidth <= 768 ? 3 : 6;
    const totalPages = Math.ceil(advertisementsData.length / data.cardsPerPage);
    const startIndex = (data.currentPage - 1) * data.cardsPerPage;
    const endIndex = startIndex + data.cardsPerPage;
    const displayedServices = advertisementsData.slice(startIndex, endIndex);

    const filterServiceProvidersByCategory = (category) => {
        if (category === 'default') {
            return advertisementsData;
        } else {
            return advertisementsData.filter((provider) => provider.category === category);
        }
    };


    const handlePageChange = (page) => {
        const startIndex = (page - 1) * data.cardsPerPage;
        const endIndex = startIndex + data.cardsPerPage;
        const filteredData = data.filteredAdvertisements[data.activeTab];
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

    const filterAdvertisements = (status) => {
        const filteredServices = data.selectedCategory !== 'default'
            ? advertisementsData.filter((advertisement) => advertisement.category === data.selectedCategory)
            : advertisementsData;

        const filteredProviders = filteredServices.filter((advertisement) =>
            advertisement.status === status && (
                advertisement.adName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                advertisement.category.toLowerCase().includes(data.searchTerm.toLowerCase())
            )
        );

        return filteredProviders;
    };


    const calculateTotalPages = (filteredServices) => Math.ceil(filteredServices.length / data.cardsPerPage);

    const handleAdvertisementCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const filteredServiceProvidersByCategory = filterServiceProvidersByCategory(selectedCategory);

        const displayedServices = filteredServiceProvidersByCategory.filter((advertisement) => {
            return advertisement.status === data.activeTab;
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
            Pending: filterAdvertisements('Pending'),
            Accepted: filterAdvertisements('Accepted'),
            Rejected: filterAdvertisements('Rejected'),
        };

        const filteredProviders = filteredServicesByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredProviders.length / data.cardsPerPage);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredAdvertisements: filteredServicesByStatus,
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

    const handleAcceptAdvertisement = () => {
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

        if (!isError) {
            setData({ ...data, showRejectConfirmation: false, rejectReason });
        }
    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedAdvertisement: provider });
    };

    function handleImageClick(e) {
        e.target.style.transform = 'scale(2)';
        e.target.style.filter = 'brightness(1)';
        e.target.style.cursor = 'zoom-out';
    }

    function handleImageMouseLeave(e) {
        e.target.style.transform = 'scale(1)';
        e.target.style.filter = 'brightness(1.2)';
        e.target.style.cursor = 'zoom-in';
    }


    return (

        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="Pending" title="Pending" />
                <Tab eventKey="Accepted" title="Accepted" />
                <Tab eventKey="Rejected" title="Rejected" />
            </Tabs>

            <section id="service-page" className="block serviceProvider m-5 p-5" style={{ backgroundImage: `url(${BgImage})` }} >

                <h2 className="ms-5 fw-bold align-self-start">Advertisements</h2>

                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 m-3'>
                        <div className="input-group">
                            <select
                                className="form-select"
                                value={data.selectedCategory}
                                onChange={handleAdvertisementCategoryChange}
                                required
                            >
                                <option value="default">Select a Advertisement Category</option>
                                {Object.keys(advertisementsCategories).map((advertisement) => (
                                    <option key={advertisement} value={advertisement}>
                                        {advertisement}
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
                                placeholder="Search Advertisements"
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
                    {data.displayedServices && data.displayedServices.map((ads) => (
                        <Card className="m-3" key={ads.id}>
                            <Card.Img src={ads.images[0]} alt="Service ads" />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <p className="card-text fw-bold d-none d-md-block">{ads.adName}</p>
                                <p className="card-text d-none d-md-block align-self-start">Advertisement ID: Ads000{ads.id}</p>
                                <p className="card-text d-none d-md-block align-self-start">Category: {ads.category}</p>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <button onClick={() => handleShowDetails(ads)} className="btn" style={{ backgroundColor: '#0B85A0' }} > More Details </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#0D6445" }}
                                        onClick={() => {
                                            setData({ ...data, showAcceptConfirmation: true, selectedAdvertisement: ads });
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#B60E0E" }}
                                        onClick={() => {
                                            setData({ ...data, showRejectConfirmation: true, selectedAdvertisement: ads });
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
                {data.selectedAdvertisement && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedAdvertisement.images[0]} alt="Service Provider" width="150" height="150" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to accept this Advertisement?</p>
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect2' onClick={() => setData({ ...data, showAcceptConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={handleAcceptAdvertisement}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showRejectConfirmation} onHide={() => setData({ ...data, showRejectConfirmation: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Confirm Rejection</Modal.Title>
                </Modal.Header>
                {data.selectedAdvertisement && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedAdvertisement.images[0]} alt="Service Provider" width="150" height="150" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to Reject this Advertisement?</p>
                        <p>If you select "Yes," please enter the reason for rejection.<span style={{ color: 'red' }}>*</span></p>
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
                    <Modal.Title>Advertisement Details</Modal.Title>
                </Modal.Header>
                {data.selectedAdvertisement && (
                    <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-start">
                                    <Carousel
                                        interval={3000}
                                        prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
                                        nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
                                        onMouseEnter={handleImageClick}
                                        onMouseLeave={handleImageMouseLeave}
                                        className="custom-carousel"
                                    >
                                        {data.selectedAdvertisement.images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img src={image} alt={`Image ${index + 1}`} className="d-block" width="200" height="150" />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 ">
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <h6 className="text-center">Warranty Card And Documents</h6>
                                    </div>
                                    <ul className="list-unstyled">
                                        {data.selectedAdvertisement.uploadedFiles.map((file, index) => (
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
                        <div className="row">
                            <div className="col-12">
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Advertiser Full Name: </span>{data.selectedAdvertisement.firstName}{' '}{data.selectedAdvertisement.lastName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Shop Name:</span> {data.selectedAdvertisement.shopName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Shop Address: </span> {data.selectedAdvertisement.shopAddress}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>contact Number: </span> {data.selectedAdvertisement.contactNumber}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Category:</span> {data.selectedAdvertisement.category}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>NIC: </span> {data.selectedAdvertisement.nic}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Email: </span> {data.selectedAdvertisement.email}
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

export default AdminAdvertisements;