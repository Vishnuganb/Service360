import React, { useState } from 'react';
import '../../../style/Customer/SearchServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTags, faSortAmountDown, faSortAmountUp, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
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
  const [sortOrder, setSortOrder] = useState('asc');

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



  const serviceProviderCards = [
    {
    id: 1,
    name: "Alex",
    service: "Sofa Cleaning",
    location: "Colombo 1, Colombo",
    review: 4,
    contactNumber: "0775869807",
    joinDate: "23 July 2020",
    profilepic: require("../../../assets/images/Customer/ServiceProvider1.png")
  },

  {
    id: 2,
    name: "Vinoth",
    service: "Painting",
    location: "Batticaloa",
    review: 3.8,
    contactNumber: "0775888756",
    joinDate: "14 December 2022",
    profilepic: require("../../../assets/images/Customer/ServiceProvider3.jpg")
  },

  {
    id: 3,  
    name: "Kumar",
    service: "Mansonry",
    location: "Batticaloa",
    review: 5,
    contactNumber: "0779988756",
    joinDate: "14 December 2022",
    profilepic: require("../../../assets/images/Customer/ServiceProvider1.jpg")
  },

  {
    id: 4,
    name: "Shakthi",
    service: "Tile Fitting",
    location: "Vavuniya",
    review: 2,
    contactNumber: "0773366587",
    joinDate: "14 December 2022",
    profilepic: require("../../../assets/images/Customer/serviceprovider5.webp")
  },

  {
    id: 5,
    name: "David",
    service: "Carpet Cleaning",
    location: "Gampaha",
    review: 5,
    contactNumber: "0778698742",
    joinDate: "11 January 2019",
    profilepic: require("../../../assets/images/Customer/Serp.jpeg")
  },
  
  ];

  const filteredSPCards = serviceProviderCards.filter(card => {
    const locationMatch = !selectedLocation || card.location === selectedLocation;
    const serviceMatch = !selectedService || card.service === selectedService;
    const ratingMatch = !sortByReview || card.review >= 4.0;
    return locationMatch && serviceMatch && ratingMatch;
  });

  const sortedSPCards = [...filteredSPCards].sort((a, b) => {
    if (sortByReview) {
      const ratingComparison = b.review - a.review;
      return sortOrder === 'asc' ? ratingComparison : -ratingComparison;
    }
    return 0;
  });

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
        {sortedSPCards.length > 0 ? (
            <div className="SPCardContainer">
              {sortedSPCards.map((spCard, index) => (
                <ViewSPCard key={index} spCard={spCard} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faExclamationCircle} className="error-icon"/>
              <p>No results Found</p>
            </div>
          )}
        </Row>
      </div>

      <Row id='bodyPageRow2'>
        <div className="paginationContainer-customer">
          <Pagination className='pagination-element-customer'>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
          </Pagination>
        </div>
      </Row>
    </div>
  );
};

export default SearchServiceProvider;
