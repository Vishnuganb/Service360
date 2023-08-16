import React from "react";
import { Modal } from "react-bootstrap";


const subscriptionHistoryModal = ({ show, onHide, subscriptionHistory }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#292D32", color: "#ffffff" }}
      >
        <Modal.Title>Subscription History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Start Date</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionHistory.map((record, index) => (
              <tr key={index}>
                <td>{record.planName}</td>
                <td>{record.amount}</td>
                <td>{record.paymentDate}</td>
                <td>{record.startDate}</td>
                <td>{record.expirationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default subscriptionHistoryModal;
