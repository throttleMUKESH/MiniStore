import React, { useState } from 'react';
import { useAuth } from '../components/auth/authProvider.js';
import { Link, useHistory } from 'react-router-dom';

const SignupPage = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
};

export default SignupPage;
