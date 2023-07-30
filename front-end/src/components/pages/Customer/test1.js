import React, { useState } from 'react';
import '../../../style/Customer/Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import places from './placesData';

const LocationPopup = ({ isOpen, onClose, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearchChange = (event) => {
    const location = event.target.value;
    setSearchQuery(location);

    // Filter the places based on the search query
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSelectClick = () => {
    onSelectLocation(selectedLocation);
    onClose();
  };

  return (
    <div className={`location-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <div className="top">
          <h2>Search Location</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter Your Location"
        />

        <ul className="PlaceList">
          {filteredPlaces.map((place) => (
            <li
              key={place.name}
              onClick={() => handleLocationSelect(place.name)}
              className={selectedLocation === place.name ? 'selected' : ''}
            >
              {place.name}, {place.country}
            </li>
          ))}
        </ul>

       
      </div>
    </div>
  );
};

export default LocationPopup;
