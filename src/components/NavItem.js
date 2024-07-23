import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#ffffff',
  },
  icon: {
    marginRight: '10px',
    width: '20px', // Adjust size as needed
    height: '24px',
  },
  text: {
    fontSize: '15px',
    fontFamily: 'sans-serif',
    fontWeight: 400, // Change this to 400 for regular weight
  },
};

const NavItem = ({ icon, text }) => {
  return (
    <div style={styles.container}>
      {icon && <img src={icon} alt="" style={styles.icon} />}
      <span style={styles.text}>{text}</span>
    </div>
  );
};

export default NavItem;
