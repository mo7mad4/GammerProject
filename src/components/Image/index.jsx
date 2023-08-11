import React from 'react';

const Image = ({ ImageSrc, handleShowPassword }) => {
    return (
      <img
        src={ImageSrc}
        alt='img'
        onClick={handleShowPassword ? handleShowPassword : () => {}}
      />
    );
  }
export default Image
