import React from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <List>
        {images.map(image => (
          <ImageGalleryItem key={image.id} item={image} />
        ))}
      </List>
    </>
  );
};
