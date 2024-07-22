import React from 'react';
import axios from 'axios';

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/api/logout');
      onLogout(); // Assuming onLogout function is passed as a prop to handle logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
