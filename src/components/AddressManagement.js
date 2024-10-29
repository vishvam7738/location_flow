import React, { useState, useEffect } from 'react';
import "./AddressManagement.css"

const AddressManagement = ({ savedAddresses, onAddressSelect, onAddressDelete, onAddressUpdate }) => {
  const [addresses, setAddresses] = useState(savedAddresses);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setAddresses(savedAddresses);
  }, [savedAddresses]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    onAddressDelete(id);
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedAddress = prompt("Enter the updated address details:");
    if (updatedAddress) {
      onAddressUpdate(id, updatedAddress);
    }
  };

  const filteredAddresses = addresses.filter((address) =>
    address.category.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredAddresses.map((address) => (
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
        ))}
      </ul>
    </div>
  );
};

export default AddressManagement;
