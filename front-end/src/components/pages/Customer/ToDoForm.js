import React, { useState, useEffect } from 'react';
import '../../../style/Customer/ToDoForm.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
// import { QrReader } from 'react-qr-reader'; // Import the QR code reader

function ToDoForm() {
  const [tasks, setTasks] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [qrScanActive, setQrScanActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/tododetails'); // Replace with your Spring Boot API endpoint
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const allTasksCompleted = tasks.every(task => task.completed);
    if (allTasksCompleted) {
      setShowPaymentModal(true);
    }
  }, [tasks]);

  const toggleCompletion = taskId => {
    setTasks(prevTasks => {
      return prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const completedTasks = tasks.filter(task => task.completed);
  const nonCompletedTasks = tasks.filter(task => !task.completed);

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
    setShowPaymentMessage(false); // Reset the message state when modal is closed
  };

  const handleSkip = () => {
    setShowPaymentMessage(true); // Show the message when Skip is clicked
    handleClosePaymentModal(); // Close the modal
  };

  const handleScan = data => {
    if (data) {
      // Handle the scanned QR code data here (e.g., send it to the server)
      console.log(data);
      setQrScanActive(false); // Turn off the QR scanner after a successful scan
    }
  };

  const startScan = () => {
    setQrScanActive(true);
  };

  return (
    <div className='custodo'>
      <h4>Project Name : Assigned by Alex</h4>
      {nonCompletedTasks.map(task => (
        <Card
          key={task.todolistdetailsid}
          className={`castodolist ${task.completed ? 'completed' : ''}`}
        >
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              {/* <FontAwesomeIcon
                icon={task.completed ? faCheckCircle : faCircle}
                className={`check-icon ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleCompletion(task.todolistdetailsid)}
              /> */}
               <p className="task-date">{task.dueDate}</p>
              <span className="task-text">{task.task}</span>
            </div>
            
            <Button className="scanbtn" onClick={startScan}>Scan QR Code</Button>
          </Card.Body>
        </Card>
      ))}

      {completedTasks.length > 0 && (
        <div className='completedTasks'>
          <h5>Completed Tasks</h5>
          {completedTasks.map(task => (
            <Card
              key={task.todolistdetailsid}
              className={`castodolist completed`}
            >
              <Card.Body>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={`check-icon completed`}
                />
                {task.task}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {/* QR Code Scanner Modal */}
      <Modal show={qrScanActive} onHide={() => setQrScanActive(false)} centered>
        <Modal.Header className='cusmodaltitle'>
          <Modal.Title>Scan QR Code</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <QrReader
            onScan={handleScan}
            onError={(err) => console.error(err)}
          />
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setQrScanActive(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* Payment Modal */}
      {/* <Modal show={showPaymentModal} onHide={handleClosePaymentModal} centered>
        <Modal.Header className='cusmodaltitle'>
          <Modal.Title>Service Completed</Modal.Title>
        </Modal.Header>
        <div className='bgimagetodo'>
          <Modal.Body className='cusmodbody'>
            Your tasks are completed now. Select Payment option to Continue
          </Modal.Body>
          <Modal.Footer>
            <Button className='custodobut1' onClick={handleClosePaymentModal}>
              Online Payment
            </Button>
            <Button className='custodobut2' variant="primary" onClick={handleSkip}>
              HandOver Directly
            </Button>
          </Modal.Footer>
        </div>
      </Modal> */}
    </div>
  );
}

export default ToDoForm;
