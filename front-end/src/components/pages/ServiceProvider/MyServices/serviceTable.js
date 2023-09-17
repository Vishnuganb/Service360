import React from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../style/ServiceProvider/MyServices.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import { useEffect } from "react";
import axios from "axios";

function ServiceTable() {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [myservicesData, setMyservicesData] = useState([]);
  
  const [serviceToEnable, setServiceToEnable] = useState(null);
  const [serviceToDisable, setServiceToDisable] = useState(null);

  const [showEnableModal, setShowEnableModal] = useState(false);
  const [showDisableModal, setShowDisableModal] = useState(false);

  const [myServicesCount, setMyServicesCount]= useState(0);

  // GETTING LOGGED IN SERVICEPROVIDER ID

  const response = sessionStorage.getItem('authenticatedUser');
  const userData = JSON.parse(response);

  useEffect(() => {
    const serverLink = 'http://localhost:8080';

    const fetchUserData = async () => {
        try {
            const response = await axios.get(serverLink + '/auth/getUserById/' + userData.userid);
            if (response.data) {
                // setUserDetail(response.data);
                console.log(userData.userid)
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();
  }, [userData.userid]);


  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewMyServices/${userData.userid}`).then((res) => {
        console.log(res.data);
        setMyservicesData(res.data);
        const numberOfRows = res.data.length;
        setMyServicesCount(numberOfRows);
    });

  }, []);

  const handleEnableService = () => {
    if (serviceToEnable) {
      axios
        .put(`http://localhost:8080/auth/enableMyService/${serviceToEnable}`)
        .then((response) => {
          setServiceToEnable(null);
          // setShowEnableModal(false);
        })
        .catch((error) => {
          console.error('Error enabling service:', error);
        });
        setShowEnableModal(false);
    }
  };

  const handleDisableService = () => {
    if (serviceToDisable) {
      axios
        .put(`http://localhost:8080/auth/disableMyService/${serviceToDisable}`)
        .then((response) => {
          setServiceToDisable(null);
          // setShowDisableModal(false);
        })
        .catch((error) => {
          console.error('Error disabling service:', error);
        });
        setShowDisableModal(false);
    }
  };
  

  const handleEditService = (event) => {
    // Implement your edit functionality here
    // You can open a modal or navigate to an edit page, for example.
  };

  return (
    <div>
      <div className='ms-lg-2 me-lg-2'>
      <div className="my-serivice-head-container">
        <Row>
          <Col className="my-serivice-head-container-col-1">
            <span
              className="my-serivice-head-container-col-1-span ms-2"
              style={{ fontWeight: "600" }}
            >
              My Services
            </span>
            <span
              className="my-serivice-head-container-col-1-no"
              style={{
                backgroundColor: "none",
                border: "2px solid black",
                color: "black",
                borderRadius: "10px",
              }}
            >
              {myServicesCount}
            </span>
          </Col>
          <Col className="my-serivice-head-container-col-2">
            <Link to="/ServiceProvider/AddNewServices">
              <Button
                className="btn-ServiceProvider-2 my-serivice-head-container-col-2-btn me-3"
                style={{
                  borderRadius: "10px",
                }}
              >
                <i className="fas fa-plus pe-2"></i>
                Add Services
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>

      {/* Table*/}
      <div className="mt-4 d-flex flex-column w-100" style={{ width: '100%' }}>
        <Container className="table-responsive">
          <Table striped bordered hover size="sm" className="custom-table">
            <thead className="text-center">
              <tr>
                <th>Service Name</th>
                <th>Service Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the displayed training sessions and render each row */}
              {myservicesData.map((service) => (
                <tr key={service.id}>
                  <td className="text-center">{service.serviceName}</td>
                  <td className="text-center">{service.serviceCategoryName}</td>
                  <td className="text-center">{service.status}</td>
                  <td className="text-center">
                    {service.status === "active" ? (
                      <>
                          <i
                            className="fas fa-times-circle fs-2 me-2"
                            onClick={() => {
                              setServiceToDisable(service.serviceProviderServicesId);
                              setShowDisableModal(true);
                            }}
                          ></i>
                          <i
                            className="fas fa-pen-square fs-2"
                            onClick={() => handleEditService(service.serviceProviderServicesId)}
                          ></i>
                      </>
                      ) : (
                      <>
                          <i
                            className="fas fa-check-circle fs-2 me-2"
                            onClick={() => {
                              setServiceToEnable(service.serviceProviderServicesId);
                              setShowEnableModal(true);
                            }}
                          ></i>
                          <i
                            className="fas fa-pen-square fs-2"
                            onClick={() => handleEditService(service.serviceProviderServicesId)}
                          ></i>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>

      {/* Modal for enabling a service */}
      <Modal show={showEnableModal} onHide={() => setShowEnableModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enable Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to enable this service?</Modal.Body>
        <Modal.Footer>
          <Button className="btn-ServiceProvider-2" onClick={() => setShowEnableModal(false)}>
            Cancel
          </Button>
          <Button className="btn-ServiceProvider-1" onClick={handleEnableService}>
            Enable
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for disabling a service */}
      <Modal show={showDisableModal} onHide={() => setShowDisableModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Disable Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to disable this service?</Modal.Body>
        <Modal.Footer>
          <Button className="btn-ServiceProvider-2" onClick={() => setShowDisableModal(false)}>
            Cancel
          </Button>
          <Button className="btn-ServiceProvider-1" onClick={handleDisableService}>
            Disable
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}


export default ServiceTable;