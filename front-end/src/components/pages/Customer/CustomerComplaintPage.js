
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/images/header/Background.png';

function ComplaintPopup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='secondary' style={{ background: "#292d32" }} onClick={handleShow}>
                Add Complaints
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
                    <Modal.Title>Make Complaints</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="vacancy-form">

                        <div className="vacancy-form-group">
                            <label for="complaint">Complaint Category<span style={{ color: "red" }}>&nbsp;*</span> </label>
                            <input type="text" name="complaint" className="form-control" id="title" placeholder="Enter your Complaint" />
                            <label for="complaint">Description <span style={{ color: "red" }}>&nbsp;*</span> </label>
                            <textarea
                                name="description"
                                className="form-control"
                                id="description"
                                placeholder="Enter your Description"
                            />                             </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' style={{ background: "#292d32" }}>
                        Submit
                    </Button>
                    <Button variant="secondary" style={{ background: "#687699" }} onClick={handleClose}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

const View = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-viewvacancy-form-t" style={{
                width: '15%',
                height: '30px',
                border: '1px solid #ced4da',
                fontSize: '14px',
                padding: '0 8px',
                backgroundColor: '#007bff',
                color: '#fff',
                fontWeight: '500',
                textTransform: 'none',
                background: 'black',
                '@media (max-width: 768px)': {
                    width: '100%',
                }
            }} onClick={handleShow} >
                <i className="my-customer-table-icon bi bi-eye-fill h7"></i>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
                    <Modal.Title>Reply</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center><p>We will take action</p></center>
                </Modal.Body>

            </Modal>
        </>
    );
};

const Delete = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-viewvacancy-form-t" style={{
                width: '15%',
                height: '30px',
                border: '1px solid #ced4da',
                fontSize: '14px',
                padding: '0 8px',
                backgroundColor: '#007bff',
                color: '#fff',
                fontWeight: '500',
                textTransform: 'none',
                background: 'black',
                '@media (max-width: 768px)': {
                    width: '100%',
                }
            }} onClick={handleShow} >
                <i className="my-customer-table-icon bi bi-trash h7"></i>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }} >
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center><p>Are you sure to delete?</p></center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-viewvacancy-form-a" style={{
                        width: '15%',
                        height: '38px',
                        border: '1px solid #ced4da',
                        fontSize: '14px',
                        padding: '0 8px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontWeight: '500',
                        textTransform: 'none',
                        background: 'black',
                        '@media (max-width: 768px)': {
                            width: '60%',
                        }
                    }} onClick={handleClose}>
                        Yes
                    </Button>
                    <Button variant="btn btn-viewvacancy-form-r" style={{
                        width: '15%',
                        height: '38px',
                        border: '1px solid #ced4da',
                        fontSize: '14px',
                        padding: '0 8px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontWeight: '500',
                        textTransform: 'none',
                        background: 'rgb(126, 123, 123)',
                        '@media (max-width: 768px)': {
                            width: '60%',
                        }
                    }} onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const More = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-viewvacancy-form-t" onClick={handleShow} >
                <i className="bi bi-three-dots-vertical fs-6"></i>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }} >
                    <Modal.Title>Complaint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center><p>Dissatisfaction with the plumbing service provided by <b>Alex</b> on <b>27.07.2023</b> at my resident at<b>wellawatte.</b></p></center>
                </Modal.Body>

            </Modal>
        </>
    );
};
export default function CustomerComplaintPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value based on how many items you want per page
    const [selectedStatus, setSelectedStatus] = useState('All');

    const [searchTerm, setSearchTerm] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const complaints = [
        { date: '27/07/2023', complaint: 'About service providers', status: 'Pending' },
        { date: '26/07/2023', complaint: 'Billing Issues', status: 'Pending' },
        { date: '25/07/2023', complaint: 'System quality', status: 'Replied' },
        { date: '25/07/2023', complaint: 'System quality', status: 'Pending' },
        { date: '24/07/2023', complaint: 'Billing Issues', status: 'Replied' },
        { date: '24/07/2023', complaint: 'Services provided by service providers', status: 'Pending' },

    ];

    const filteredComplaints = complaints.filter((complaint) => {
        const isDateMatch =
            (!fromDate || new Date(complaint.date) >= new Date(fromDate)) &&
            (!toDate || new Date(complaint.date) <= new Date(toDate));


        return (
            isDateMatch &&
            (complaint.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                complaint.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
                complaint.complaint.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentComplaints = filteredComplaints.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
        setCurrentPage(1);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
        setCurrentPage(1);
    };

    return (
        <>

            <div className='vacancybackground' style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="vacancy-container background-total accordion " >
                    <div className="col d-flex flex-row justify-content-between">
                        <div className='d-flex flex-row gap-4 p-3'>
                            <h3 className="text-dark fs-4 fw-bold vacancytext">Complaint</h3>

                        </div>
                        <div className='d-flex justify-content-center justify-content-md-end gap-4 p-4'>
                            <ComplaintPopup />
                        </div>
                    </div>



                    <Form className="nav-search">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className='col-md-3 col-sm-6 m-2'>
                                <div className="input-group m-0">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className=""
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <span className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-6 m-2'>
                                <Form.Control
                                    as="select"
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    style={{ height: '45px' }}
                                >
                                    <option value="All">All Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Replied">Replied</option>
                                </Form.Control>
                            </div>
                            <div className='col-md-2 col-sm-6 m-2 date-picker-container'>
                                <div className="input-group">
                                    <Form.Control
                                        type="date"
                                        placeholder="From Date"
                                        value={fromDate}
                                        onChange={handleFromDateChange}
                                        style={{ height: '45px' }}
                                    />
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-6 m-2 date-picker-container'>
                                <div className="input-group">
                                    <Form.Control
                                        type="date"
                                        placeholder="To Date"
                                        value={toDate}
                                        onChange={handleToDateChange}
                                        style={{ height: '45px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>

                </div>



                <div className="my-customer-table-container">
                    <Table className="my-customer-table" striped bordered hover>
                        <thead>
                            <tr>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Date</b></th>
                                <th className="my-customer-table-th-1" style={{ width: '18.67%' }}><b>Complaint</b></th>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Status</b></th>
                                <th className="my-customer-table-th-2" style={{ width: '16.67%' }}><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentComplaints.map((complaints, index) => (
                                <tr key={index}>
                                    <td>{complaints.date}</td>
                                    <td>{complaints.complaint}<More /></td>
                                    <td>{complaints.status}</td>
                                    <td>

                                        {complaints.status === 'Replied' && (
                                            <View />
                                        )}&nbsp;&nbsp;
                                        <Delete />

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <br></br>


                <div className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`pagination-element ${currentPage === index + 1 ? 'active' : ''}`}
                            style={{ backgroundColor: '#292D32', color: '#fff', width: '35px', height: '35px', fontSize: '16px' }}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>


            </div>
        </>
    );
}
