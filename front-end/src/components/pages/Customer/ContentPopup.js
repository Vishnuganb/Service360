import React, { useState } from 'react';
import '../../../style/Customer/Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LocationPopup = ({ isOpen, onClose }) => {
    const [searchQuery,] = useState('');
    const [selectedLocation,] = useState('');



  // Implement your popup content here

  return (
    <div className={`location-popup ${isOpen ? 'open' : ''}`}>
        <div className='popup-content'>
            <div className='top'>
            <h2> Search Location </h2>
            <button className='close-button' onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            </div>
        
          
           
        </div>
    </div>
  );
};

export default LocationPopup;


