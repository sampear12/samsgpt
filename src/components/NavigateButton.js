import React from 'react';

const styles = {
  Text: {
    color: '#b4b4b4',
    fontSize: '15px',
    fontFamily: 'Nanum Gothic',
    fontWeight: 700,
    lineHeight: '20px',
    marginBottom: '10px',
  },
};

const defaultProps = {
  text: 'Navigate',
};

const NavigateButton = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default NavigateButton;
