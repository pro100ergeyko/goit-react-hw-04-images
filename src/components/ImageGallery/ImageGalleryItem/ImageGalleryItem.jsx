import { useState } from 'react';
import { ListItem, Picture } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { largeImageURL, tags, webformatURL } = item;

  return (
    <>
      <ListItem onClick={toggleModal}>
        <div>
          <Picture src={webformatURL} alt={tags} />
        </div>
      </ListItem>

      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onCloseModal={() => toggleModal()}
        />
      )}
    </>
  );
};
