import React from 'react';

const Card = ({ children, style }) => {
  // Define the responsive width
  const getResponsiveWidth = () => {
    if (window.innerWidth <= 600) { // For mobile devices
      return '40vw'; // 90% of the viewport width
    } else if (window.innerWidth <= 1024) { // For tablets
      return '10vw'; // 60% of the viewport width
    } else { // For desktop and larger screens
      return '20vw'; // 30% of the viewport width
    }
  };

  const defaultStyles = {
    top: '0px',
    left: '0px',
    width: getResponsiveWidth(), // Responsive width
    height: '90vh',
    backgroundColor: '#171717',
    borderRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    padding: '2px',
    boxSizing: 'border-box',
    flexShrink: 0,
    transition: 'width 0.3s, padding 0.3s', // Ensure a smooth transition
  };

  // Handle window resize event to update the width
  React.useEffect(() => {
    const handleResize = () => {
      document.querySelector('.card').style.width = getResponsiveWidth();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div className="card" style={{ ...defaultStyles, ...style }}>{children}</div>;
};

export default Card;
