
import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/images/header/Background.png';
import axios from "axios";


export default function PostedJobs() {

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });
    const [jobs, setJobs] = useState([]);


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [jobid, setJobId] = useState("");
    const [selectedJob, setSelectedJob] = useState([]);

    const openModalDelete = (jobid) => {
        setIsDeleteModalOpen(true);
        setJobId(jobid);
        setSelectedJob(jobs.find((job) => job.jobid === jobid));
        console.log("jobid", jobid);
    };

    const closeModalDelete = () => {
        setIsDeleteModalOpen(false);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Adjust this value based on how many items you want per page

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
            .get("/auth/viewjobs")
            .then((response) => {
                setJobs(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    const handleDeleteJobId = (e) => {
        setJobId(e.target.value);
    };

    const handleDeleteJob = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.delete(`/auth/deletejobs/${jobid}`, {});

            if (response.status === 200) {
                console.log("okkk");
                closeModalDelete();
                window.location.reload();
            }
        } catch (error) {
            console.log("vfvn fjvhfj vfhtv");
            console.log(error);
        }
    };



    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5; // Adjust this value based on how many items you want per page

    // const [searchTerm, setSearchTerm] = useState('');
    // const [fromDate, setFromDate] = useState(null);
    // const [toDate, setToDate] = useState(null);

    const quotations = jobs.map((job) => {
        if (!job.disabled) {
        return {
            date: job.posteddate,
            serviceTitle: job.servicename,
            duedate: job.duedate,
            jobid: job.jobid
        };
    }
    return null;}).filter(Boolean);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQuotations = quotations.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(quotations.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // const filteredQuotations = quotations.filter((quotation) => {
    //     const isDateMatch = (!fromDate || new Date(quotation.date) >= new Date(fromDate)) &&
    //         (!toDate || new Date(quotation.date) <= new Date(toDate));

    //     return (
    //         isDateMatch &&
    //         (quotation.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //             quotation.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase())
    //         )
    //     );
    // });

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentQuotations = filteredQuotations.slice(indexOfFirstItem, indexOfLastItem);

    // const totalPages = Math.ceil(filteredQuotations.length / itemsPerPage);

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    // const handleSearchChange = (e) => {
    //     setSearchTerm(e.target.value);
    //     setCurrentPage(1);
    // };

    // const handleFromDateChange = (e) => {
    //     setFromDate(e.target.value);
    //     setCurrentPage(1);
    // };

    // const handleToDateChange = (e) => {
    //     setToDate(e.target.value);
    //     setCurrentPage(1);
    // };
    const Delete = ({ jobId, onDelete }) => {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const handleDelete = () => {
            // Make an API request to update the complaint's disabled property to true
            axios
                .delete(`http://localhost:8080/auth/deletejobs/${jobId}`)
                .then((response) => {
                    // Handle success, maybe show a success message
                    console.log("Job disabled successfully:", response.data);
    
                    // Close the modal
                    handleClose();
                    window.location.reload();
    
    
                    // Trigger the onDelete callback to update the UI
                    onDelete(jobId);
                })
                .catch((error) => {
                    // Handle error, maybe show an error message
                    console.error("Error disabling jobs:", error);
                });
        };
    
        return (
            <>
                <Button
                    variant="btn btn-viewvacancy-form-t"
                    style={{
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
                    }}
                    onClick={handleShow}
                >
                    <i className="my-customer-table-icon bi bi-trash h7"></i>
                </Button>
    
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }} >
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center"> {/* Use text-center class to center-align content */}
                        <p>Are you sure to delete?</p>
                        <Button
                            variant="btn btn-viewvacancy-form-a"
                            style={{
                                width: '15%',
                                height: '38px',
                                border: '1px solid #ced4da',
                                fontSize: '14px',
                                padding: '0 8px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                fontWeight: '500',
                                textTransform: 'none',
                                marginRight: '200px',
                                background: 'black',
                                '@media (max-width: 768px)': {
                                    width: '60%',
                                }
                            }}
                            onClick={handleDelete} // Call handleDelete when "Yes" is clicked
                        >
                            Yes
                        </Button>
                        <Button
                            variant="btn btn-viewvacancy-form-r"
                            style={{
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
                            }}
                            onClick={handleClose} // Close the modal without deleting
                        >
                            No
                        </Button>
    
                    </Modal.Body>
                    <Modal.Footer>
    
                    </Modal.Footer>
                </Modal>
            </>
        );
    };
    

    return (
        <>
            <div className='vacancybackground' style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="vacancy-container background-total accordion " >
                    <div className="col d-flex flex-row justify-content-between">
                        <div className='d-flex flex-row gap-4 p-3 '>
                            <p className="text-dark fs-4 fw-bold vacancytext"> Posted Jobs</p>
                        </div>
                    </div>

                    {/* <Form className="nav-search">
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
                    </Form> */}
                </div>



                <div className="my-customer-table-container"  >
                    <Table className="my-customer-table" striped bordered hover>
                        <thead>
                            <tr>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Date</b></th>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Service Title</b></th>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Due Date</b></th>
                                <th className="my-customer-table-th-1" style={{ width: '16.67%' }}><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotations.map((quotation, index) => (
                                <tr key={index}>
                                    <td style={{ width: '16.67%' }}>{quotation.date}</td>
                                    <td style={{ width: '16.67%' }}>{quotation.serviceTitle}</td>
                                    <td style={{ width: '16.67%' }}>{quotation.duedate}</td>
                                    <td style={{ width: '16.67%' }}>
                                    <Link to={`/customer/ViewPostedJobs/${quotation.jobid}`} style={{
                                        width: '15%', // Change this width to match the "Delete" button
                                        height: '35px', // Change this height to match the "Delete" button
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
                                    }}>
                                        <i className="my-customer-table-icon bi bi-eye-fill h7"></i>
                                    </Link>

                                        &nbsp; &nbsp;
                                        <Delete jobId={quotation.jobid} />

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <br></br>

            {/* <Modal show={isDeleteModalOpen} onHide={closeModalDelete} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }}>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <input
                            type="hidden"
                            name="jobid"
                            value={jobid}
                            onChange={handleDeleteJobId}
                        />
                        <center><p>Are you sure to delete?</p></center>

                    </Form>
                    <div>
                        <Button method="POST" style={{
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
                        }}
                            onClick={handleDeleteJob} variant="btn btn-viewvacancy-form-a" >
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
                        }}>
                            No
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal> */}

            {/* <div className="pagination justify-content-center">
                <Pagination>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                        key={index + 1}
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)} // Ensure this line is correct
                    >
                        {index + 1}
                    </Pagination.Item>
                    
                    ))}
                </Pagination>
            </div> */}
            <div className="pagination justify-content-center" >
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

        </>
    );
}