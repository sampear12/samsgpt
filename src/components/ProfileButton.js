import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Nanum Gothic',
    lineHeight: '26px',
    padding: '10px 0',
    cursor: 'pointer',
  },
};

const defaultProps = {
  text: 'Profile',
};

const ProfileButton = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ProfileButton;
