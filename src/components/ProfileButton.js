import React from 'react';

const styles = {
  button: {
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '26px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 400, // Regular font weight
    marginBottom: '10px', // Add margin for spacing
  },
  activeButton: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: '5px',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
  },
};

const ProfileButton = ({ text = 'Profile', active = false }) => {
  const buttonStyle = active
    ? { ...styles.button, ...styles.activeButton }
    : { ...styles.button, ...styles.inactiveButton };

  return (
    <div style={buttonStyle}>
      {text}
    </div>
  );
};

export default ProfileButton;
