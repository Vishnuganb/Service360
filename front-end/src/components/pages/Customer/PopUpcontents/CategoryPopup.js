import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import services from './Servicesdata';
import '../../../../style/Customer/Popup.css';

const CategoryPopup = ({ isOpen, onClose, onSelectService }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(''); // Added this line

  const handleSearchChange = (event) => {
    const service = event.target.value;
    setSearchQuery(service);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service); // Set the selected service
    if (typeof onSelectService === 'function') {
      onSelectService(service);
    }
    onClose();
  };

  const filteredServices = services.filter(
    (service) => service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal className show={isOpen} onHide={onClose} backdrop="static" keyboard={false} centered>
      <Modal.Header className='cuslocpopup' closeButton>
        <Modal.Title>Search Service</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cusmodalcontent'>
        <div className='scrollable-content'>
          <input
            className='cuslocsearch'
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Search Service'
          />
          <ul className='PlaceList'>
            {filteredServices.map((service) => (
              <li
                key={service.name}
                onClick={() => handleServiceSelect(service.name)}
                className={selectedService === service.name ? 'selected' : ''}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryPopup;