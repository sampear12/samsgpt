import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '25px',
    boxShadow: '0px 0px 10px rgba(3,3,3,0.1)',
    backgroundColor: '#e5e7eb',
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '16px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Generate',
};

const SecondaryButton = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default SecondaryButton;
