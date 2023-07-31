import React, { useState } from 'react';
import '../../../style/Customer/SearchServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTags, faFilter } from '@fortawesome/free-solid-svg-icons';
import ServiceProvideimg from '../../../assets/images/Customer/ServiceProvider1.png';
import LocationPopup from './test1';
import FilterPopup from './FilterPopup';

const SearchServiceProvider = () => {
  const [isLocationPopupOpen, setLocationPopupOpen] = useState(false);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');

  const toggleLocationPopup = () => {
    setLocationPopupOpen(!isLocationPopupOpen);
  };

  const handleSearchLocation = (location) => {
    setSearchLocation(location);
  };

  const toggleFilterPopup = () => {
    setFilterPopupOpen(!isFilterPopupOpen);
  };

  /*const toggleContentPopup = () => {
    setFilterPopupOpen(!isFilterPopupOpen);
  };*/

  return (
    <div className="content">
      <div className="selectionpanel">
        <button className="custom-button" onClick={toggleLocationPopup}>
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="text">Location</div>
        </button>

        {isLocationPopupOpen && (
          <LocationPopup
            isOpen={isLocationPopupOpen}
            onClose={toggleLocationPopup}
            onSearchLocation={handleSearchLocation}
          />
        )}

        <button className="custom-button">
          <div className="icon">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <div className="text">Category</div>
        </button>

        <button className="custom-button" onClick={toggleFilterPopup}>
          <div className="icon">
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className="text">Filter</div>
        </button>

        {isFilterPopupOpen && (
          <FilterPopup
            isOpen={isFilterPopupOpen}
            onClose={toggleFilterPopup}
            // Add any additional props you may need to pass to the FilterPopup component
          />
        )}
      </div>
      {/* Profile Box */}
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-image">
            <img src={ServiceProvideimg} alt="profile-image" />
          </div>
          <div className="profile-details">
            <div className="info">
              <p className="name">Alex</p>
              <span className="cate">Plumbing |</span>
              <span className="date">Member since June 23, 2023</span>
              <p className="location">Dehiwala, Mount Lavinia</p>
              <p className="phone_no">0705898344</p>
            </div>
          {/* Profile details */}
          </div>
          <div className="button">
            <button className="bottombutton1">View Profile</button>
            <button className="bottombutton2">Share</button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default SearchServiceProvider;
