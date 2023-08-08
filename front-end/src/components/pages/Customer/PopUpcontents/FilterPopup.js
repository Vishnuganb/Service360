import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../../style/Customer/Popup.css';

const FilterPopup = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('Price: Low to High');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (event) => {
    // Handle the checkbox changes here
    const { id, checked } = event.target;
    console.log(`Checkbox with ID ${id} is checked: ${checked}`);
  };

  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false} centered>
      <Modal.Header className='cuslocpopup' closeButton>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cusmodalcontent'>
        <Dropdown as={ButtonGroup} className="cusfilterbutt">
          <Button className="cusfilterdropdown">Ratings</Button>
          <Dropdown.Toggle className='cusfilterbutt' id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#">Highest To Lowest</Dropdown.Item>
            <Dropdown.Item href="#">Average</Dropdown.Item>
            <Dropdown.Item href="#">All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="btn1">Clear</Button>
        <Button variant="secondary" className="btn2">Apply All</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterPopup;
