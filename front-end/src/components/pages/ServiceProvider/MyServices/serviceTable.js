import React from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../../../style/ServiceProvider/MyServices.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';

function ServiceTable() {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    setSelectedRow(rowData);
    setShow(true); // Show the modal
  };


  //training session objects with properties
  const myservicesData = [
    {
      id: 1,
      serviceName: 'Masonry',
      serviceCategory: 'Construction',
      date: '2023-08-20',
    },
    {
      id: 2,
      serviceName: 'Iron Works',
      serviceCategory: 'Construction',
      date: '2023-07-15',
    },
    {
      id: 3,
      serviceName: 'Glass & Aluminum',
      serviceCategory: 'Construction',
      date: '2023-05-08',
    },
    {
      id: 4,
      serviceName: 'Tiles Fitting',
      serviceCategory: 'Construction',
      date: '2023-03-14',
    },
  ];

  return (
    <div>
      {/* Table*/}
      <div className="mt-4 d-flex flex-column w-100" style={{ width: '100%' }}>
        <Container className="table-responsive">
          <Table striped bordered hover size="sm" className="custom-table">
            <thead className="text-center">
              <tr>
                <th>Service Name</th>
                <th>Service Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the displayed training sessions and render each row */}
              {myservicesData.map((service) => (
                <tr key={service.id}>
                  <td>{service.serviceName}</td>
                  <td>{service.serviceCategory}</td>
                  <td>{service.date}</td>
                  <td className="d-flex justify-content-center">
                    <i className="fas fa-pen-square fs-2" onClick={handleShow}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus disabled />

              <Form.Label>Working Area</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus />

              <Form.Label>Description</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus />

              <Form.Label>Qualifications</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus />

              <Form.Label>Working Days</Form.Label>
              <div className='mb-2'>
                <Form.Check className='mb-1' type="checkbox" id="monday" label="Monday" />
                <Form.Check className='mb-1' type="checkbox" id="tuesday" label="Tuesday" />
                <Form.Check className='mb-1' type="checkbox" id="wednesday" label="Wednesday" />
                <Form.Check className='mb-1' type="checkbox" id="thursday" label="Thursday" />
                <Form.Check className='mb-1' type="checkbox" id="friday" label="Friday" />
                <Form.Check className='mb-1' type="checkbox" id="saturday" label="Saturday" />
                <Form.Check className='mb-1' type="checkbox" id="sunday" label="Sunday" />
              </div>


              <Form.Label>Working Hours</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus />

              <Form.Label>Qualification Certificate</Form.Label>
              <Form.Control type="file" placeholder="" autoFocus />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn-ServiceProvider-1 me-auto' onClick={handleClose}>
            Remove Service
          </Button>
          <Button className='btn-ServiceProvider-2' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-ServiceProvider-1' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default ServiceTable;