import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ContentModal,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdropeClick);
  }

  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onModalClose();
    }
  };

  handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalData;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropeClick}>
        <ContentModal>
          <ModalPicture src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ContentModal>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
