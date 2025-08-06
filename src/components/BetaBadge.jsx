import React from 'react';
import { Link } from 'react-router-dom';

const BetaBadge = () => {
  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'transparent', // Clear background
    border: '2px solid #22c55e', // Green outline
    borderRadius: '24px',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#22c55e', // Green text
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 0 15px rgba(34, 197, 94, 0.4), 0 0 25px rgba(34, 197, 94, 0.2)', // Green glow
    margin: '0 auto',
    width: 'fit-content',
    cursor: 'pointer',
    background: 'none',
    outline: 'none'
  };

  return (
    <Link to="/courses" style={{...badgeStyle, textDecoration: 'none'}}>
        <span>Our first course is live. Get started now!</span>
        <span>→</span>
    </Link>
  );
};

export default BetaBadge; 