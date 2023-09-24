import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import "../../../style/advertiser/AdIndex.css";

const Notification = ({ show, onHide }) => {
  const response = sessionStorage.getItem("authenticatedUser");
  const userData = JSON.parse(response);
  const [notifications, setNotification] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/auth/notification/${userData.userid}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setNotification(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {notifications.map((noti, index) => (
          <div className="notification-container" key={index}>
            <div className="noti-time">
              <p className="text-muted text-right">{noti.createdAt}</p>
            </div>

            <div className="px-3 notification-header">
              <p className="notification-title">
                <b>{noti.title}</b>
              </p>
              <p className="notification-message">{noti.message}</p>
            </div>

            {noti.button1 && (
              <div className="notification-button">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    window.location.href = noti.button1Link;
                  }}
                >
                  {noti.button1}
                </button>
              </div>
            )}
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default Notification;
