import React from 'react';
import '../../../style/Customer/ViewProfilepage.css';
import ServiceProvideimg from '../../../assets/images/Customer/ServiceProvider1.png';

function ViewServiceProvider() {
  return (
    <div className='content'>
    <div className="profile-container">
        <div className="profile-box">
          <div className="profile-image">
            <img src={ServiceProvideimg} alt="profile-image" />
          </div>
          <div className="profile-details">
            
          {/* Profile details */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewServiceProvider