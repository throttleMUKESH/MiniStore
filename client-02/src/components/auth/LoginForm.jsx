import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mutation = useMutation((credentials) => {
    return axios.post('http://localhost:6000/api/login', credentials);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: (data) => {
        console.log('User logged in successfully:', data);
        // Optionally, you can redirect or show a success message here
      },
      onError: (error) => {
        console.error('Error logging in:', error);
        // Handle error state or show an error message
      },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {mutation.isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {mutation.isError && <p className="mt-2 text-red-500">{mutation.error.message}</p>}
    </div>
  );
};

export default LoginForm;
