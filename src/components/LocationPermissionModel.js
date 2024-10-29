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
    <div className="permission-background">
      <div className="location-permission-model">
        <h2>Location permission is off</h2>
        <p>We need your location to find the nearest store & provide a seamless delivery experience</p>
        <button className="enable-button" onClick={handleEnableLocationClick}>
          Enable Location
        </button>
        <button className="manual-search-button" onClick={handleManualSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            style={{ marginRight: '8px' }}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442-.344a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
          </svg>
          Search your Location Manually
        </button>

      </div>
    </div>
  );
};

export default LocationPermissionModel;
