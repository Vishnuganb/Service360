import React, { useState, useEffect } from 'react';
import { Card, Tab, Tabs, Modal, Button } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import person1 from '../../../../assets/images/home/Customer_1.png';
import person2 from '../../../../assets/images/home/Customer_2.png';
import person3 from '../../../../assets/images/home/Customer_3.png';
import { set } from 'lodash';

const searchInputStyle = {
    height: '38px',
};

function AdminAdvertisers() {

    const advertisersData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '123 Main Street, City',
            registeredDate: '2023-08-01',
            image: person1,
            shopName: 'The Handyman Hub',
            shopAddress: '123 Main Street, City',
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
            image: person2,
            shopName: 'Electric Fixers',
            shopAddress: '456 Oak Avenue, Town',
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
            image: person3,
            shopName: 'Creative Carpentry',
            shopAddress: '789 Maple Lane, Village',
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
            image: person2,
            shopName: 'Master Plumbers',
            shopAddress: '101 Pine Street, City',
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
            image: person3,
            shopName: 'All Seasons Cleaners',
            shopAddress: '222 Oak Road, Town',
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
            image: person1,
            shopName: 'Artisan Masons',
            shopAddress: '333 Maple Street, Village',
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
            image: person3,
            shopName: 'SecureTech Solutions',
            shopAddress: '444 Pine Avenue, City',
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
            image: person1,
            shopName: 'Elite Interior Design',
            shopAddress: '555 Oak Lane, Town',
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
            image: person2,
            shopName: 'GreenThumb Landscaping',
            shopAddress: '666 Maple Road, Village',
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
            image: person1,
            shopName: 'TopNotch Roofing',
            shopAddress: '777 Main Street, City',
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
            image: person2,
            shopName: 'TechZone Electronics',
            shopAddress: '888 Oak Avenue, Town',
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
            image: person3,
            shopName: 'AquaFlow Plumbing',
            shopAddress: '999 Maple Lane, Village',
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
            image: person2,
            shopName: 'SparkleClean Services',
            shopAddress: '1010 Pine Street, City',
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
            image: person3,
            shopName: 'Precision Builders',
            shopAddress: '111 Oak Road, Town',
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
            image: person1,
            shopName: 'SkyHigh Air Conditioning',
            shopAddress: '1212 Maple Street, Village',
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
            image: person3,
            shopName: 'Golden Hammer Construction',
            shopAddress: '1313 Pine Avenue, City',
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
            image: person1,
            shopName: 'SilverLock Security',
            shopAddress: '1414 Oak Lane, Town',
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
            image: person2,
            shopName: 'Elegant Designs',
            shopAddress: '1515 Maple Road, Village',
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
    ];

    const [data, setData] = useState({
        currentPage: 1,
        showModal: false,
        totalPages: 1,
        searchTerm: '',
        activeTab: 'Pending',
        filteredAdvertisers: [],
        displayedAdvertisers: [],
        showDetailsModal: false,
        selectedAdvertiser: null,
        cardsPerPage: 3,
        showAcceptConfirmation: false,
        showRejectConfirmation: false,
    });

    const totalPages = Math.ceil(advertisersData.length / data.cardsPerPage);
    const startIndex = (data.currentPage - 1) * data.cardsPerPage;
    const endIndex = startIndex + data.cardsPerPage;
    const displayedAdvertisers = advertisersData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {

        const filteredAdvertisersByStatus = {
            Pending: filterAdvertisers('Pending'),
            Accepted: filterAdvertisers('Accepted'),
            Rejected: filterAdvertisers('Rejected'),
        };

        const filteredAdvertisers = filteredAdvertisersByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredAdvertisers.length / data.cardsPerPage);
        const startIndex = (page - 1) * data.cardsPerPage;
        const endIndex = startIndex + data.cardsPerPage;
        const filteredData = data.filteredAdvertisers[data.activeTab];
        const displayedAdvertisers = filteredData.slice(startIndex, endIndex);

        setData({
            ...data,
            totalPages,
            currentPage: page,
            displayedAdvertisers,
        });

        console.log(data.displayedAdvertisers);
        console.log(page)
    };


    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    const filterAdvertisers = (status) => {

        const filteredAdvertisers = advertisersData.filter((advertiser) =>
            advertiser.status === status && (
                advertiser.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                advertiser.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) 
            )
        );

        return filteredAdvertisers;
    };

    const handleTabChange = (tab) => {

        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
        }));
    };


    useEffect(() => {
        const filteredAdvertisersByStatus = {
            Pending: filterAdvertisers('Pending'),
            Accepted: filterAdvertisers('Accepted'),
            Rejected: filterAdvertisers('Rejected'),
        };

        const filteredAdvertisers = filteredAdvertisersByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredAdvertisers.length / data.cardsPerPage);

        console.log(filteredAdvertisers)
        console.log(totalPages)

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredAdvertisers: filteredAdvertisersByStatus,
            displayedAdvertisers: filteredAdvertisers.slice(0, data.cardsPerPage),
            currentPage: 1,
        }));
    }, [data.searchTerm, data.activeTab]);

    const handleConfirmAccept = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleConfirmReject = () => {
        setData({ ...data, showRejectConfirmation: false });
    };

    const handleAcceptProvider = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleRejectProvider = () => {
        setData({ ...data, showRejectConfirmation: false });
    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedAdvertiser: provider });
    };


    return (

        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="Pending" title="Pending" />
                <Tab eventKey="Accepted" title="Accepted" />
                <Tab eventKey="Rejected" title="Rejected" />
            </Tabs>

            <section id="service-page" className="block serviceProvider m-5 p-5" style={{ backgroundImage: `url(${BgImage})` }} >

                <h2 className="ms-5 fw-bold align-self-start">Advertisers</h2>

                <div className="d-flex justify-content-end  w-100">
                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 m-3'>
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
                    {data.displayedAdvertisers && data.displayedAdvertisers.map((advertiser) => (
                        <Card className="m-3" key={advertiser.id}>
                            <Card.Img src={advertiser.image} alt="Service Provider" className="rounded-circle" width="50" height="50" />
                            <Card.Body className="d-flex flex-column align-items-center" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                <p className="card-text fw-bold d-none d-md-block">{advertiser.firstName}{' '}{advertiser.lastName}</p>
                                <p className="card-text d-none d-md-block align-self-start" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Shop Name: {advertiser.shopName}</p>
                                <p className="card-text d-none d-md-block align-self-start" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Shop Address: {advertiser.shopAddress}</p>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <button onClick={() => handleShowDetails(advertiser)} className="btn" style={{ backgroundColor: '#0B85A0' }}>More Details</button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#0D6445" }}
                                        onClick={() => {
                                            setData({ ...data, showAcceptConfirmation: true, selectedAdvertiser: advertiser });
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#B60E0E" }}
                                        onClick={() => {
                                            setData({ ...data, showRejectConfirmation: true, selectedAdvertiser: advertiser });
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
                {data.selectedAdvertiser && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedAdvertiser.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to accept this Advertiser?</p>
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
                {data.selectedAdvertiser && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedAdvertiser.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to Reject this Advertiser?</p>
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect2' onClick={() => setData({ ...data, showRejectConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={handleRejectProvider}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showDetailsModal} onHide={() => setData({ ...data, showDetailsModal: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Advertiser Details</Modal.Title>
                </Modal.Header>
                {data.selectedAdvertiser && (
                    <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-start">
                                    <img src={data.selectedAdvertiser.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Service Provider ID: </span> ADV000{data.selectedAdvertiser.id}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>First Name: </span> {data.selectedAdvertiser.firstName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Last Name: </span> {data.selectedAdvertiser.lastName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Shop Name: </span> {data.selectedAdvertiser.shopName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Shop Address:</span> {data.selectedAdvertiser.shopAddress}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>NIC: </span> {data.selectedAdvertiser.nic}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Email: </span> {data.selectedAdvertiser.email}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Address: </span> {data.selectedAdvertiser.address}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Registered Date: </span> {data.selectedAdvertiser.registeredDate}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 " style={{ marginTop: '100px' }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                        <h6 className="text-center">Certificates And Documents</h6>
                                    </div>
                                    <ul className="list-unstyled">
                                        {data.selectedAdvertiser.uploadedFiles.map((file, index) => (
                                            <li key={index}>
                                                <div className="d-flex align-items-center mb-2 p-2 rounded hover-effect" style={{ backgroundColor: "#ccc" }}>
                                                    <i class="bi bi-file-earmark-arrow-down-fill me-2 fs-4"></i>
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
                <Modal.Footer>
                    {data.activeTab === 'Accepted' && (
                        <Button className="btn-effect">
                            More Info
                        </Button>
                    )}
                    <Button className="btn-effect" onClick={() => setData({ ...data, showDetailsModal: false })}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminAdvertisers;
