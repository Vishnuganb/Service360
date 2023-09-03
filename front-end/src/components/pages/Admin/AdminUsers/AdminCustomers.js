import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Container, Form } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import person1 from '../../../../assets/images/home/Customer_1.png';
import person2 from '../../../../assets/images/home/Customer_2.png';
import person3 from '../../../../assets/images/home/Customer_3.png';
import styled from 'styled-components';
import { set } from 'lodash';



const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-start;
    `;

function AdminCustomer() {

    const customersData = [
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
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
    ];

    const [data, setData] = useState({
        currentPage: 1,
        totalPages: 1,
        searchTerm: '',
        displayedServices: [],
        showDetailsModal: false,
        selectedCustomer: null,
        enable: true,
        fromDate: null,
        toDate: null,
    });

    const cardsPerPage = 9;

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    useEffect(() => {
        const searchedServices = data.searchTerm.trim() === '' ? customersData : customersData.filter((customer) => (
            customer.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
            customer.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
            customer.contactNumber.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
            customer.nic.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
            customer.address.toLowerCase().includes(data.searchTerm.toLowerCase())
        ));

        const fromDateObj = data.fromDate ? new Date(data.fromDate) : null;
        const toDateObj = data.toDate ? new Date(data.toDate) : null;
        const filteredServices = searchedServices.filter((customer) => {
            const registeredDateObj = new Date(customer.registeredDate);
            return (
                (!fromDateObj || registeredDateObj >= fromDateObj) &&
                (!toDateObj || registeredDateObj <= toDateObj)
            );
        });

        const totalPages = Math.ceil(filteredServices.length / cardsPerPage);
        setData((prevState) => ({
            ...prevState,
            totalPages,
            displayedServices: filteredServices.slice(
                (data.currentPage - 1) * cardsPerPage,
                data.currentPage * cardsPerPage
            ),
        }));
    }, [data.searchTerm, data.currentPage, data.fromDate, data.toDate]);

    const handlePageChange = (page) => {
        setData((prevState) => ({ ...prevState, currentPage: page }));
    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedCustomer: provider });
    };


    return (

        <section id="service-page" className="block serviceProvider py-3" style={{ backgroundImage: `url(${BgImage})` }} >

            <h2 className="ms-5 fw-bold align-self-start">Customers</h2>

            <div className="d-flex justify-content-center w-100">

                <div className='col-xs-3 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 me-0 date-picker-container'>
                    <div className="input-group m-0">
                        <DatePicker
                            selected={data.fromDate}
                            onChange={date => setData((prevState) => ({ ...prevState, fromDate: date }))}
                            className="form-control date-picker-input"
                            placeholderText="From Date"
                            dateFormat="yyyy-MM-dd"
                            isClearable
                        />
                        <span className="input-group-text">
                            <i className="bi bi-calendar2-week"></i>
                        </span>
                    </div>
                </div>
                <div className='me-xs-2 col-xs-2 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 date-picker-container'>
                    <div className="input-group">
                        <DatePicker
                            selected={data.toDate}
                            onChange={date => setData((prevState) => ({ ...prevState, toDate: date }))}
                            className="form-control date-picker-input"
                            placeholderText="To Date"
                            dateFormat="yyyy-MM-dd"
                            isClearable
                        />
                        <span className="input-group-text">
                            <i className="bi bi-calendar2-week"></i>
                        </span>
                    </div>
                </div>

                <div className='col-xs-2 col-sm-3 col-md-2 col-lg-3 col-xl-2 m-3 me-xs-5'>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={data.searchTerm}
                            onChange={handleSearchChange}
                        />
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>

            </div>

            <div className="mt-4 d-flex flex-column w-100" style={{width:'100%'}}>
                <Container className="table-responsive">
                    <Table striped bordered hover size="sm" className="custom-table">
                        <thead className='text-center'>
                            <tr>
                                <th>Customer ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>NIC</th>
                                <th>Contact Number</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.displayedServices.map((customer) => (
                                <tr key={customer.id}>
                                    <td>CUS000{customer.id}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.nic}</td>
                                    <td>{customer.contactNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td className='d-flex justify-content-center'>
                                        <i className="bi bi-info-circle-fill fs-3" onClick={() => handleShowDetails(customer)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
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

            <Modal show={data.showDetailsModal} onHide={() => setData({ ...data, showDetailsModal: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Customer Details</Modal.Title>
                </Modal.Header>
                {data.selectedCustomer && (
                    <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-start">
                                    <img src={data.selectedCustomer.image} alt="Service Provider" className="rounded-circle" width="100" height="100" />
                                </div>

                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>First Name: </span> {data.selectedCustomer.firstName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Last Name: </span> {data.selectedCustomer.lastName}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>NIC: </span> {data.selectedCustomer.nic}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Email: </span> {data.selectedCustomer.email}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Address: </span> {data.selectedCustomer.address}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>contact Number: </span> {data.selectedCustomer.contactNumber}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Registered Date: </span> {data.selectedCustomer.registeredDate}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                )}
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
                                <Button className="btn-effect">
                                    More Info
                                </Button>
                            </div>
                        </div>
                    </div>
                </StyledModalFooter>
            </Modal>
        </section>

    );
}

export default AdminCustomer;
