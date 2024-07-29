import React from 'react';

const Card = ({ children, style }) => {
  const defaultStyles = {
    top: '0px',
    left: '0px',
    width: '237px', // Default width
    height: '100vh',
    backgroundColor: '#171717',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'width 0.3s, padding 0.3s', // Ensure a smooth transition
  };

  return <div style={{ ...defaultStyles, ...style }}>{children}</div>;
};

export default Card;
