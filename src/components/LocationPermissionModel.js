import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationPermissionModel.css'

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
    <div className="location-permission-model">
      <h2>Location permission is off</h2>
      <p>We need your location to find the nearest store & provide a seamless delivery experience</p>
      <button onClick={handleEnableLocationClick}>Enable Location</button>
      <button onClick={handleManualSearchClick}>Search your Location Manually</button>
    </div>
  );
};

export default LocationPermissionModel;
