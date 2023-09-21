import React, { useState } from 'react';
import '../../../style/Customer/Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


const FilterPopup = ({ isOpen, onClose }) => {
  const [searchQuery,] = useState('');
  const [selectedfilter,] = useState('');

  const [selectedOption, setSelectedOption] = useState('Price: Low to High');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (event) => {
    // Handle the checkbox changes here
    const { id, checked } = event.target;
    console.log(`Checkbox with ID ${id} is checked: ${checked}`);
  };

  return (
    <div className={`Filter-popup ${isOpen ? 'open' : ''}`}>
      <div className='popup-content'>
        <div className='top'>
          <h2> Filter </h2>
          <button className='close-button' onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <Dropdown as={ButtonGroup}>
          <Button variant="success" className="custom-sort-button"> Sort By</Button>
          <Dropdown.Toggle split variant="link" className="custom-sort-button" />

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => handleOptionChange('Price: Low to High')}
              active={selectedOption === 'Price: Low to High'}
              className={`custom-dropdown-item ${selectedOption === 'Price: Low to High' ? 'active' : ''}`}
            >
              Price: Low to High
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-2"
              onClick={() => handleOptionChange('Price: High to Low')}
              active={selectedOption === 'Price: High to Low'}
              className={`custom-dropdown-item ${selectedOption === 'Price: High to Low' ? 'active' : ''}`}
            >
              Price: High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div class name="filter">
          <span class="FilterBy">Filter by:</span>
          <Form>
            {[
              { id: 'default-checkbox-urgent', label: 'Urgent' },
              { id: 'default-checkbox-featured', label: 'Featured' },
            ].map((checkbox) => (
              <div key={`default-${checkbox.id}`} className="mb-3">
                <Form.Check
                  type="checkbox"
                  id={checkbox.id}
                  label={checkbox.label}
                  onChange={handleChange}
                />
              </div>
            ))}
          </Form>
        </div>
        <ButtonGroup aria-label="Basic example"  className="button-group-bottom">
      <Button variant="secondary" className="btn">Clear</Button>
      <Button variant="secondary" className="btn">Apply All</Button>
    </ButtonGroup>
      </div>
   
    </div>
  );
};

export default FilterPopup;
