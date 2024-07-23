import React from 'react';

const styles = {
  Card: {
    top: '0px',
    left: '0px',
    width: '237px',
    height: '100vh',
    backgroundColor: '#171717',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
  },
};

const Card = (props) => {
  return <div style={styles.Card}>{props.children}</div>;
};

export default Card;
