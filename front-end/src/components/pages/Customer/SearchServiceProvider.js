import React, { useState } from 'react';
import '../../../style/Customer/SearchServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTags, faFilter } from '@fortawesome/free-solid-svg-icons';
import ServiceProvideimg from '../../../assets/images/Customer/ServiceProvider1.png';
import LocationPopup from './PopUpcontents/LocationPopup';
import FilterPopup from './PopUpcontents/FilterPopup';
import CategoryPopup from './PopUpcontents/CategoryPopup';
import { Link } from 'react-router-dom';
import ViewServiceProvider from './ViewServiceProvider';

const SearchServiceProvider = () => {
  const [isLocationPopupOpen, setLocationPopupOpen] = useState(false);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [isCategoryPopupOpen, setCategoryPopupOpen] = useState(false);
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

  const toggleCategoryPopup = () => {
    setCategoryPopupOpen(!isCategoryPopupOpen);
  };

  return (
    <div className="content">
      <div className="selectionpanel">

        <button className="custom-button" onClick={toggleCategoryPopup}>
          <div className="icon">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <div className="text">Services</div>
        </button>

        {isCategoryPopupOpen && (
          <CategoryPopup
            isOpen={isCategoryPopupOpen}
            onClose={toggleCategoryPopup}
          />
        )}

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
          />
        )}
      </div>
      <div className="profile-box">
        <div className="profile-image d-flex">
          <img
            src={ServiceProvideimg}
            alt="profile-image"
            style={{
              height: 'auto',
              maxWidth: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 2% 0 4%',
            }}
          />
        </div>
        <div className="profile-details">
          <div className="info">
            <p className="name">Alex</p>
            <span className="cate">Plumbing |</span>
            <span className="date">&nbsp; Member since June 23, 2023</span>
            <p className="location">Dehiwala, Mount Lavinia</p>
            <p className="phone_no">0705898344</p>
          </div>
        </div>
        <div className="button">
          <button className="bottombutton1">
            <Link to={"/customer/ViewServiceProvider"}
              style={{
                color: 'white'
              }}
            >View Profile</Link>
          </button>
          <button className="bottombutton2">Share</button>
        </div>
      </div>


      <div className="profile-box">
        <div className="profile-image">
          <div className="profile-image d-flex">
            <img
              src={ServiceProvideimg}
              alt="profile-image"
              style={{
                height: 'auto',
                maxWidth: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 2% 0 4%',
              }}
            />
          </div>
        </div>
        <div className="profile-details">
          <div className="info">
            <p className="name">Vinoth</p>
            <span className="cate">Carpenter |</span>
            <span className="date">&nbsp; Member since March 2020</span>
            <p className="location">Colombo 4</p>
            <p className="phone_no">0775866987</p>
          </div>
        </div>
        <div className="button">
          <button className="bottombutton1">
            <Link to={"/customer/ViewServiceProvider"}
              style={{
                color: 'white'
              }}
            >View Profile</Link>
          </button>
          <button className="bottombutton2">Share</button>
        </div>
      </div>
    </div>




  );
};

export default SearchServiceProvider;

