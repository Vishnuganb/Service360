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



export default function ReceivedQuotation() {
    return (
        <>
            <div className='vacancybackground' style={{ backgroundImage: `url(${BgImage})` }}>
            <div className="vacancy-container background-total accordion bg-white rounded-3 mb-4 me-3" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="col d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-4 p-3 '>
                        <p className="text-dark fs-4 fw-bold vacancytext">Quotation </p>
                    </div>
                </div>
                <Form className="nav-search col-4"  >
                    <Form.Control
                        type="search"
                        placeholder=""
                        className=""
                        aria-label="Search"
                    />
                    <Button id="view-jobs-button">Search</Button>
                </Form>
            </div>

            <div className="my-customer-table-container col-11">
                <Table className="my-customer-table" striped bordered hover>
                    <thead>
                        <tr>
                            <th className="my-customer-table-th-1">Date</th>
                            <th className="my-customer-table-th-1">Service Title</th>
                            {/* <th className="my-customer-table-th-2">Service Provider</th> */}
                            <th className="my-customer-table-th-2">Status</th>
                            <th className="my-customer-table-th-2">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>27/07/2023</td>
                            <td>Ac Repair</td>
                            <td>Pending</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>26/07/2023</td>
                            <td>Ac Repair</td>
                            <td>Checked</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>26/07/2023</td>
                            <td>Ac Repair</td>
                            <td>Rejected</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>25/07/2023</td>
                            <td>Tile fitting</td>
                            <td>Accepted</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>25/07/2023</td>
                            <td>Tile fitting</td>

                            <td>Rejected</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>25/07/2023</td>
                            <td>Tile fitting</td>
                            <td>Rejected</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>24/07/2023</td>
                            <td>Tile fitting</td>
                            <td>Rejected</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>24/07/2023</td>
                            <td>Plumbing</td>
                            <td>Accepted</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                        <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                               
                                     </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>23/07/2023</td>
                            <td>Plumbing</td>
                            <td>Rejected</td>
                            <td>
                                <Button variant="primary" className="my-customer-table-btn">
                                    <Link style={{ color: 'white' }} to={`/customer/ViewAQuotation`}>
                                    <i className="my-customer-table-icon bi bi-pencil-square h5"></i>
                                    </Link>                                </Button>

                            </td>
                        </tr>

                    </tbody>
                </Table>

            </div>
            <br></br>
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
            </Row>
            </div>
        </>
    );
}
