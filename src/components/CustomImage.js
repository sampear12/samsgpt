import React from 'react';

const styles = {
  ImageContainer: {
    width: '55px',
    height: '55px',
    borderRadius: '9999px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/e2ffbe9b-2685-41ae-9a7e-73844efcce87.png',
};

const CustomImage = (props) => {
  return (
    <div
      style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${props.image ?? defaultProps.image})`,
      }}
    />
  );
};

export default CustomImage;
