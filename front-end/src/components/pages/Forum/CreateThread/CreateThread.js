import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import backgroundImage from "../../../../assets/images/header/Background.png";

function ForumPopUp(props) {
  // State to track selected files
  const [selectedFiles, setSelectedFiles] = useState([]);
  const selectedFileCount = selectedFiles.length;

  // Handler for file input change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Handler for removing a file from the selected files list
  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  // Handler for form submission (Not implemented in this code)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#292D32" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="AskQPop">Ask Your Question</p>
        </Modal.Title>
      </Modal.Header>

      <div
        className="InnerCreateForum"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Title</Form.Label>
              <Form.Control
                id="disabledTextInput"
                required
                placeholder="Title"
              />
            </Form.Group>

            <div className="mb-3">
              <p className="mb-0">Upload Releated Pictures ( Not required )</p>
              <input type="file" className="form-control" multiple required />
              {Array.isArray(selectedFiles) && selectedFiles.length > 0 && (
                <>
                  <p>
                    {selectedFileCount} file
                    {selectedFileCount !== 1 ? "s" : ""} selected
                  </p>
                  <ul className="list-group mt-2">
                    {selectedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select required>
                <option>Electician</option>
                <option>Plumber</option>
                <option>Mechanic</option>
              </Form.Select>
            </Form.Group>

            {/* Description */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description/Specification</Form.Label>
              <Form.Control as="textarea" required rows={3} />
            </Form.Group>

            {/* Area */}

            <div className="d-flex justify-content-center">
              <button className="PostAd">Post</button>
            </div>
          </fieldset>
        </Form>
      </div>
    </Modal>
  );
}

export default ForumPopUp;