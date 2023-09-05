import React from 'react';
import { Text, Wrapper } from './PreviewGallery.styled';

export const PreviewGallery = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};
