import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Container, Card, Tab, Tabs } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import person1 from '../../../../assets/images/home/Customer_1.png';
import person2 from '../../../../assets/images/home/Customer_2.png';
import person3 from '../../../../assets/images/home/Customer_3.png';
import styled from 'styled-components';
import { set } from 'lodash';


const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-start;
    `;

function AdminComplaints() {

    const userData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '123 Main Street, City',
            complaintDate: '2023-08-01',
            image: person1,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Issue with account registration process',
            description: 'I registered on July 1st, but my account status is still pending. Can you please check and update my status?'

        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '456 Oak Avenue, Town',
            complaintDate: '2023-08-02',
            image: person2,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Missing uploaded files.',
            description: 'I uploaded the required files on July 2nd, but they are not showing up in my account. Please resolve this issue.'
        },
        {
            id: 3,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '789 Maple Lane, Village',
            complaintDate: '2023-08-03',
            image: person3,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Incorrect contact number.',
            description: 'I entered my contact number as 0456123789, but it is showing up as 0456123788. Please correct this.'
        },
        {
            id: 4,
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '101 Pine Street, City',
            complaintDate: '2023-08-04',
            image: person2,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Unresolved issue with account status.',
            description: `My account status is showing as "Resolved," but I haven't received any resolution for my previous complaint.Please look into it.`
        },
        {
            id: 5,
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '222 Oak Road, Town',
            complaintDate: '2023-08-05',
            image: person3,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Email verification problem.',
            description: `I registered with my email (kumar.sangakkara@example.com) on July 5th, but I haven't received any verification email. Can you resend it?`
        },
        {
            id: 6,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '333 Maple Street, Village',
            complaintDate: '2023-08-06',
            image: person1,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: ' Multiple accounts created.',
            description: `It seems that there are two accounts with the same name (Mike Johnson). Please merge them into a single account.`
        },
        {
            id: 7,
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '444 Pine Avenue, City',
            complaintDate: '2023-08-07',
            image: person3,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Delay in resolving the issue.',
            description: `I raised a complaint on August 7th, but it's still pending. It's been too long, and I need a prompt resolution.`
        },
        {
            id: 8,
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '555 Oak Lane, Town',
            complaintDate: '2023-08-08',
            image: person1,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Incorrect address.',
            description: `I entered my address as 555 Oak Lane, Town, but it is showing up as 555 Oak Lane, City. Please correct this.`
        },
        {
            id: 9,
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '666 Maple Road, Village',
            complaintDate: '2023-08-09',
            image: person2,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Missing uploaded files.',
            description: `I uploaded the required files on August 9th, but they are not showing up in my account. Please resolve this issue.`
        },
        {
            id: 10,
            firstName: 'Johnes',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '777 Main Street, City',
            complaintDate: '2023-08-10',
            image: person1,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: ' Account login issue.',
            description: `I can't log in to my account even after using the correct credentials. Please help me regain access.`
        },
        {
            id: 11,
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '888 Oak Avenue, Town',
            complaintDate: '2023-08-11',
            image: person2,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Incorrect profile picture.',
            description: `The profile picture associated with my account is not mine (person2). Please update it with the correct one.`
        },
        {
            id: 12,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '999 Maple Lane, Village',
            complaintDate: '2023-08-12',
            image: person3,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: 'Unresponsive customer support.',
            description: `I contacted customer support regarding an issue, but I haven't received any response yet. Please improve your response time.`
        },
        {
            id: 13,
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '1010 Pine Street, City',
            complaintDate: '2023-08-13',
            image: person2,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Unauthorized access to account.`,
            description: `I suspect that someone else has accessed my account without my permission. Please investigate and take necessary action.`
        },
        {
            id: 14,
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '111 Oak Road, Town',
            complaintDate: '2023-08-14',
            image: person3,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Billing discrepancy.`,
            description: `There is a discrepancy in my billing statement for the services provided. Kindly review and correct the charges.`
        },
        {
            id: 15,
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '1212 Maple Street, Village',
            complaintDate: '2023-08-15',
            image: person1,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Lost data after resolution.`,
            description: `My previous complaint was resolved, but some of my data seems to be missing. Please restore it.`
        },
        {
            id: 16,
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '1313 Pine Avenue, City',
            complaintDate: '2023-08-16',
            image: person3,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Unable to upload files.`,
            description: `I'm unable to upload the required files for my account. The system keeps showing an error. Please fix this issue.`
        },
        {
            id: 17,
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '1414 Oak Lane, Town',
            complaintDate: '2023-08-17',
            image: person1,
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Account deactivation without notice.`,
            description: `My account was deactivated without any prior notice or reason. I need an explanation and a solution.`
        },
        {
            id: 18,
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '1515 Maple Road, Village',
            complaintDate: '2023-08-18',
            image: person2,
            status: 'Resolved',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
            complaint: `Incorrect NIC number.`,
            description: `The NIC number associated with my account (654321789V) is incorrect. Please update it to 654987321V.`
        },
    ];

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
    });

    const totalPages = Math.ceil(userData.length / data.rowsPerPage);
    const startIndex = (data.currentPage - 1) * data.rowsPerPage;
    const endIndex = startIndex + data.rowsPerPage;
    const displayedComplaints = userData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setData((prevState) => ({
            ...prevState,
            currentPage: page,
            displayedComplaints: getDisplayedComplaints(prevState.filteredComplaints[prevState.activeTab], page, prevState.rowsPerPage),
        }));
    };

    const getDisplayedComplaints = (filteredComplaints, currentPage, rowsPerPage) => {
        const startIndex = (currentPage - 1) * data.rowsPerPage;
        const endIndex = startIndex + data.rowsPerPage;
        return filteredComplaints.slice(startIndex, endIndex);
    };

    const filterComplaints = (status) => {

        const filteredComplaints = userData.filter((complaint) =>
            complaint.status === status && (
                complaint.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                complaint.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                complaint.nic.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                complaint.complaintDate.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                complaint.complaint.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                complaint.description.toLowerCase().includes(data.searchTerm.toLowerCase()) 
            )
        );

        return filteredComplaints;
    };

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    useEffect(() => {

        const filteredComplaintsByStatus = {
            Pending: filterComplaints('Pending'),
            Resolved: filterComplaints('Resolved'),
        }

        const fromDateObj = data.fromDate ? new Date(data.fromDate) : null;
        const toDateObj = data.toDate ? new Date(data.toDate) : null;

        const filteredComplaints = filteredComplaintsByStatus[data.activeTab].filter((user) => {
            const complaintDateObj = new Date(user.complaintDate);
            return (
                (!fromDateObj || complaintDateObj >= fromDateObj) &&
                (!toDateObj || complaintDateObj <= toDateObj)
            );
        });
        ;

        const totalPages = Math.ceil(filteredComplaints.length / data.rowsPerPage);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredComplaints: filteredComplaintsByStatus,
            displayedComplaints: filteredComplaints.slice(0, data.rowsPerPage),
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

        setData({...data, replyErrorMessage})

        if (!isError) {

            setData((prevState) => ({
                ...prevState,
                reply: '',
            }));

            setData({ ...data, showDetailsModal: false });
        } 

    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedUser: provider });
    };

    const handleTabChange = (tab) => {
        
        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
            currentPage: 1,
        }));
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
                                <i class="bi bi-calendar2-week"></i>
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
                                <i class="bi bi-calendar2-week"></i>
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
                                        <td>COM000{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.nic}</td>
                                        <td>{user.email}</td>
                                        <td>{user.complaint}</td>
                                        <td className='d-flex justify-content-center'>
                                            <i class="bi bi-info-circle-fill fs-3" onClick={() => handleShowDetails(user)}></i>
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
                                            style= {{resize: 'vertical', height: '100px'}}
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
                                    <Button className="btn-effect2 me-2" onClick={() => setData({ ...data, showServiceModal: false })}>
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
