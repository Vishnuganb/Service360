import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import electrical from '../../../../assets/images/ServiceProvider/electric.jpg';
import masonry2 from '../../../../assets/images/ServiceProvider/masonry2.jpg';
import plumping1 from '../../../../assets/images/ServiceProvider/plumping.jpg';
import carpentry1 from '../../../../assets/images/ServiceProvider/carpentry.jpg';

function MyTrainingSessions() {
  
  const Trainingimages=[
      electrical,
      plumping1,
      carpentry1,
  ]

    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null); 

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

    //training session objects with properties
    const trainingSessionData = [       
        {
          id: 1,
          sessionTitle: 'Basic Electricity for the Non-Electrician Skills Training',
          date: '2023-08-20',
          startTime: '09:00',
          endTime: '12:00',
          location: 'Marino mall',
          status: 'Published',
        },
        {
          id: 2,
          sessionTitle: 'Introduction to Masonry Techniques',
          date: '2023-08-25',
          startTime: '10:00',
          endTime: '15:00',
          location: 'One Galle Face',
          status: 'Accepted',
        },
        {
          id: 3,
          sessionTitle: 'Plumbing Essentials Workshop',
          date: '2023-08-25',
          startTime: '14:00',
          endTime: '17:00',
          location: 'Colombo City Center',
          status: 'Published',
        },
        {
          id: 4,
          sessionTitle: 'Carpentry Fundamentals: Building Strong Foundations',
          date: '2023-08-22',
          startTime: '09:30',
          endTime: '11:30',
          location: 'Taj Samudra',
          status: 'Accepted',
        },
        {
          id: 5,
          sessionTitle: 'Advanced Electrical Wiring Techniques',
          date: '2023-08-24',
          startTime: '14:00',
          endTime: '16:00',
          location: 'Online',
          status: 'Payment Pending',
        },
        {
          id: 6,
          sessionTitle: 'Mastering Masonry: From Basics to Artistry',
          date: '2023-08-28',
          startTime: '13:00',
          endTime: '15:30',
          location: 'Majestic City',
          status: 'Published',
        },
        {
          id: 7,
          sessionTitle: 'Essential Carpentry Tools and Techniques',
          date: '2023-09-02',
          startTime: '10:00',
          endTime: '12:00',
          location: 'Crescat Boulevard',
          status: 'Accepted',
        },
        {
          id: 8,
          sessionTitle: 'CCTV Best Practices',
          date: '2023-09-05',
          startTime: '15:00',
          endTime: '17:00',
          location: 'Arcade Independence Square',
          status: 'Payment Pending',
        },
        {
          id: 9,
          sessionTitle: 'Masonsry for Beginners',
          date: '2023-09-09',
          startTime: '11:30',
          endTime: '13:30',
          location: 'Liberty Plaza',
          status: 'Published',
        },
        {
          id: 10,
          sessionTitle: 'Network Security Protocols',
          date: '2023-09-12',
          startTime: '09:00',
          endTime: '12:00',
          location: 'Majestic City',
          status: 'Accepted',
        },
        {
          id: 11,
          sessionTitle: 'Introduction to Electrical Engineering',
          date: '2023-09-15',
          startTime: '14:00',
          endTime: '16:30',
          location: 'Liberty Plaza',
          status: 'Payment Pending',
        },
        {
          id: 12,
          sessionTitle: 'Introduction to Civil Engineering',
          date: '2023-09-18',
          startTime: '12:00',
          endTime: '14:00',
          location: 'Arcade Independence Square',
          status: 'Published',
        },
        {
          id: 13,
          sessionTitle: 'Introduction to Mechanical Engineering',
          date: '2023-09-22',
          startTime: '09:30',
          endTime: '12:30',
          location: 'Liberty Plaza',
          status: 'Accepted',
        },
    ];

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

    // Filter training sessions based on search term and selected date
    const filteredSessions = trainingSessionData.filter((session) => {
    const sessionDate = new Date(session.date);
    const selected = selectedDate ? new Date(selectedDate) : null;

    return (
      (!selected || sessionDate.toDateString() === selected.toDateString()) &&
      (session.sessionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.status.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });


    // Calculate the start and end indices of the displayed training sessions for the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Create a subset of training sessions to be displayed on the current page
    const displayedSessions = filteredSessions.slice(startIndex, endIndex);
  

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
      <span className="ms-3 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>My Training Sessions</span>
      

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
                <th>Start Time</th>
                <th>End Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {/* Map through the displayed training sessions and render each row */}
              {displayedSessions.map((session) => (
                <tr key={session.id} className="custom-table-row">
                  <td>{String(session.id).padStart(3, '0')}</td>
                  <td style={{ width: '25%' }}>{session.sessionTitle}</td>
                  <td style={{ width: '13%' }}>{session.date}</td>
                  <td>{session.startTime}</td>
                  <td>{session.endTime}</td>
                  <td>{session.location}</td>
                  <td>{session.status}</td>
                  <td className="d-flex justify-content-center">
                      {session.status === 'Payment Pending' ? (
                        <i 
                          className={`bi bi-cash fs-4 mx-2 my-2`} 
                          onClick={() => handleShow(session)}
                        ></i>
                      ) : session.status === 'Accepted' ? (
                        <i
                          className={`bi bi-upload fs-4 mx-2 my-2`}
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
            className={`page-link ${
              currentPage === index + 1 ? 'active' : ''
            }`}
            style={{ backgroundColor: '#292D32', color: '#fff' }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>


      {/* Modal for Payment Confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
          <Modal.Title>Pay for Training Session</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Group className="mb-3" controlId="sessionTitle">
                    <Form.Label>Session Title</Form.Label>
                    <Form.Control type="text" value={selectedRow ? selectedRow.sessionTitle : ''} readOnly />
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
        </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn-ServiceProvider-2' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-ServiceProvider-1' >
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Modal for ServiceProviders Registration */}
      <Modal show={showRegistrationModal} onHide={handleCloseRegistrationModal} dialogClassName="custom-modal">
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

    </div>
    
  );
}

export default MyTrainingSessions;