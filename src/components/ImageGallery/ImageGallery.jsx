import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <li>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} onClick={openModal} />
      ))}
    </li>
  );
};
