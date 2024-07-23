import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '22px',
    backgroundColor: '#2f2f2f',
    color: '#ececec',
    fontSize: '13px',
    fontFamily: 'Nanum Gothic',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Who is Samika ?',
};

const PrimaryButton = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default PrimaryButton;
