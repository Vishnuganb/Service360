import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import Pagination from 'react-bootstrap/Pagination';
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
            <Modal.Title>Accept Quotation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p>You are accepting this Quotation with value of Rs. 8000</p></center>
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
            <Button variant="btn btn-viewvacancy-form-r"  style={{
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
          <Modal.Title> Quotation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center><p><a href='https://vyaparapp.in/tools/free-online-quotation-maker#'>Click here</a></p></center>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="btn btn-viewvacancy-form-r"  style={{
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
          <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
            <Modal.Title>Reject Quotation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p>Please tell, why you are rejecting this quoation</p></center>
            <input type="text" name="reason" className="form-control" id="reason" />

          </Modal.Body>
          <Modal.Footer>
          <Button variant="btn btn-viewvacancy-form-a"  style={{
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
            <Button variant="btn btn-viewvacancy-form-r"  style={{
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
  

export default function ViewAQuotation() {
    return (
        <>
              <div className='vacancybackground' style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="vacancy-container background-total accordion bg-white rounded-3 mb-4 me-3" >
                <div className="col d-flex flex-row justify-content-between" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className='d-flex flex-row gap-4 p-3 '>
                        <p className="text-dark fs-4 fw-bold vacancytext"> Quotation </p>
                    </div>
                </div>
                <p> <Link to="/customer/ReceivedQuotation" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-arrow-left-circle-fill"></i></Link>
        &nbsp;&nbsp;Back</p>
                {/* <Form className="nav-search col-4"  >
                    <Form.Control
                        type="search"
                        placeholder=""
                        className=""
                        aria-label="Search"
                    />
                    <Button id="view-jobs-button">Search</Button>
                </Form> */}
            </div>

            <div className="my-customer-table-container col-11">
                <Table className="my-customer-table" striped bordered hover>
                    <thead>
                        <tr>
                            <th className="my-customer-table-th-1">Date</th>
                            {/* <th className="my-customer-table-th-1 col-3">Quotation ID</th> */}
                            <th className="my-customer-table-th-2">Service Provider</th>
                            <th className="my-customer-table-th-2">Amount</th>
                            <th className="my-customer-table-th-2">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>27/07/2023</td>
                            {/* <td>Ac Repair</td> */}
                            <td>Vijay Deva</td>
                            <td>Rs. 8000</td>
                            <td>
                                <View />
                                &nbsp; &nbsp; 
                                  <Accept />
                                  &nbsp; &nbsp; 
                                <Reject />
                            </td>
                        </tr>

                    </tbody>
                </Table>

            </div>
            </div>
            {/* <br></br>
            <Row id='bodyPageRow2'>
                <div className="paginationContainer-jobs" >
                    <Pagination className='pagination-element'>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Row> */}
        </>
    );
}
