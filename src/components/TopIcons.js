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
  { id: 2, url: 'https://assets.api.uizard.io/api/cdn/stream/82b4f557-56b8-48fc-98b5-8cffef11197b.png' },
];

const TopIcons = ({ onToggleCollapse }) => {
  return (
    <div style={styles.iconContainer}>
      {icons.map((icon, index) => (
        <div
          key={icon.id}
          style={{
            ...styles.imageContainer,
            backgroundImage: `url(${icon.url})`,
          }}
          onClick={index === 0 ? onToggleCollapse : null}
        />
      ))}
    </div>
  );
};

export default TopIcons;
