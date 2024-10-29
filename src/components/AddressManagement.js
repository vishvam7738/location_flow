import React, { useState, useEffect } from 'react';
import "./AddressManagement.css";

const AddressManagement = ({ 
  savedAddresses, 
  recentSearches,       // Add recentSearches to props
  onAddressSelect, 
  onAddressDelete, 
  onAddressUpdate, 
  onSearchChange        // Add onSearchChange to props
}) => {
  const [addresses, setAddresses] = useState(savedAddresses);
  const [searchTerm, setSearchTerm] = useState("");

  // Update addresses when savedAddresses prop changes
  useEffect(() => {
    setAddresses(savedAddresses);
  }, [savedAddresses]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term); // Update recent searches
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      onAddressDelete(id);
    }
  };

  const handleUpdate = (id) => {
    const updatedAddress = prompt("Enter the updated address details:");
    if (updatedAddress) {
      onAddressUpdate(id, updatedAddress);
      // Update the local state to reflect the change immediately
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) =>
          address.id === id ? { ...address, details: updatedAddress } : address
        )
      );
    }
  };

  // Filter addresses based on category and details
  const filteredAddresses = addresses.filter((address) =>
    address.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    address.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="address-management">
      <h2>Manage Your Addresses</h2>
      <input
        type="text"
        placeholder="Search addresses..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul className="address-list">
        {filteredAddresses.length > 0 ? (
          filteredAddresses.map((address) => (
            <li key={address.id} className="address-item">
              <div className="address-info">
                <h4>{address.category}</h4>
                <p>{address.details}</p>
              </div>
              <div className="address-actions">
                <button onClick={() => onAddressSelect(address)}>Select</button>
                <button onClick={() => handleUpdate(address.id)}>Update</button>
                <button onClick={() => handleDelete(address.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <li>No addresses found</li>
        )}
      </ul>

      <h3>Recent Searches</h3>
      <ul className="recent-searches-list">
        {recentSearches.length > 0 ? (
          recentSearches.map((search, index) => (
            <li key={index} className="recent-search-item">{search}</li>
          ))
        ) : (
          <li>No recent searches</li>
        )}
      </ul>
    </div>
  );
};

export default AddressManagement;
