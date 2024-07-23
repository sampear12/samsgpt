import React from 'react';

const styles = {
  Header: {
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;
