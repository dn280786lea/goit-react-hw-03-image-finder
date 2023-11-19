import React from 'react';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li onClick={onClick}>
      <img src={image.url} alt={image.tags} id={image.id} />
    </li>
  );
};
