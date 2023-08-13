
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/images/header/Background.png';

const Accept = () => {
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
          <i className="my-customer-table-icon bi bi-pen h5"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
            <Modal.Title>Accept Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p>You are accepting this Application</p></center>
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
                width: '70%',
              }
            }} onClick={handleClose}>
              Accept
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
                width: '70%',
              }
            }} onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  
  const Reject = () => {
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
          <i className="my-customer-table-icon bi bi-trash h5"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }} >
            <Modal.Title>Reject Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p>You are Rejecting this Application</p></center>
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
              Reject
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
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

export default function ViewVacancy() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value based on how many items you want per page

    const [searchTerm, setSearchTerm] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const quotations = [
        { date: '27/07/2023', serviceTitle: 'Ac Repair', status: 'Pending' },
        { date: '26/07/2023', serviceTitle: 'Ac Repair', status: 'Pending' },
        { date: '25/07/2023', serviceTitle: 'Tile fitting', status: 'Pending' },
        { date: '25/07/2023', serviceTitle: 'Tile fitting', status: 'Pending' },
        { date: '24/07/2023', serviceTitle: 'Tile fitting', status: 'Pending' },
        { date: '24/07/2023', serviceTitle: 'Plumbing', status: 'Pending' },
        { date: '24/07/2023', serviceTitle: 'Plumbing', status: 'Pending' },
        { date: '23/07/2023', serviceTitle: 'Plumbing', status: 'Pending' },
        
    ];

    const filteredQuotations = quotations.filter((quotation) => {
        const isDateMatch = (!fromDate || new Date(quotation.date) >= new Date(fromDate)) &&
            (!toDate || new Date(quotation.date) <= new Date(toDate));

        return (
            isDateMatch &&
            (quotation.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                quotation.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                quotation.status.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQuotations = filteredQuotations.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredQuotations.length / itemsPerPage);

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
                            <p className="text-dark fs-4 fw-bold vacancytext">Vacancy Response</p>
                        </div>
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
                                <th className="my-customer-table-th-1"><b>Service Title</b></th>
                                <th className="my-customer-table-th-2"><b>Status</b></th>
                                <th className="my-customer-table-th-2"><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentQuotations.map((quotation, index) => (
                                <tr key={index}>
                                    <td>{quotation.date}</td>
                                    <td>{quotation.serviceTitle}</td>
                                    <td>{quotation.status}</td>
                                    <td>
                                        <Button variant="primary" className="my-customer-table-btn">
                                            <Link style={{ color: 'white' }} to={`/customer/ViewVacancyResponse`}>
                                                <i className="my-customer-table-icon bi bi-eye-fill h5"></i>
                                            </Link>
                                        </Button>
                                        <Accept />
                                        &nbsp; &nbsp;
                                        <Reject />
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
                style={{ backgroundColor: '#292D32', color: '#fff', width:'35px',height:'35px', fontSize:'16px' }}
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

