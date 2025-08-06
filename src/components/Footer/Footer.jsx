import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Determine if this is an auth page for more compact styling
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerStyle = {
    padding: isAuthPage ? '4rem 2rem 3rem 2rem' : '8rem 2rem 6rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    marginBottom: '-2rem',
    marginTop: isAuthPage ? '4rem' : '6rem' // Increased top margin for auth pages
  };

  return (
    <footer style={footerStyle}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isAuthPage ? '2rem' : '4rem',
        marginBottom: isAuthPage ? '2rem' : '4rem'
      }}>
        {/* Company Info */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            marginBottom: '1.5rem' 
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              N
            </div>
            <span style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'white'
            }}>
              NVEM
            </span>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            A 501(c)(3) non-profit organization dedicated to making AI education accessible and practical for students worldwide.
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '1rem'
          }}>
            © 2025 NVEM INC. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{
            color: '#22c55e',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Contact
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              margin: 0
            }}>
              Email: nvemservice@gmail.com
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{
            color: '#22c55e',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Our Mission
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            To provide AI education through hands-on learning experiences that prepare students for the future of technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 