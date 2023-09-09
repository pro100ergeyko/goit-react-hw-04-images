import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ContentModal,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = item => {
  const { largeImageURL, tags, onCloseModal } = item;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === `Escape`) {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropeClick}>
      <ContentModal>
        <ModalPicture src={largeImageURL} alt={tags} />
        <ModalDescr>{tags}</ModalDescr>
      </ContentModal>
    </ModalBackdrop>,
    modalRoot
  );
};
