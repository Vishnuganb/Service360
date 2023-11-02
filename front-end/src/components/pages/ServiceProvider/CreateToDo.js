import React, { useState, useEffect } from 'react';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [taskAmount, setTaskAmount] = useState('');
    const [hourInputs, setHourInputs] = useState({});
    const [paymentStatus, setPaymentStatus] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const handleBackClick = () => {
      navigate(-1);
    };

    const { id } = useParams();
    const todolistid = parseInt(id, 10);

    useEffect(() => {
        fetchTasks(); // Load tasks when the component mounts
    }, []);

    // useEffect = (() =>{
    //     console.log('"taskAmount"')
    // }, [])

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/auth/viewTodoListDetails');
            if (response.status === 200) {
                setTasks(response.data);
                console.log(tasks);
            } else {
                console.error('Failed to fetch tasks.');
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        const response = axios.get(`http://localhost:8080/auth/getTodoListPaymentStatus/${todolistid}`).then((res) => {
            console.log(res.data);
            setPaymentStatus(res.data);
        });        
    }, []);

    const handleAddTask = async () => {
        if (taskInput.trim() === '') {
            alert('Please enter a task before adding.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/auth/createTodoListDetails/${todolistid}`, {
                task: taskInput,
                amount: taskAmount,
                completed: false,
            });

            if (response.status === 200) {
                fetchTasks(); // Reload tasks
                setTaskInput('');
                setTaskAmount(0);
            } else {
                alert('Failed to add the task. Please try again.');
            }
        } catch (error) {
            console.error('Error adding task:', error);
            alert('An error occurred while adding the task. Please try again.');
        }
    };

    const handleCompletedTask = async () => {

        try {
                const response = await axios.put(`http://localhost:8080/auth/updatetoDoListPaymetStatus/${todolistid}`);
                window.location.reload();
        } catch (error) {
                console.error('Error completing task:', error);
                alert('Failed to complete the task. Please try again.');
        }
        
    };
    

    const handleToggleComplete = async (todolistdetailsid, completed) => {
        const formData = new FormData();
        formData.append('completed', !completed);
        formData.append('hours', hourInputs[todolistdetailsid]);
    
        try {
            const response = await axios.put(`http://localhost:8080/auth/viewTodoListDetails/${todolistdetailsid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.status === 200) {
                // Update the task's completion status on the frontend without modifying it
                const updatedTasks = tasks.map((task) => {
                    if (task.todolistdetailsid === todolistdetailsid) {
                        return { ...task, completed: !completed };
                    } else {
                        return task;
                    }
                });
                setTasks(updatedTasks);
            } else {
                alert('Failed to update the task. Please try again.');
            }
        } catch (error) {
            console.error('Error updating task:', error);
            alert('An error occurred while updating the task. Please try again.');
        }
    };    
    
    return (

        <div className="custodo">
            
            {showModal && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to mark this project as completed?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            No
                        </Button>
                        <Button variant="primary" onClick={handleCompletedTask}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            <h2>To-Do List</h2>
            <div >
            <span className="back-button-service-provider" onClick={handleBackClick} style={{ marginRight:'50px', marginTop:'-65px', maxWidth: '110px', fontWeight:600, float:'right' }}>
                <i className="bi bi-arrow-left-circle-fill fs-3"></i>
                <p className="m-0 p-0 fs-5" style={{color:"black"}}>&nbsp; Back</p>
            </span>
            {paymentStatus == 'ongoing' && (
                <div className='border border-2 rounded p-3'>
                        <div style={{ display: "flex"}}>
                            <input
                                type="text"
                                placeholder="Enter a task..."
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                style={{ marginBottom: "10px", borderRadius:'10px'}}
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <input
                                type="text"
                                placeholder="Enter an Amount..."
                                value={taskAmount}
                                onChange={(e) => setTaskAmount(e.target.value)}
                                style={{ marginBottom: "10px", width: "250px", borderRadius:'10px' }} 
                            />
                        </div>
                        <Button variant="secondary" style={{ background: "#292d32" }} onClick={handleAddTask}>Add Task</Button>
                        {tasks.every(task => task.completed) && (
                            <Button variant="secondary" style={{ background: "#292d32", float:"right"}} onClick={() => setShowModal(true)}>Project Completed</Button>
                        )}
                </div>
            )}

                <ul>
                {tasks.map((task, index) => (
    <li key={index} className="castodolist card" style={{ padding: '10px'}}>
       <div>
            <input
                    type="checkbox"
                    onChange={() => {
                        if (!task.completed) {
                            handleToggleComplete(task.todolistdetailsid, !task.completed);
                            // Reload the page
                             window.location.reload();
                        }
                        
                    }}
                    checked={task.completed}
                    
            />
            <span className={task.completed ? 'completed' : ''}>
                &nbsp;&nbsp;
                {task.task}
            </span>
            <br></br>
            <br></br>
            <span className={task.completed ? 'completed' : ''}>
                &nbsp;&nbsp;Amount: Rs.
                {task.amount}
            </span>
            &nbsp;&nbsp;
            <input
    type="text"
    placeholder="Enter hours..."
    value={task.completed ? task.workedHours.toString() : (hourInputs[task.todolistdetailsid] || '')}
    onChange={(e) => setHourInputs({ ...hourInputs, [task.todolistdetailsid]: e.target.value })}
    style={{ margin: "8px", width: "150px", marginRight: "1000px", height: "35px", borderRadius:'5px' }}
/>
        </div>
    </li>
))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
