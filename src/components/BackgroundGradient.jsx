import React from 'react';

const BackgroundGradient = () => {
  const gradientStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #0c0c0c 30%, #090909 60%, #060606 80%, #000000 100%)',
  };

  return <div style={gradientStyle}></div>;
};

export default BackgroundGradient; 