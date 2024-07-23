
import React from 'react';

const styles = {
  Text: {
    color: '#b4b4b4',
    fontSize: '15px',
    fontFamily: 'Arial',
    fontWeight: 700,
    lineHeight: '20px',
  },
};

const defaultProps = {
  text: 'Previous Conversations',
};

const NavigateButton = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default NavigateButton;