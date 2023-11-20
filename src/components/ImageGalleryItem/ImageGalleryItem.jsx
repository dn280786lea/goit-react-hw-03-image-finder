import React from 'react';
import {} from './ImageGalleryItem.css';

export const ImageGalleryItem = ({ image, onClick, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        className="image"
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
        onClick={openModal}
      />
    </li>
  );
};
