import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import places from './placesData';

import '../../../../style/Customer/Popup.css'; // Update the path to your CSS file

const LocationPopup = ({ isOpen, onClose, onSearchLocation, onSelectLocation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleSearchChange = (event) => {
        const location = event.target.value;
        onSearchLocation(location);
        setSearchQuery(location);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        onSelectLocation(location);
        setSearchQuery(location); 
        onClose();
    };

    const filteredPlaces = places.filter(
        (place) =>
            place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Modal className show={isOpen} onHide={onClose} backdrop="static" keyboard={false} centered>
            <Modal.Header className='cuslocpopup' closeButton>
                <Modal.Title >Search Location</Modal.Title>
            </Modal.Header>
            <Modal.Body className='cusmodalcontent'>
                <div className='scrollable-content'>
                    <input className='cuslocsearch'
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
