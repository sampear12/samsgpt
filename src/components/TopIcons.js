import React from 'react';

const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  imageContainer: {
    width: '24px',
    height: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  },
};

const icons = [
  { id: 1, url: 'https://assets.api.uizard.io/api/cdn/stream/d623031a-d918-41d4-9fb3-2ac91c3d5ac0.png' },
  
];

const TopIcons = ({ onToggleCollapse, collapsed }) => {
  return (
    <div style={styles.iconContainer}>
      <div
        style={{
          ...styles.imageContainer,
          backgroundImage: `url(${icons[0].url})`,
        }}
        onClick={onToggleCollapse}
      />
      
    </div>
  );
};

export default TopIcons;
