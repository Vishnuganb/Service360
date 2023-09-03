import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../style/Customer/ToDoForm.css';
import { Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [reminderDate, setReminderDate] = useState(null);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingText, setEditingText] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() === '') {
            alert("Please enter a task before adding.");
            return; // Return early if no task is entered
        }

        if (dueDate === null) {
            alert("Please select a due date before adding.");
            return; // Return early if no due date is selected
        }

        if (reminderDate === null) {
            alert("Please select a reminder date and time before adding.");
            return; // Return early if no reminder date is selected
        }

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: taskInput,
                completed: false,
                dueDate: dueDate,
                reminderDate: reminderDate,
            },
        ]);
        setTaskInput('');
        setDueDate(null);
        setReminderDate(null);
    };


    const isWithintwohrs = (task) => {
        // const ONE_DAY_IN_MS = 4; 
        const ONE_DAY_IN_MS = 2 * 60 * 60 * 1000;
        const taskCreationDate = new Date(task.id);
        const currentDate = new Date();
        return currentDate - taskCreationDate <= ONE_DAY_IN_MS;
    };

    const handleToggleComplete = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleEditTask = (taskId, newText) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
        ));
        setEditingTaskId(null);
        setEditingText('');
    };

    const handleEditDueDate = (taskId, newDueDate) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, dueDate: newDueDate } : task
        ));
    };

    const handleEditReminderDate = (taskId, newReminderDate) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, reminderDate: newReminderDate } : task
        ));
    };

    return (
        <div className="custodo">
            <h3>To-Do List</h3>
            <h4>Project Name : Tile Fitting</h4>
            <div>
                <div style={{ display: "flex" }}>
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        style={{ marginBottom: "10px", width: "600px" }}
                    />
                    <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        placeholderText="Select due date "
                        dateFormat="yyyy-MM-dd"
                        style={{ width: "80px" }} // Adjust the width as needed
                        minDate={new Date()} // Set minimum selectable date to today

                    />
                    <DatePicker
                        selected={reminderDate}
                        onChange={(date) => setReminderDate(date)}
                        placeholderText="Select reminder"
                        dateFormat="yyyy-MM-dd HH:mm" // Display both date and time
                        showTimeSelect // Enable time selection
                        timeFormat="HH:mm" // Time format
                        timeIntervals={15} // Set time intervals in minutes
                        style={{ width: "200px" }} // Adjust the width as needed
                        minDate={new Date()} // Set minimum selectable date to today

                    />

                </div>


                <Button variant="secondary" style={{ background: "#292d32" }} onClick={handleAddTask}>Add Task</Button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="castodolist card" style={{ padding: '10px' }}>
                        <Row>
                            <Col>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(task.id)}
                                    disabled
                                />
                                &nbsp;&nbsp;
                                {editingTaskId === task.id ? (
                                    <input
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                    />
                                ) : (
                                    <span
                                        className={task.completed ? 'completed' : ''}
                                    >
                                        {task.text}
                                    </span>
                                )}
                            </Col>

                        </Row>


                        <Row>
                            <Col>
                                {editingTaskId === task.id ? (
                                    <DatePicker
                                        selected={task.dueDate}
                                        onChange={(date) => handleEditDueDate(task.id, date)}
                                        placeholderText="Select due date"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                ) : (
                                    <span>Due Date: {task.dueDate ? task.dueDate.toDateString() : 'Not set'}</span>
                                )}
                            </Col>
                            <Col>
                                {editingTaskId === task.id ? (
                                    <DatePicker
                                        selected={task.reminderDate}
                                        onChange={(date) => handleEditReminderDate(task.id, date)}
                                        placeholderText="Select reminder date"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                ) : (
                                    <span>Reminder Date: {task.reminderDate ? task.reminderDate.toDateString() : 'Not set'}</span>
                                )}
                                &nbsp; &nbsp;
                                {editingTaskId === task.id ? (
                                    <Button variant="secondary" style={{ background: "#292d32" }} onClick={() => handleEditTask(task.id, editingText)}>Save</Button>
                                ) : (
                                    isWithintwohrs(task) && (
                                        <>
                                            <Button variant="btn btn-viewvacancy-form-t" style={{
                                                width: '5%',
                                                height: '20px',
                                                border: '1px solid #ced4da',
                                                fontSize: '14px',
                                                padding: '0 3px',
                                                backgroundColor: '#007bff',
                                                color: '#fff',
                                                fontWeight: '500',
                                                textTransform: 'none',
                                                background: 'black',
                                                '@media (max-width: 768px)': {
                                                    width: '100%',
                                                }
                                            }} onClick={() => setEditingTaskId(task.id)} >
                                                <i className="my-customer-table-icon bi bi-pen h7"></i>
                                            </Button>
                                            &nbsp;&nbsp;<Button variant="btn btn-viewvacancy-form-t" style={{
                                                width: '5%',
                                                height: '20px',
                                                border: '1px solid #ced4da',
                                                fontSize: '14px',
                                                padding: '0 3px',
                                                backgroundColor: '#007bff',
                                                color: '#fff',
                                                fontWeight: '500',
                                                textTransform: 'none',
                                                background: 'black',
                                                '@media (max-width: 768px)': {
                                                    width: '100%',
                                                }
                                            }} onClick={() => handleDeleteTask(task.id)} >
                                                <i className="my-customer-table-icon bi bi-trash h7"></i>
                                            </Button>
                                        </>
                                    )
                                )}
                            </Col>
                        </Row>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;