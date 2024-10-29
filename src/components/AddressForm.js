import React, { useState } from 'react';
import './AddressForm.css'; 

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    houseNumber: '',
    apartmentArea: '',
    category: 'Home', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      category,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Ensure this function is called correctly
    setFormData({ houseNumber: '', apartmentArea: '', category: 'Home' }); // Reset form after submission
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <h3>Delivery Address</h3>
      <div className="form-group">
        <label>House / Flat / Block No.</label>
        <input
          type="text"
          name="houseNumber"
          value={formData.houseNumber}
          onChange={handleInputChange}
          placeholder="Enter your house or flat number"
          required
        />
      </div>

      <div className="form-group">
        <label>Apartment / Road / Area</label>
        <input
          type="text"
          name="apartmentArea"
          value={formData.apartmentArea}
          onChange={handleInputChange}
          placeholder="Enter your apartment or area"
          required
        />
      </div>

      <div className="category-select">
        <label>Save As:</label>
        <div className="categories">
          <button
            type="button"
            className={formData.category === 'Home' ? 'selected' : ''}
            onClick={() => handleCategorySelect('Home')}
          >
            🏠 Home
          </button>
          <button
            type="button"
            className={formData.category === 'Office' ? 'selected' : ''}
            onClick={() => handleCategorySelect('Office')}
          >
            🏢 Office
          </button>
          <button
            type="button"
            className={formData.category === 'Friends & Family' ? 'selected' : ''}
            onClick={() => handleCategorySelect('Friends & Family')}
          >
            👪 Friends & Family
          </button>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
