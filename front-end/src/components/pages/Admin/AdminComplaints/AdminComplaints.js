import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Container, Card, Tab, Tabs } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import styled from 'styled-components';
import { set } from 'lodash';


const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-start;
    `;

const serverLink = 'http://localhost:8080';

function AdminComplaints() {

    const [data, setData] = useState({
        currentPage: 1,
        totalPages: 1,
        rowsPerPage: 8,
        searchTerm: '',
        activeTab: 'Pending',
        filteredComplaints: [],
        selectedComplaints: [],
        displayedComplaints: [],
        showDetailsModal: false,
        selectedUser: null,
        enable: true,
        fromDate: null,
        toDate: null,
        reply: '',
        replyErrorMessage: '',
        complaintsData: [],
        pendingComplaints: [],
        resolvedComplaints: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(serverLink + '/auth/getAllComplaints');
                const detail = response.data;

                setData({
                    ...data,
                    complaintsData: detail,
                    pendingComplaints: detail.filter((complaint) => complaint.status === 'Pending'),
                    resolvedComplaints: detail.filter((complaint) => complaint.status === 'Resolved'),
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handlePageChange = (page) => {
        const startIndex = (page - 1) * data.cardsPerPage;
        const endIndex = startIndex + data.cardsPerPage;
        const filteredData = data.filteredSessions[data.activeTab];
        const displayedComplaints = filteredData.slice(startIndex, endIndex);

        setData({
            ...data,
            currentPage: page,
            displayedComplaints,
        });
    };

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    const handleTabChange = (tab) => {

        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
            currentPage: 1,
            displayedComplaints: getDisplayedComplaints(tab),
        }));
    };

    const getDisplayedComplaints = (tab) => {
        let filteredComplaints;

        switch (tab) {
            case 'Pending':
                filteredComplaints = data.pendingComplaints || [];
                break;
            case 'Resolved':
                filteredComplaints = data.resolvedComplaints || [];
                break;
            default:
                filteredComplaints = data.complaintsData;
        }

        if (data.fromDate !== null && data.toDate !== null) {
            filteredComplaints = filteredComplaints.filter((complaint) => {
                const complaintDate = new Date(complaint.complaintDate);
                return complaintDate >= data.fromDate && complaintDate <= data.toDate;
            });
        }

        if(data.searchTerm !== '') {
            filteredComplaints = filteredComplaints.filter((user) => {
                return (
                    user.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                    user.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                    user.nic.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                    user.complaint.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                    user.description.toLowerCase().includes(data.searchTerm.toLowerCase())
                );
            });
        }

        return filteredComplaints.slice(0, data.rowsPerPage);
    };

    useEffect(() => {

        const totalPages = Math.ceil(getDisplayedComplaints(data.activeTab).length / data.rowsPerPage);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            displayedComplaints: getDisplayedComplaints(data.activeTab),
            currentPage: 1,
        }));
    }, [data.searchTerm, data.activeTab, data.selectedComplaints, data.fromDate, data.toDate]);


    const handleReplyChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            reply: value,
        }));
    };

    const handleSubmitReply = () => {
        let isError = false;
        let replyErrorMessage = '';

        if (data.reply === '') {
            isError = true;
            replyErrorMessage = 'Please enter a reply.';
        }

        setData({ ...data, replyErrorMessage })

        if (!isError) {

            setData((prevState) => ({
                ...prevState,
                reply: '',
            }));

            setData({ ...data, showDetailsModal: false });
        }

    };

    const handleShowDetails = (user) => {
        setData({ ...data, showDetailsModal: true, selectedUser: user });
    };

    return (

        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="Pending" title="Pending" />
                <Tab eventKey="Resolved" title="Resolved" />
            </Tabs>

            <section id="service-page" className="block serviceProvider py-3" style={{ backgroundImage: `url(${BgImage})` }} >

                <h2 className="ms-5 fw-bold align-self-start">Complaints</h2>

                <div className="d-flex justify-content-center w-100">

                    <div className='col-xs-3 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 me-0 date-picker-container'>
                        <div className="input-group m-0">
                            <DatePicker
                                selected={data.fromDate}
                                onChange={date => setData((prevState) => ({ ...prevState, fromDate: date }))}
                                className="form-control date-picker-input"
                                placeholderText="From Date"
                                dateFormat="yyyy-MM-dd"
                                isClearable
                            />
                            <span className="input-group-text">
                                <i className="bi bi-calendar2-week"></i>
                            </span>
                        </div>
                    </div>
                    <div className='me-xs-2 col-xs-2 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 date-picker-container'>
                        <div className="input-group">
                            <DatePicker
                                selected={data.toDate}
                                onChange={date => setData((prevState) => ({ ...prevState, toDate: date }))}
                                className="form-control date-picker-input"
                                placeholderText="To Date"
                                dateFormat="yyyy-MM-dd"
                                isClearable
                            />
                            <span className="input-group-text">
                                <i className="bi bi-calendar2-week"></i>
                            </span>
                        </div>
                    </div>

                    <div className='col-xs-2 col-sm-3 col-md-2 col-lg-3 col-xl-2 m-3 me-xs-5'>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={data.searchTerm}
                                onChange={handleSearchChange}
                            />
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>

                </div>

                <div className="mt-4 d-flex flex-column w-100" style={{ width: '100%' }}>
                    <Container className="table-responsive">
                        <Table striped bordered hover size="sm" className="custom-table" style={{ backgroundImage: `url(${BgImage})` }}>
                            <thead className='text-center'>
                                <tr>
                                    <th>Complaint ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>NIC</th>
                                    <th>Email</th>
                                    <th>Complaint</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.displayedComplaints && data.displayedComplaints.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.nic}</td>
                                        <td>{user.email}</td>
                                        <td>{user.complaint}</td>
                                        <td className='d-flex justify-content-center'>
                                            <i className="bi bi-info-circle-fill fs-3" onClick={() => handleShowDetails(user)}></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>


                <div className="pagination justify-content-center">
                    {Array.from({ length: data.totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-link ${data.currentPage === index + 1 ? 'active' : ''}`}
                            style={{ backgroundColor: '#292D32', color: '#fff' }}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <Modal show={data.showDetailsModal} onHide={() => setData({ ...data, showDetailsModal: false })} centered>
                    <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                        <Modal.Title>Complaint Details</Modal.Title>
                    </Modal.Header>
                    {data.selectedUser && (
                        <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mt-2 rounded">
                                        <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Complaint ID: </span> COM000{data.selectedUser.id}
                                    </div>
                                    <div className="mt-2 rounded">
                                        <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Complaint Date: </span> {data.selectedUser.complaintDate}
                                    </div>
                                    <div className="mt-2 rounded">
                                        <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Complaint: </span>
                                        <div>{data.selectedUser.complaint}</div>
                                    </div>
                                    <div className="mt-2 rounded">
                                        <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Description: </span>
                                        <div>{data.selectedUser.description}</div>
                                    </div>
                                    <div className="mt-2">
                                        <textarea value={data.reply} onChange={handleReplyChange} className="form-control" placeholder="Reply to the complaint..."
                                            rows={6}
                                            style={{ resize: 'vertical', height: '100px' }}
                                            autoFocus
                                        />
                                        {data.replyErrorMessage && <p className="text-danger p-0 m-0">{data.replyErrorMessage}</p>}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    )}
                    <StyledModalFooter>
                        <div className="container">
                            <div className="row justify-content-between">
                                <Button className="btn-effect3 d-flex justify-content-center align-items-center">
                                    More Info
                                </Button>
                                <div className="col-sm-6 d-flex justify-content-center align-items-center m-0">
                                    <Button className="btn-effect2 me-2" onClick={() => setData({ ...data, showDetailsModal: false })}>
                                        Cancel
                                    </Button>
                                    <Button className="btn-effect" onClick={handleSubmitReply}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </StyledModalFooter>
                </Modal>
            </section>
        </div>
    );
}

export default AdminComplaints;