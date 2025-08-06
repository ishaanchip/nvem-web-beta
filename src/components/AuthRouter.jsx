import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import Home from './Home/Home.jsx';

const AuthRouter = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    // Only navigate once when Clerk is fully loaded and we haven't navigated yet
    if (isLoaded && isSignedIn && !hasNavigated) {
      setHasNavigated(true);
      navigate('/my-courses');
    }
  }, [isLoaded, isSignedIn, navigate, hasNavigated]);

  // Show loading state while Clerk is determining auth status
  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Loading...
      </div>
    );
  }

  // If user is not signed in, show Home (landing page)
  // If signed in, they'll be redirected to /my-courses (but show loading during transition)
  if (isSignedIn && !hasNavigated) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Loading...
      </div>
    );
  }
  
  return isSignedIn ? null : <Home />;
};

export default AuthRouter; 