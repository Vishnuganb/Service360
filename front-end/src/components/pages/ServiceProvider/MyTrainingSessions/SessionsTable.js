import React, { useState } from 'react';
import { Table, Container, Alert  } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function MyTrainingSessions() {

  const [viewTrainingSessionsData, setviewTrainingSessionsData] = useState(null);

  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');  


  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    setSelectedRow(rowData);
    setShow(true); // Show the modal
  };

  // State to control the user registration modal
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  // Function to open the user registration modal
  const handleShowRegistrationModal = () => {
    setShowRegistrationModal(true);
  };

  // Function to close the user registration modal
  const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const registeredUsers = [
    {
      email: 'pranavan@gmail.com',
      phoneNumber: '0771319093',
      registrationDate: '2023-08-16 10:00 AM',
      status: 'Confirmed',
    },
    {
      email: 'visnugan@gmail.com',
      phoneNumber: '070983783',
      registrationDate: '2023-08-16 11:00 AM',
      status: 'Confirmed',
    },
    {
      email: 'karthikeyan@gmail.com',
      phoneNumber: '0773499921',
      registrationDate: '2023-08-16 12:00 PM',
      status: 'Pending',
    },
    {
      email: 'mithilan@gmail.com',
      phoneNumber: '0751209321',
      registrationDate: '2023-08-16 01:00 PM',
      status: 'Confirmed',
    },
    {
      email: 'naresh@gmail.com',
      phoneNumber: '0701912299',
      registrationDate: '2023-08-16 02:00 PM',
      status: 'Confirmed',
    },
  ];

  // Number of cards (training sessions) to display per page
  const cardsPerPage = 10;

  // State to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // State to store the search term
  const [searchTerm, setSearchTerm] = useState('');

  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(null);
  

  // Function to handle page change when the user clicks on pagination buttons
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setCurrentPage(1);   // Reset current page to 1 when search term changes
  };

  // Function to handle date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentPage(1); // Reset current page to 1 when date changes
  };

  const handlePublish = (id) => {
      console.log(id);
      axios
      .put(`http://localhost:8080/auth/publishTrainingSession/${id}`).then((res) => {
          console.log(res.data);

          if(!res){
            alert("Payment Failed");
          }
          else{
            alert("Payment Successful");
            window.location.reload();
          }
      })
      .catch((error) => {
        // Handle errors
      });
  };

  useEffect(() => {
    axios.get('http://localhost:8080/auth/viewMyTrainingSessions').then((res) => {
        console.log(res.data);
        setviewTrainingSessionsData(res.data);
    });
  }, []);

  if (!viewTrainingSessionsData) return 'No jobs found!';
  
  // Filter training sessions based on search term and selected date
  const filteredSessions = viewTrainingSessionsData.filter((session) => {
    const sessionDate = new Date(session.trainingdate);
    const selected = selectedDate ? new Date(selectedDate) : null;

    return (
      (!selected || sessionDate.toDateString() === selected.toDateString()) &&
      (session.trainingtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.traininglocation.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  function convertTo12HourFormat(time24) {
    const [hour, minute] = time24.split(":");
    const hourInt = parseInt(hour);
    const amPm = hourInt >= 12 ? "PM" : "AM";
    const hour12 = hourInt > 12 ? hourInt - 12 : hourInt === 0 ? 12 : hourInt;
  
    return `${hour12}:${minute} ${amPm}`;
  }

  // Calculate the start and end indices of the displayed training sessions for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Create a subset of training sessions to be displayed on the current page
  const displayedSessions = filteredSessions.slice(startIndex, endIndex);

  const handleShowAlert = (message) => {
      setAlertMessage(message);
      setShowAlert(true);

      // Automatically hide the alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 5000); // 5000 milliseconds (5 seconds)
  };
      
  return (
    <div>

      {/* Custom styles */}
      <style>
        {`
          /* Customize the width of the modal for different screen sizes */
          @media (max-width: 768px) {
            .custom-modal {
              max-width: 90%;
            }
          }

          @media (min-width: 769px) and (max-width: 1200px) {
            .custom-modal {
              max-width: 70%;
            }
          }

          @media (min-width: 1201px) {
            .custom-modal {
              max-width: 50%;
            }
          }

          /* Add any additional custom styles here */
        `}
      </style>

      {/* Page Title*/}
      <span className="ms-3 align-self-start" style={{ fontSize: "28px", fontWeight: "600" }}>My Training Sessions</span>


      {/* Body Nav */}
      <Navbar className="mt-4 ms-2 me-2">
        <div className='training-nav-container d-flex flex-row col-12'>
          <div className='d-flex flex-row'>
            {/* Search Input */}
            <input
              type="text"
              className="form-control training-nav-input"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-text training-nav-input">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className='training-nav-datepicker-container d-flex flex-row ms-sm-auto'>
            {/* Date Picker */}
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="form-control date-picker-input training-nav-input"
              placeholderText="Filter by Date"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
            <span className="input-group-text training-nav-input">
              <i class="bi bi-calendar2-week"></i>
            </span>
          </div>
        </div>
      </Navbar>


      {/* Table*/}
      <div className="mt-3 d-flex flex-column w-100" style={{ width: '100%' }}>
        <Container className="table-responsive">
          <Table striped bordered hover size="sm" className="My-training-session-table">
            <thead className="text-center">
              <tr>
                <th>Session ID</th>
                <th style={{ width: '25%' }}>Training Session Title</th>
                <th style={{ width: '13%' }}>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the displayed training sessions and render each row */}
              {displayedSessions.map((session) => (
                <tr key={session.trainingid} className="custom-table-row">
                  <td className="text-center">{String(session.trainingid).padStart(3, '0')}</td>
                  <td className="text-center" style={{ width: '25%' }}>{session.trainingtitle}</td>
                  <td className="text-center" style={{ width: '13%' }}>{session.trainingdate}</td>
                  <td className="text-center">{convertTo12HourFormat(session.trainingstarttime)} - {convertTo12HourFormat(session.trainingendtime)}</td>
                  <td className="text-center">{session.traininglocation}</td>
                  <td className="text-center">{session.status}</td>
                  <td className="text-center">
                    {session.status === 'Pending' ? (
                      <i
                        className={`bi-info-circle fs-4 mx-2 my-2`}
                        onClick={() => handleShowAlert('Your training session is under review by the admin')}
                      ></i>
                    ) : session.status === 'Payment Pending' ? (
                      <i
                        className={`bi bi-cash fs-4 mx-2 my-2`}
                        onClick={() => handleShow(session)}
                      ></i>
                    ) : session.status === 'Published' ? (
                      <i
                        className={`bi bi-eye fs-4 mx-2 my-2`}
                        onClick={handleShowRegistrationModal}
                      ></i>
                    ) : null
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>


      {/* Pagination */}
      <div className="pagination justify-content-center">
        {/* Create pagination buttons for each page */}
        {Array.from({ length: Math.ceil(filteredSessions.length / cardsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`page-link ${currentPage === index + 1 ? 'active' : ''
              }`}
            style={{ backgroundColor: '#292D32', color: '#fff' }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal for Payment Confirmation */}
      <Modal show={show && selectedRow !== null} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
          <Modal.Title>Pay for Training Session</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p>
            To publish your training session post on Service360, you need to make a payment of 1000.00 LKR.
            Please confirm your payment below
        </p>
          <Form>
              {selectedRow && (
                <>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Group className="mb-3" controlId="sessionTitle">
                    <Form.Label>Session Title</Form.Label>
                    <Form.Control type="text" value={selectedRow ? selectedRow.trainingtitle : ''} readOnly />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value="1000.00 LKR" readOnly />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="paymentConfirmation">
                    <Form.Check
                      type="checkbox"
                      label="I confirm that I want to proceed with the payment."
                    />
                  </Form.Group>
                </Form.Group>
                </>
              )}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn-ServiceProvider-2' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-ServiceProvider-1' onClick={() =>{
              if(selectedRow) {
                handlePublish(selectedRow.trainingid);
              } 
              handleClose(); 
          }}>
            Pay & Publish
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal for ServiceProviders Registration */}
      <Modal show={showRegistrationModal} onHide={handleCloseRegistrationModal} dialogClassName="custom-modal" centered>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
          <Modal.Title>Registered Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the registered users table */}
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Email</th>
                <th>Phone Number</th>
                <th >Registration Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td >{user.registrationDate}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-ServiceProvider-2' onClick={handleCloseRegistrationModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Alert
        show={showAlert}
        variant="secondary"
        onClose={() => setShowAlert(false)}
        dismissible
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999, // Adjust the z-index as needed
        }}
      >
        {alertMessage}
      </Alert>     

    </div>

  );
}

export default MyTrainingSessions;