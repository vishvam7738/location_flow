import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationPermissionModel.css';

const LocationPermissionModel = ({ onEnableLocation, onManualSearch }) => {
  const navigate = useNavigate();

  const handleEnableLocationClick = () => {
    onEnableLocation();
    navigate('/map');
  };

  const handleManualSearchClick = () => {
    onManualSearch();
    navigate('/map');
  };

  return (
    <div className="permission-background"> {/* Apply the new class here */}
      <div className="location-permission-model">
        <h2>Location permission is off</h2>
        <p>We need your location to find the nearest store & provide a seamless delivery experience</p>
        <button className="enable-button" onClick={handleEnableLocationClick}>
          Enable Location
        </button>
        <button className="manual-search-button" onClick={handleManualSearchClick}>
          Search your Location Manually
        </button>
      </div>
      {/* <div className="quick-access">
        <h3>Quick Access</h3>
        <button onClick={() => navigate('/address-form')}>Go to Address Form</button>
        <button onClick={() => navigate('/address-management')}>Manage Addresses</button>
      </div> */}
    </div>
  );
};

export default LocationPermissionModel;
