import React from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../../../style/ServiceProvider/MyServices.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ServiceTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my-service-table-container">
        <Table className="my-service-table" striped bordered hover>
          <thead>
            <tr>
              <th className="my-service-table-th-1">Service Name</th>
              <th className="my-service-table-th-1">Service Category</th>
              <th className="my-service-table-th-1">Status</th>
              <th className="my-service-table-th-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plumber</td>
              <td>b</td>
              <td>c</td>
              <td>
                <Button variant="primary" className="my-service-table-btn" onClick={handleShow}>
                  <i class="my-service-table-icon bi bi-pen"></i>
                </Button>
                <Button variant="danger" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>
                <Button variant="primary" className="my-service-table-btn" onClick={handleShow}>
                  <i class="my-service-table-icon bi bi-pen"></i>
                </Button>
                <Button variant="danger" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>
                <Button variant="primary" className="my-service-table-btn" onClick={handleShow}>
                  <i class="my-service-table-icon bi bi-pen"></i>
                </Button>
                <Button variant="danger" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="Plumber" autoFocus disabled/>

              <Form.Label>Working Area</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

              <Form.Label>Description</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

              <Form.Label>Qualifications</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

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
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

              <Form.Label>Qualification Certificate</Form.Label>
              <Form.Control type="file" placeholder="" autoFocus/>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn-ServiceProvider-2' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-ServiceProvider-1' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ServiceTable;