import React from 'react';
import { SignInButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SignIn = () => {
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#000000',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8rem 2rem 2rem 2rem', // Increased top padding significantly
    minHeight: 'calc(100vh - 300px)' // Account for footer height
  };

  const logoStyle = {
    width: '120px',
    height: '120px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '2rem',
    boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4), 0 4px 16px rgba(34, 197, 94, 0.3)'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '3rem',
    textAlign: 'center'
  };

  const backLinkStyle = {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <Link 
          to="/" 
          style={backLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#22c55e'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
        >
          ← Back to Home
        </Link>
        
        <div style={logoStyle}>
          N
        </div>
        
        <h1 style={titleStyle}>Sign in to NVEM</h1>
        
        <SignInButton mode="modal">
          <button style={{
            backgroundColor: '#2d2d2d',
            color: 'white',
            border: '1px solid #404040',
            borderRadius: '24px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            outline: 'none',
            minWidth: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#404040';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2d2d2d';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign In
          </button>
        </SignInButton>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          Don't have an account?{' '}
          <Link 
            to="/sign-up" 
            style={{
              color: '#22c55e',
              textDecoration: 'none',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            Create account
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn; 