import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../../style/Customer/SearchServiceProvider.css'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTags, faFilter } from '@fortawesome/free-solid-svg-icons';

const SearchServiceProvider = () => {
    return (
    <div class = "content">
        <div class="selectionpanel">
        <button className="custom-button">
            <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="text">Location</div>
        </button>

        <button className="custom-button">
            <div className="icon">
                <FontAwesomeIcon icon={faTags} />
            </div>
            <div className="text">Category</div>
        </button>
        <button className="custom-button">
            <div className="icon">
                <FontAwesomeIcon icon={faFilter} />
            </div>
            <div className="text">Filter</div>
        </button>
        </div>
{/* Profile Box */}
      <div class="profile-container">
        <div className="profile-box">
            <div className="profile-image">
                <img src="path_to_your_image.jpg" alt="Profile" />
            </div>
            <div className="profile-details">
                <h2> Vinoth </h2>
                <p>Vinoth KishanPlumbing | Member since June 23 2023 </p>
                <p>Dehiwala, Mount Lavinia</p>
                <p>0715844807</p>
            </div>
        </div>
      </div>
    </div> 
    );
};

export default SearchServiceProvider;

