import React from 'react';
import { Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const ProtectedRoute = ({ component: Component }) => {
  return (
    <>
      <SignedIn>
        <Component />
      </SignedIn>
      <SignedOut>
        <Navigate to="/login" />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
