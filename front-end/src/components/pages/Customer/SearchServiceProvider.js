import React, { useState } from 'react';
import '../../../style/Customer/SearchServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTags, faFilter, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import LocationPopup from './PopUpcontents/LocationPopup';
import CategoryPopup from './PopUpcontents/CategoryPopup'; 
import '../../../style/Customer/ViewSPCard.css';
import Pagination from 'react-bootstrap/Pagination';
import ViewSPCard from './SocialShare/ViewSPCard';
import Row from 'react-bootstrap/esm/Row';

const SearchServiceProvider = () => {
  const [isLocationPopupOpen, setLocationPopupOpen] = useState(false);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [isCategoryPopupOpen, setCategoryPopupOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [sortByReview, setSortByReview] = useState(false);
 


  const toggleLocationPopup = () => {
    setLocationPopupOpen(!isLocationPopupOpen);
  };

  const handleSearchLocation = (location) => {
    setSearchLocation(location);
  };

  const handleSearchService = (service) => {
    setSearchLocation(service);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);

  };

  const handleSelectService = (service) => {
    setSelectedService(service);

  };


  const toggleFilterPopup = () => {
    setFilterPopupOpen(!isFilterPopupOpen);
  };

  const toggleCategoryPopup = () => {
    setCategoryPopupOpen(!isCategoryPopupOpen);
  };

  const handleSortToggle = () => {
    setSortAscending(!sortAscending);
  };

  const handleSortByReviewToggle = () => {
    setSortByReview(!sortByReview);
  };

  return (
    <div className="content">
      <div className="selectionpanel">
        <button className="custom-button" onClick={toggleCategoryPopup}>
          <div className="icon">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <div className="text">{selectedService || 'Services'}</div>
        </button>

        {isCategoryPopupOpen && (
          <CategoryPopup
            isOpen={isCategoryPopupOpen}
            onClose={toggleCategoryPopup}
            onSearchService={handleSearchService}
            onSelectService={handleSelectService}
          />
        )}

        <button className="custom-button" onClick={toggleLocationPopup}>
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="text">{selectedLocation || 'Location'}</div>
        </button>

        {isLocationPopupOpen && (
          <LocationPopup
            isOpen={isLocationPopupOpen}
            onClose={toggleLocationPopup}
            onSearchLocation={handleSearchLocation}
            onSelectLocation={handleSelectLocation}
          />
        )}

        <button className="custom-button2" onClick={handleSortByReviewToggle}>
          <div className="icon">
            Sort by Review &nbsp; &nbsp; {sortByReview ? <FontAwesomeIcon icon={faSortAmountUp} /> : <FontAwesomeIcon icon={faSortAmountDown} />}
          </div>
        </button>

      </div>

      <div className="bodyPageContainer-SP">
        <Row id='bodyPageRow1'>
          <div className="SPCardContainer" >
            <ViewSPCard />
            <ViewSPCard />
            <ViewSPCard />
            <ViewSPCard />
          </div>
        </Row>
        <Row id='bodyPageRow2'>
          <div className="paginationContainer-SP" >
            <Pagination className='pagination-element'>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default SearchServiceProvider;

