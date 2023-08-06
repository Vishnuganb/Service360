import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function MyTrainingSessions() {

    //training session objects with properties
    const trainingSessionData = [       
        {
          id: 1,
          sessionName: 'Introduction to React',
          date: '2023-08-20',
          startTime: '09:00',
          endTime: '12:00',
          location: 'Room 101',
          status: 'Pending',
        },
        {
          id: 2,
          sessionName: 'Advanced Java Programming',
          date: '2023-08-25',
          startTime: '10:00',
          endTime: '15:00',
          location: 'Online',
          status: 'Accepted',
        },
        {
          id: 3,
          sessionName: 'Python Basics for Beginners',
          date: '2023-08-25',
          startTime: '14:00',
          endTime: '17:00',
          location: 'Room 202',
          status: 'Published',
        },
        {
          id: 4,
          sessionName: 'Web Development Fundamentals',
          date: '2023-08-22',
          startTime: '09:30',
          endTime: '11:30',
          location: 'Room 201',
          status: 'Accepted',
        },
        {
          id: 5,
          sessionName: 'Networking Basics',
          date: '2023-08-24',
          startTime: '14:00',
          endTime: '16:00',
          location: 'Online',
          status: 'Pending',
        },
        {
          id: 6,
          sessionName: 'Data Science Essentials',
          date: '2023-08-28',
          startTime: '13:00',
          endTime: '15:30',
          location: 'Room 303',
          status: 'Published',
        },
        {
          id: 7,
          sessionName: 'Embedded Systems Workshop',
          date: '2023-09-02',
          startTime: '10:00',
          endTime: '12:00',
          location: 'Lab 1',
          status: 'Accepted',
        },
        {
          id: 8,
          sessionName: 'Cybersecurity Best Practices',
          date: '2023-09-05',
          startTime: '15:00',
          endTime: '17:00',
          location: 'Online',
          status: 'Pending',
        },
        {
          id: 9,
          sessionName: 'Introduction to Machine Learning',
          date: '2023-09-09',
          startTime: '11:30',
          endTime: '13:30',
          location: 'Room 202',
          status: 'Published',
        },
        {
          id: 10,
          sessionName: 'Network Security Protocols',
          date: '2023-09-12',
          startTime: '09:00',
          endTime: '12:00',
          location: 'Room 301',
          status: 'Accepted',
        },
        {
          id: 11,
          sessionName: 'Cloud Computing Basics',
          date: '2023-09-15',
          startTime: '14:00',
          endTime: '16:30',
          location: 'Online',
          status: 'Pending',
        },
        {
          id: 12,
          sessionName: 'Introduction to Robotics',
          date: '2023-09-18',
          startTime: '12:00',
          endTime: '14:00',
          location: 'Robotics Lab',
          status: 'Published',
        },
        {
          id: 13,
          sessionName: 'Full-Stack Web Development',
          date: '2023-09-22',
          startTime: '09:30',
          endTime: '12:30',
          location: 'Room 205',
          status: 'Accepted',
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
      (session.sessionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <div className="mt-4 d-flex flex-column w-100" style={{ width: '100%' }}>
        <Container className="table-responsive">
          <Table striped bordered hover size="sm" className="My-training-session-table">
            <thead className="text-center">
              <tr>
                <th>Session ID</th>
                <th>Session Name</th>
                <th>Date</th>
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
                  <td>{session.sessionName}</td>
                  <td>{session.date}</td>
                  <td>{session.startTime}</td>
                  <td>{session.endTime}</td>
                  <td>{session.location}</td>
                  <td>{session.status}</td>
                  <td className="d-flex justify-content-center">
                    <Button className='btn-My-Training-ServiceProvider-2'>Publish</Button>
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
    </div>
    
  );
}

export default MyTrainingSessions;