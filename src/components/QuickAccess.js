import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickAccess.css';

const QuickAccess = () => {
  const navigate = useNavigate();

  const handleAddressFormClick = () => {
    navigate('/address-form');
  };

  const handleAddressManagementClick = () => {
    navigate('/address-management');
  };

  return (
    <div className="quick-access">
      <h3>⚡Quick Access⚡</h3>
      <button onClick={handleAddressFormClick}>Go to Address Form</button>
      <button onClick={handleAddressManagementClick}>Go to Address Management</button>
    </div>
  );
};

export default QuickAccess;
