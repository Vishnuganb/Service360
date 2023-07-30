import React, { useState } from 'react';
import '../../../style/Customer/Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import places from './placesData';

const LocationPopup = ({ isOpen, onClose, onSearchLocation, onSelectLocation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleSearchChange = (event) =>{
        const location = event.target.value;
        onSearchLocation(location);
        setSearchQuery(location);
        setSelectedLocation('');
    };

    const handleLocationSelect = (location) =>{
        setSelectedLocation(location);
        onSelectLocation(location);
        onClose();
    }

    const filteredPlaces = places.filter(
        (place) => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase())

    );
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
            
            <input 
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
    </div>
  );
};

export default LocationPopup;
