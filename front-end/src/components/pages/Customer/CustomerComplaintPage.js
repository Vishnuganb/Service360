
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/images/header/Background.png';

const View = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="btn btn-viewvacancy-form-t" style={{
          width: '16%',
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
            width: '100%',
          }
        }} onClick={handleShow} >
          <i className="my-customer-table-icon bi bi-eye-fill h5"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
            <Modal.Title>Complaint</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p>I am writing to express my dissatisfaction with the plumbing service provided by <b>Alex Kumar</b> on <b>27.07.2023 </b>at my residence located at <b>wellawatte</b>.</p></center>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  };

export default function CustomerComplaintPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value based on how many items you want per page

    const [searchTerm, setSearchTerm] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const complaints = [
        { date: '27/07/2023', complaintCategory: 'Services provided by service providers' },
        { date: '26/07/2023', complaintCategory: 'Billing Issues' },
        { date: '25/07/2023', complaintCategory: 'System quality' },
        { date: '25/07/2023', complaintCategory: 'System quality' },
        { date: '24/07/2023', complaintCategory: 'Services provided by service providers' },
        { date: '24/07/2023', complaintCategory: 'Services provided by service providers' },
        { date: '24/07/2023', complaintCategory: 'Services provided by service providers' },

    ];

    const filteredComplaints = complaints.filter((complaints) => {
        const isDateMatch = (!fromDate || new Date(complaints.date) >= new Date(fromDate)) &&
            (!toDate || new Date(complaints.date) <= new Date(toDate));

        return (
            isDateMatch &&
            (complaints.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                complaints.complaintCategory.toLowerCase().includes(searchTerm.toLowerCase())
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
                        <div className='d-flex flex-row gap-4 p-3 '>
                            <h3 className="text-dark fs-4 fw-bold vacancytext">Complaints</h3>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-md-end gap-4 p-3' style={{ marginRight: '60px' }}>
                        <Link style={{ color: 'white' }} to={`/customer/CustomerComplaints`}>
                            <Button variant="secondary">Add Complaints</Button>
                        </Link>
                    </div>


                    <Form className="nav-search">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 m-3'>
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
                            <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 m-3 date-picker-container'>
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
                            <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 m-3 date-picker-container'>
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



                <div className="my-customer-table-container col-11">
                    <Table className="my-customer-table" striped bordered hover>
                        <thead>
                            <tr>
                                <th className="my-customer-table-th-1"><b>Date</b></th>
                                <th className="my-customer-table-th-1"><b>Complaint Category</b></th>
                                <th className="my-customer-table-th-2"><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentComplaints.map((quotation, index) => (
                                <tr key={index}>
                                    <td>{quotation.date}</td>
                                    <td>{quotation.complaintCategory}</td>
                                    <td>
                                        <View/>

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

