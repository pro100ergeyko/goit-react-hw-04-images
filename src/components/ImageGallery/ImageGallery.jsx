import React from 'react';
// import { fetchImages } from '../Helpers/apiImage';
// import { PreviewGallery } from 'components/ImageGallery/PreviewGallery/PreviewGallery';
// import { Loader } from 'components/Loader/Loader';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
// import { Button } from 'components/Button/Button';
// import { Modal } from 'components/Modal/Modal';
// import { ImageErrorOpen } from 'components/ImageGallery/ImageErrorOpen/ImageErrorOpen';

// const Status = {
//   idle: 'idle',
//   pending: 'pending',
//   resolved: 'resolved',
//   rejected: 'rejected',
// };

export const ImageGallery = ({ images, onClick }) => {
  // state = {
  //   value: '',
  //   images: [],
  //   error: false,
  //   status: Status.idle,
  //   page: 1,
  //   totalPages: 0,
  //   isShowModal: false,
  //   modalData: { tags: '' },
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { page } = this.state;
  //   const prevValue = prevProps.value;
  //   const nextValue = this.props.value;

  //   if (prevValue !== nextValue || prevState.page !== page) {
  //     this.setState({ status: Status.pending });

  //     if (this.state.error) {
  //       this.setState({ error: false });
  //     }
  //     fetchImages(nextValue, page)
  //       .then(images => {
  //         this.setState(prevState => ({
  //           images:
  //             page === 1 ? images.hits : [...prevState.images, ...images.hits],
  //           status: Status.resolved,
  //           totalPages: Math.floor(images.totalHits / 12),
  //         }));
  //       })
  //       .catch(error => this.setState({ error, status: Status.rejected }));
  //   }
  // }

  // handleLoadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  // setModalData = modalData => {
  //   this.setState({ modalData, isShowModal: true });
  // };

  // handleModalClose = () => {
  //   this.setState({ isShowModal: false });
  // };

  // render() {
  //   const { images, error, status, page, totalPages, isShowModal, modalData } =
  //     this.state;

  //   if (status === 'idle') {
  //     return <PreviewGallery text="Let`s find images! 😊" />;
  //   }
  //   if (status === 'pending') {
  //     return <Loader />;
  //   }
  //   if (status === 'rejected') {
  //     return <ImageErrorOpen message={error.message} />;
  //   }
  //   if (images.length === 0) {
  //     return (
  //       <ImageErrorOpen
  //         message={`😯Oops... there are no images matching your search... `}
  //       />
  //     );
  //   }

  //   if (status === 'resolved') {
  return (
    <>
      <List>
        {images.map(image => (
          <ImageGalleryItem key={image.id} item={image} onClick={onClick} />
        ))}
      </List>
      {/* {images.length > 0 && status !== 'pending' && page <= totalPages && (
            <Button onClick={this.handleLoadMore}>Load More</Button>
          )}
          {isShowModal && (
            <Modal modalData={modalData} onModalClose={this.handleModalClose} />
          )} */}
    </>
  );
  //   }
  // }
};
