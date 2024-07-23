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
  },
  text: {
    fontSize: '15px',
    fontFamily: 'Nanum Gothic',
    fontWeight: 700,
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
