import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import toast from 'react-hot-toast'; // Import toast for notifications

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      if (response && response.data) {
        setError(null);
        onLogin(response.data); // Assuming onLogin function is passed as a prop to handle login
        toast.success('Login successful'); // Show success toast
        navigate('/home'); // Navigate to '/home' route after successful login
      } else {
        setError('Invalid response received from server');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError('No response received from server');
      } else {
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">Error: {error}</p>}
    </div>
  );
};

export default Login;
