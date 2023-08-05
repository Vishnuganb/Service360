import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Table from 'react-bootstrap/Table';
import  "../../../../style/User/Admin/ViewHistory.css";



const AdminHistory = () => {

  const formStyle = {
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
    padding: "120px",
    borderRadius: "20px",
  };

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };


    return(
        <Container>
            <Form>
                <div className = "topActivity">
                <Form.Group className="Activity">
                    <Form.Label>Activity</Form.Label>
                </Form.Group>
<div className="Date">
        <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/dd/yyyy"
      />

{/* <Form.Group className="Activity">
                    <Form.Label></Form.Label>
                </Form.Group> */}
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/dd/yyyy"
        minDate={startDate} // Set the minimum date to the selected start date
      />
      </div>
      </div>
  
       {/* {startDate && endDate && (
        <p>
          Selected Date Range: {startDate.toLocaleDateString()} to{' '}
          {endDate.toLocaleDateString()}
        </p>
      )}  */}
     
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Service Provider Name</th>
          <th>Customer Name</th>
          <th>Date</th>
          <th>Event</th>
          <th>Service Status</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the Air Conditioner</td>
          <td>Finished</td>
          <td>Finished</td>
        </tr>
        <tr>
          <td>Pranavan</td>
          <td>Karththi</td>
          <td> 12/07/2023 <br /> 9.00am</td>
          <td>Change the wire for full house</td>
          <td>Pending</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </Table>



               
            </Form>
        </Container>
    );
}

export default AdminHistory;
