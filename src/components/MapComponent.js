import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

const MapComponent = ({ onLocationSelect }) => {
  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedLocation, setSelectedLocation] = useState({ lat: 19.076, lng: 72.8777 });

  const handleDragEnd = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedLocation(newLocation);
    onLocationSelect(newLocation);
  };

  const handleContinue = () => {
    navigate('/address-management');
  };

  return (
    isLoaded && (
      <div style={{ position: "relative" }}>
        <button onClick={handleContinue} style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
          Continue to Address Management
        </button>
        <GoogleMap
          center={selectedLocation}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '400px' }}
        >
          <Marker
            position={selectedLocation}
            draggable
            onDragEnd={handleDragEnd}
          />
        </GoogleMap>
      </div>
    )
  );
};

export default MapComponent;
