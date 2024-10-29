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

  const handleMapClick = (event) => {
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
        <button onClick={handleContinue} style={{
          position: "absolute",
          top: 10,
          left: 10,
          padding: "12px 20px",
          fontSize: "1em",
          color: "#ffffff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 123, 255, 0.2)",
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: 1
        }}>
          Continue to Address Management
        </button>
        <GoogleMap
          center={selectedLocation}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '400px' }}
          onClick={handleMapClick}
        >
          <Marker
            position={selectedLocation}
            draggable={true}
            onDragEnd={handleDragEnd}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        </GoogleMap>
      </div>
    )
  );
};

export default MapComponent;
