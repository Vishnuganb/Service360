import React from 'react'
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../../../style/ServiceProvider/MyServices.css';

export default function serviceTable() {
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
              <td>Electrician</td>
              <td>Technician</td>
              <td>Active</td>
              <td>
                <Button variant="primary" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-pen"></i>
                </Button>
                <Button variant="danger" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>Plumbing</td>
              <td>Technician</td>
              <td>Active</td>
              <td>
                <Button variant="primary" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-pen"></i>
                </Button>
                <Button variant="danger" className="my-service-table-btn">
                  <i class="my-service-table-icon bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>AC Repair</td>
              <td>Technician</td>
              <td>Pending</td>
              <td>
                <Button variant="primary" className="my-service-table-btn">
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
    </>
  );
}
