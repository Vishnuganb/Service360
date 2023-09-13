import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import axios from 'axios';

function HistoryTable() {

  const [viewHistoryData, setViewHistoryData] = useState(null);

  //training session objects with properties
  // const viewHistoryData = [
  //   {
  //     id: 1,
  //     serviceName: 'Masonry',
  //     customerName: 'John Doe',
  //     date: '2023-08-20',
  //     startTime: '09:00',
  //     endTime: '12:00',
  //     location: 'Wellawatte',
  //     paymentStatus: 'Pending',
  //   },
  //   {
  //     id: 2,
  //     serviceName: 'Tiles fitting',
  //     customerName: 'Jane Smith',
  //     date: '2023-08-25',
  //     startTime: '10:00',
  //     endTime: '15:00',
  //     location: 'Dehiwala',
  //     paymentStatus: 'Accepted',
  //   },
  //   {
  //     id: 3,
  //     serviceName: 'Masonry',
  //     customerName: 'Michael Johnson',
  //     date: '2023-08-25',
  //     startTime: '14:00',
  //     endTime: '17:00',
  //     location: 'Dehiwala',
  //     paymentStatus: 'Published',
  //   },
  //   {
  //     id: 4,
  //     serviceName: 'Masonry',
  //     customerName: 'Emily Brown',
  //     date: '2023-08-22',
  //     startTime: '09:30',
  //     endTime: '11:30',
  //     location: 'Kohuwala',
  //     paymentStatus: 'Accepted',
  //   },
  //   {
  //     id: 5,
  //     serviceName: 'Tiles fitting',
  //     customerName: 'David Lee',
  //     date: '2023-08-24',
  //     startTime: '14:00',
  //     endTime: '16:00',
  //     location: 'Wellawatte',
  //     paymentStatus: 'Pending',
  //   },
  //   {
  //     id: 6,
  //     serviceName: 'Iron works',
  //     customerName: 'Sophia Wilson',
  //     date: '2023-08-28',
  //     startTime: '13:00',
  //     endTime: '15:30',
  //     location: 'Moratuwa',
  //     paymentStatus: 'Published',
  //   },
  //   {
  //     id: 7,
  //     serviceName: 'Iron Works',
  //     customerName: 'William Johnson',
  //     date: '2023-09-02',
  //     startTime: '10:00',
  //     endTime: '12:00',
  //     location: 'Galle',
  //     paymentStatus: 'Accepted',
  //   },
  //   {
  //     id: 8,
  //     serviceName: 'Tiles fitting',
  //     customerName: 'Olivia Davis',
  //     date: '2023-09-05',
  //     startTime: '15:00',
  //     endTime: '17:00',
  //     location: 'Dehiwala',
  //     paymentStatus: 'Pending',
  //   },
  //   {
  //     id: 9,
  //     serviceName: 'Iron Works',
  //     customerName: 'James Wilson',
  //     date: '2023-09-09',
  //     startTime: '11:30',
  //     endTime: '13:30',
  //     location: 'Wellawatte',
  //     paymentStatus: 'Published',
  //   },
  //   {
  //     id: 10,
  //     serviceName: 'Glass & Aluminium',
  //     customerName: 'Ava Martin',
  //     date: '2023-09-12',
  //     startTime: '09:00',
  //     endTime: '12:00',
  //     location: 'Moratuwa',
  //     paymentStatus: 'Accepted',
  //   },
  //   {
  //     id: 11,
  //     serviceName: 'Masonry',
  //     customerName: 'Liam Miller',
  //     date: '2023-09-15',
  //     startTime: '14:00',
  //     endTime: '16:30',
  //     location: 'Moratuwa',
  //     paymentStatus: 'Pending',
  //   },
  //   {
  //     id: 12,
  //     serviceName: 'Masonry',
  //     customerName: 'Ella Clark',
  //     date: '2023-09-18',
  //     startTime: '12:00',
  //     endTime: '14:00',
  //     location: 'Wellaawatte',
  //     paymentStatus: 'Published',
  //   },
  // ];

  // Number of cards (training sessions) to display per page
  const cardsPerPage = 10;

  // State to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // State to store the selected start and end dates for filtering
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to handle page change when the user clicks on pagination buttons
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle start date changes
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setCurrentPage(1); // Reset current page to 1 when start date changes
  };

  // Function to handle end date changes
  const handleEndDateChange = (date) => {
    if (date) {
      date.setHours(23, 59, 59);  // Set the time to 23:59:59 to include the entire selected end date
    }

    setEndDate(date);
    setCurrentPage(1); // Reset current page to 1 when end date changes
  };

  useEffect(() => {
    axios.get('http://localhost:8080/auth/viewHistory').then((res) => {
      console.log(res.data);
      setViewHistoryData(res.data);
    });
  }, []);

  if (!viewHistoryData) return 'No History found!';

  // Filter training sessions based on the selected date range
  const filteredProjects = viewHistoryData.filter((project) => {
    if (startDate && endDate) {
      const ProjectDate = new Date(project.date);
      return ProjectDate >= startDate && ProjectDate <= endDate;
    } else if (startDate) {
      const ProjectDate = new Date(project.date);
      return ProjectDate >= startDate;
    }
    else if (endDate) {
      const ProjectDate = new Date(project.date);
      return ProjectDate <= endDate;
    }
    return true; // If start date or end date is not selected, return all sessions
  });

  // Calculate the start and end indices of the displayed training sessions for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Create a subset of training sessions to be displayed on the current page
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  const format12Hour = (time) => {
    const [hours, minutes] = time.split(":");
    const parsedHours = parseInt(hours, 10);
    const period = parsedHours >= 12 ? "PM" : "AM";
    const formattedHours = parsedHours > 12 ? parsedHours - 12 : parsedHours;
    return `${formattedHours}:${minutes} ${period}`;
  };


  return (
    <div>

      {/* Page Title*/}
      <span className="ms-3 align-self-start" style={{ fontSize: "28px", fontWeight: "600" }}>View History</span>


      {/* Body Nav */}
      <Navbar className="mt-4 ms-2 me-2">
        <div className='history-nav-container d-flex flex-row col-12'>
          <div className='history-nav-datepicker-container-1 d-flex flex-row ms-sm-auto'>
            {/* Date Picker */}
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              className="form-control date-picker-input history-nav-input"
              placeholderText="Date From"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
            <span className="input-group-text history-nav-input">
              <i class="bi bi-calendar4-event"></i>
            </span>
          </div>
          <div className='history-nav-datepicker-container-2 d-flex flex-row'>
            {/* Date Picker */}
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              className="form-control date-picker-input history-nav-input"
              placeholderText="Date to"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
            <span className="input-group-text history-nav-input">
              <i class="bi bi-calendar2-minus"></i>
            </span>
          </div>
        </div>
      </Navbar>


      {/* Table*/}
      <div className="mt-3 d-flex flex-column w-100" style={{ width: '100%' }}>
        <Container className="table-responsive">
          <Table striped bordered hover size="sm" className="training-session-table">
            <thead className="text-center">
              <tr>
                <th>Service Name</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Location</th>
                <th>Payment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the displayed training sessions and render each row */}
              {displayedProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.servicename}</td>
                  <td>{project.customername}</td>
                  <td>{project.jobdate}</td>
                  <td>{format12Hour(project.jobstarttime)}</td>
                  <td>{format12Hour(project.jobendtime)}</td>
                  <td>{project.joblocation}</td>
                  <td>{project.paymentstatus}</td>
                  <td className="d-flex justify-content-center">
                    <i className="bi bi-eye-fill fs-4"></i>
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
        {Array.from({ length: Math.ceil(filteredProjects.length / cardsPerPage) }, (_, index) => (
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
    </div>

  );
}

export default HistoryTable;