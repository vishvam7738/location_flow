import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddressManagement from './components/AddressManagement';
import LocationPermissionModel from './components/LocationPermissionModel';
import MapComponent from './components/MapComponent';
import AddressForm from './components/AddressForm';
import QuickAccess from './components/QuickAccess';
import './App.css';

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

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    alert(`Location selected: ${location}`); 
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

  // Function to handle address submission
  const handleAddressSubmit = (formData) => {
    const newAddress = { 
      id: savedAddresses.length + 1, // Simple ID generation
      category: formData.category,
      details: `${formData.houseNumber}, ${formData.apartmentArea}` // Combine details for display
    };
    setSavedAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <QuickAccess />
              <LocationPermissionModel
                onEnableLocation={handleEnableLocation}
                onManualSearch={handleManualSearch}
              />
            </>
          }
        />
        <Route
          path="/map"
          element={<MapComponent onLocationSelect={handleLocationSelect} />}
        />
        <Route
          path='/address-form'
          element={<AddressForm onSubmit={handleAddressSubmit} />}
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
