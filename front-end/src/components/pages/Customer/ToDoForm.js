import React, { useState, useEffect } from 'react';
import '../../../style/Customer/ToDoForm.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ToDoForm() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task #1', completed: false },
    { id: 2, text: 'Task #2', completed: false }
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);

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

  const [paymentDone, setPaymentDone] = useState(false);

  return (
    <div className='custodo'>
      <h4>Project Name : Assigned by Alex</h4>
      <p>21 July 2023</p>
      {nonCompletedTasks.map(task => (
        <Card
          key={task.id}
          className={`castodolist ${task.completed ? 'completed' : ''}`}
        >
          <Card.Body>
            <FontAwesomeIcon
              icon={task.completed ? faCheckCircle : faCircle}
              className={`check-icon ${task.completed ? 'completed' : ''}`}
              onClick={() => toggleCompletion(task.id)}
            />
            {task.text}
          </Card.Body>
        </Card>
      ))}

      {completedTasks.length > 0 && (
        <div className='completedTasks'>
          <h5>Completed Tasks</h5>
          {completedTasks.map(task => (
            <Card
              key={task.id}
              className={`castodolist completed`}
            >
              <Card.Body>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={`check-icon completed`}
                />
                {task.text}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      <Modal show={showPaymentModal} onHide={handleClosePaymentModal} centered>
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
      </Modal>
    </div>
  );
}

export default ToDoForm;