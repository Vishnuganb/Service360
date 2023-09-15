import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import places from './placesData';
import '../../../../style/Customer/Popup.css';

const LocationPopup = ({ isOpen, onClose, onSearchLocation, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    if (selectedLocation) {
      setSearchQuery(selectedLocation);
    }
  }, [selectedLocation]);

  const handleSearchChange = (event) => {
    const location = event.target.value;
    setSearchQuery(location);
    onSearchLocation(location);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location); // Set the selected location
    if (typeof onSelectLocation === 'function') {
      onSelectLocation(location);
    }
    onClose();
  };

  const filteredPlaces = places.filter(
    (place) => place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal className show={isOpen} onHide={onClose} backdrop="static" keyboard={false} centered>
      <Modal.Header className='cuslocpopup' closeButton>
        <Modal.Title>Search Location</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cusmodalcontent'>
        <div className='scrollable-content'>
          <input
            className='cuslocsearch'
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Enter Your Location'
          />
          <ul className='PlaceList'>
            {filteredPlaces.map((place) => (
              <li
                key={place.name}
                onClick={() => handleLocationSelect(place.name)}
                className={selectedLocation === place.name ? 'selected' : ''}
              >
                {place.name}
              </li>
            ))}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LocationPopup;