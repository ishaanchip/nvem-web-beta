import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, useUser as clerkUseUser, useClerk } from "@clerk/clerk-react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = clerkUseUser();
  const location = useLocation();
  
  // Clerk authentication functionality
  const {signOut} = useClerk()  
  const handleSignOut = async () => {
    await signOut()
    localStorage.clear()
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('[data-hamburger-menu]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header
      const headerHeight = (isScrolled && !isSignedIn) ? 60 : 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Determine if we should show landing page navigation
  // Only show landing page nav on home route (/) when user is not signed in and Clerk has loaded
  const shouldShowLandingNav = isLoaded && !isSignedIn && location.pathname === '/';

  const headerStyle = {
    position: isSignedIn ? 'absolute' : 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: (isScrolled && !isSignedIn) ? '60px' : '80px',
    padding: (isScrolled && !isSignedIn) ? '0 24px' : '0 48px',
    margin: (isScrolled && !isSignedIn) ? '20px 60px 0 60px' : '0',
    maxWidth: (isScrolled && !isSignedIn) ? 'calc(100% - 120px)' : '100%',
    background: (isScrolled && !isSignedIn)
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'transparent',
    backdropFilter: (isScrolled && !isSignedIn)
      ? 'saturate(180%) blur(20px)' 
      : 'none',
    borderBottom: (isScrolled && !isSignedIn)
      ? '1px solid rgba(255, 255, 255, 0.2)' 
      : 'none',
    borderRadius: (isScrolled && !isSignedIn) ? '40px' : '0',
    boxShadow: (isScrolled && !isSignedIn)
      ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)' 
      : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    // Stabilize transitions to prevent layout shifts
    transition: isSignedIn ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    // Prevent header from changing too frequently during page load
    willChange: 'auto'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'white',
    textDecoration: 'none',
    minWidth: 'fit-content'
  };

  const logoIconStyle = {
    width: '36px',
    height: '36px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white'
  };

  const logoTextStyle = {
    opacity: (isScrolled && !isSignedIn) ? 0 : 1,
    transition: isSignedIn ? 'none' : 'opacity 0.2s ease'
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const navItemStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    outline: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0
  };

  const logoButtonStyle = {
    ...logoStyle,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none'
  };

  const authContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    minWidth: 'fit-content'
  };

  const loginButtonStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
    outline: 'none',
    display: 'flex',
    alignItems: 'center'
  };

  const signUpButtonStyle = {
    backgroundColor: isSignUpHovered ? '#16a34a' : '#22c55e',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isSignUpHovered 
      ? '0 6px 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.3)'
      : '0 4px 15px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.2)',
    transform: isSignUpHovered ? 'translateY(-1px)' : 'translateY(0)',
    whiteSpace: 'nowrap',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const hamburgerButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.9)',
    cursor: 'pointer',
    padding: '12px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    backgroundColor: 'rgba(32, 32, 32, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    minWidth: '150px',
    zIndex: 1001
  };

  const dropdownItemStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    padding: '12px 16px',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    borderRadius: '0',
    margin: '0',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const firstDropdownItemStyle = {
    ...dropdownItemStyle,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px'
  };

  const lastDropdownItemStyle = {
    ...dropdownItemStyle,
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px'
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoButtonStyle}>
        <div style={logoIconStyle}>N</div>
        <span style={logoTextStyle}>NVEM</span>
      </Link>


      <div style={authContainerStyle}>
        {/* Only show auth buttons when Clerk has loaded */}
        {isLoaded && (
          <>
              <div style={{ position: 'relative' }} data-hamburger-menu>
                <button 
                  style={hamburgerButtonStyle}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {/* Hamburger Icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                
                {isMenuOpen && (
                  <div style={dropdownStyle}>
                    <Link 
                      to="/my-courses"
                      style={{
                        ...firstDropdownItemStyle, 
                        textDecoration: 'none',
                        display: 'block',
                        backgroundColor: 'transparent'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderRadius = '12px 12px 0 0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderRadius = '12px 12px 0 0';
                      }}
                    >
                      My Courses
                    </Link>
                    <Link 
                      to="/courses"
                      style={{
                        ...dropdownItemStyle, 
                        textDecoration: 'none',
                        display: 'block',
                        backgroundColor: 'transparent'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderRadius = '0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderRadius = '0';
                      }}
                    >
                      Courses
                    </Link>
                  </div>
                )}
              </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;