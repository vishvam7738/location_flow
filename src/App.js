import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AddressManagement from './components/AddressManagement';
import LocationPermissionModel from './components/LocationPermissionModel';
import MapComponent from './components/MapComponent';

const App = () => {
  const [savedAddresses, setSavedAddresses] = useState([
    { id: 1, category: "Home", details: "123 Main St, City, Country" },
    { id: 2, category: "Office", details: "456 Corporate Ave, City, Country" },
    { id: 3, category: "Friends & Family", details: "789 Friends St, City, Country" },
  ]);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleEnableLocation = () => {
    setLocationPermissionGranted(true);
  };

  const handleManualSearch = () => {
    setLocationPermissionGranted(true);
  };

  const handleAddressSelect = (address) => {
    alert(`Selected address for delivery: ${address.details}`);
  };

  const handleAddressDelete = (id) => {
    setSavedAddresses(savedAddresses.filter((address) => address.id !== id));
  };

  const handleAddressUpdate = (id, updatedDetails) => {
    setSavedAddresses(savedAddresses.map((address) =>
      address.id === id ? { ...address, details: updatedDetails } : address
    ));
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LocationPermissionModel 
              onEnableLocation={handleEnableLocation}
              onManualSearch={handleManualSearch}
            />
          }
        />
        <Route
          path="/map"
          element={
            <MapComponent onLocationSelect={handleLocationSelect} />
          }
        />
        <Route
          path="/address-management"
          element={
            <AddressManagement
              savedAddresses={savedAddresses}
              onAddressSelect={handleAddressSelect}
              onAddressDelete={handleAddressDelete}
              onAddressUpdate={handleAddressUpdate}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
