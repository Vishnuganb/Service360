
import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/Viewvacancy.css';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/images/header/Background.png';
import axios from "axios";

function ComplaintPopup() {
    const [show, setShow] = useState(false);
    const [complaintData, setComplaintData] = useState({
        complaintCategory: "",
        description: "",
        posteddate: new Date().toISOString().slice(0, 10), // Set the current date
        complaintstatus: "Pending" // Set the status to "Pending"

    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/auth/createcomplaints", complaintData)
            .then((response) => {
                // Handle success, maybe show a success message
                console.log("Complaint added successfully:", response.data);

                // Close the modal
                handleClose();
                window.location.reload();

            })
            .catch((error) => {
                // Handle error, maybe show an error message
                console.error("Error adding complaint:", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaintData({ ...complaintData, [name]: value });
    };

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
                    <form className="vacancy-form" onSubmit={handleSubmit}>
                        <div className="vacancy-form-group">
                            <label htmlFor="complaintCategory">Complaint Category<span style={{ color: "red" }}>&nbsp;*</span> </label>
                            <input
                                type="text"
                                name="complainttitle"
                                className="form-control"
                                id="complainttitle"
                                placeholder="Enter your Complaint"
                                value={complaintData.complainttitle}
                                onChange={handleChange}
                            />
                            <label htmlFor="description">Description <span style={{ color: "red" }}>&nbsp;*</span> </label>
                            <textarea
                                name="complaintdescription"
                                className="form-control"
                                id="complaintdescription"
                                placeholder="Enter your Description"
                                value={complaintData.complaintdescription}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button variant='secondary' style={{ background: "#292d32", marginRight: '200px' }} type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" style={{ background: "#687699" }} onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

const View = ({ complaintId }) => {
    const [show, setShow] = useState(false);
    const [complaintReply, setComplaintReply] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        // Fetch the complaint description when the modal is shown
        fetchComplaintReply(complaintId);
    };

    const fetchComplaintReply = (complaintId) => {
        axios.get(`http://localhost:8080/auth/viewcomplaints/${complaintId}`)
            .then((response) => {
                // Set the complaint description in state
                setComplaintReply(response.data.reply);
            })
            .catch((error) => {
                console.error("Error fetching complaint description:", error);
            });
    };

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
                    <center><p>{complaintReply}</p></center>
                </Modal.Body>

            </Modal>
        </>
    );
};


const Delete = ({ complaintId, onDelete }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        // Make an API request to update the complaint's disabled property to true
        axios
            .delete(`http://localhost:8080/auth/deletecomplaints/${complaintId}`)
            .then((response) => {
                // Handle success, maybe show a success message
                console.log("Complaint disabled successfully:", response.data);

                // Close the modal
                handleClose();
                window.location.reload();


                // Trigger the onDelete callback to update the UI
                onDelete(complaintId);
            })
            .catch((error) => {
                // Handle error, maybe show an error message
                console.error("Error disabling complaint:", error);
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

const More = ({ complaintId }) => {
    const [show, setShow] = useState(false);
    const [complaintDescription, setComplaintDescription] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        // Fetch the complaint description when the modal is shown
        fetchComplaintDescription(complaintId);
    };

    const fetchComplaintDescription = (complaintId) => {
        axios.get(`http://localhost:8080/auth/viewcomplaints/${complaintId}`)
            .then((response) => {
                // Set the complaint description in state
                setComplaintDescription(response.data.complaintdescription);
            })
            .catch((error) => {
                console.error("Error fetching complaint description:", error);
            });
    };

    return (
        <>
            <Button variant="btn btn-viewvacancy-form-t" onClick={handleShow}>
                <i className="bi bi-three-dots-vertical fs-6"></i>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#303841', color: '#fff' }} >
                    <Modal.Title>Complaint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center><p>{complaintDescription}</p></center>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default function CustomerComplaintPage() {
    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });
    const [Complaints, setComplaints] = useState([]);

    useEffect(() => {
        // Fetch data from your backend API
        axiosInstance
            .get("/auth/viewcomplaints")
            .then((response) => {
                setComplaints(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5; // Adjust this value based on how many items you want per page
    // const [selectedStatus, setSelectedStatus] = useState('All');

    // const [searchTerm, setSearchTerm] = useState('');
    // const [fromDate, setFromDate] = useState(null);
    // const [toDate, setToDate] = useState(null);

    const Cuscomplaints = Complaints.map((complaint) => {
        if (!complaint.disabled) {
            return {
                date: complaint.posteddate,
                complaint: complaint.complainttitle,
                complaintstatus: complaint.complaintstatus,
                complaintid: complaint.complaintid
            };
        }
        return null; // Filter out complaints with disabled=true
    }).filter(Boolean); // Remove null entries from the array

    // const filteredComplaints = complaints.filter((complaint) => {
    //     const isDateMatch =
    //         (!fromDate || new Date(complaint.date) >= new Date(fromDate)) &&
    //         (!toDate || new Date(complaint.date) <= new Date(toDate));


    //     return (
    //         isDateMatch &&
    //         (complaint.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //             complaint.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //             complaint.complaint.toLowerCase().includes(searchTerm.toLowerCase())
    //         )
    //     );
    // });

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentComplaints = filteredComplaints.slice(indexOfFirstItem, indexOfLastItem);

    // const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

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



                    {/* <Form className="nav-search">
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
                    </Form> */}

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
                            {Cuscomplaints.map((complaint, index) => (
                                <tr key={index}>
                                    <td>{complaint.date}</td>
                                    <td>{complaint.complaint}<More complaintId={complaint.complaintid} /></td>
                                    <td>{complaint.complaintstatus}</td>
                                    <td>

                                        {complaint.complaintstatus === 'Replied' && (
                                            <View complaintId={complaint.complaintid}/>
                                        )}&nbsp;&nbsp;
                                        <Delete complaintId={complaint.complaintid} />

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <br></br>


                {/* <div className="pagination justify-content-center">
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
                </div> */}


            </div>
        </>
    );
}
