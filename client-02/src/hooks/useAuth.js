import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null); // Initially no user is logged in

  // Example login function (replace with your actual login logic)
  const login = (userData) => {
    // Example: assuming userData contains user information after successful login
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    setUser(userData); // Set user in state
  };

  // Example logout function (replace with your actual logout logic)
  const logout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Clear user state
  };

  // Example check if user is authenticated (replace with your actual authentication check)
  const isAuthenticated = () => {
    const storedUser = localStorage.getItem("user");
    return !!storedUser; // Check if user data exists in localStorage
  };

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
