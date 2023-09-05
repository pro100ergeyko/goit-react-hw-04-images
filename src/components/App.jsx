import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './Helpers/apiImage';
import { PreviewGallery } from './ImageGallery/PreviewGallery/PreviewGallery';
import { Modal } from './Modal/Modal';
import { optionsForNotify } from './Helpers/OptionsForNotify';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    error: true,
    page: 1,
    tatalHitsPages: 12,
    isLoading: false,
    isButtonMore: false,
    isShowModal: false,
    modalData: { tags: '' },
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery: prevQuery, page: prevPage } = prevState;
    const {
      searchQuery: nextQuery,
      page: nextPage,
      tatalHitsPages,
    } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchGalleryItems(nextQuery, nextPage, tatalHitsPages);
    }
  }

  fetchGalleryItems = (nextQuery, nextPage, tatalHitsPages) => {
    this.setState({ isLoading: true, error: false });

    fetchImages(nextQuery, nextPage, tatalHitsPages)
      .then(data => {
        const { totalHits, hits } = data;
        if (!totalHits) {
          this.setState({ isLoading: false, error: true });
          toast.warn(
            '😯Oops... there are no images matching your search... ',
            optionsForNotify
          );
          return;
        }

        if (nextPage === 1 || totalHits <= tatalHitsPages) {
          toast.success(
            `Hooray! We found ${totalHits} images.`,
            optionsForNotify
          );
        }

        const newData = hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );

        this.setState(prevState => ({
          images: [...prevState.images, ...newData],
          isButtonMore: this.state.page < Math.ceil(totalHits / tatalHitsPages),
        }));
      })
      .catch(error => console.error(error))
      .finally(
        this.setState({
          isLoading: false,
          error: false,
        })
      );
  };

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
      isButtonShow: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setModalData = modalData => {
    this.setState({ modalData, isShowModal: true });
  };

  handleModalClose = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images, isLoading, error, isButtonMore, modalData, isShowModal } =
      this.state;

    // if (status === 'idle') {
    //   return <PreviewGallery text="Let`s find images! 😊" />;
    // }
    // if (status === 'pending') {
    //   return <Loader />;
    // }
    // if (status === 'rejected') {
    //   return <ImageErrorOpen message={error.message} />;
    // }
    // if (images.length === 0) {
    //   return (
    //     <ImageErrorOpen
    //       message={`😯Oops... there are no images matching your search... `}
    //     />
    //   );
    // }

    //     if (status === 'resolved') {
    //       return (
    //         <>
    //           <List>
    //             {images.map(image => (
    //               <ImageGalleryItem
    //                 key={image.id}
    //                 item={image}
    //                 onImageClick={this.setModalData}
    //               />
    //             ))}
    //           </List>
    //           {images.length > 0 && status !== 'pending' && page <= totalPages && (
    //             <Button onClick={this.handleLoadMore}>Load More</Button>
    //           )}
    //           {isShowModal && (
    //             <Modal modalData={modalData} onModalClose={this.handleModalClose} />
    //           )}
    //         </>
    //       );
    //     }
    //   }
    // }

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        {error && <PreviewGallery text="Let`s find images! 😊" />}
        {!error && <ImageGallery images={images} onClick={this.setModalData} />}

        {isLoading && <Loader />}
        {isShowModal && (
          <Modal modalData={modalData} onModalClose={this.handleModalClose} />
        )}
        {isButtonMore && !isLoading && <Button onClick={this.handleLoadMore} />}

        <ToastContainer transition={Slide} draggablePercent={60} />
        <GlobalStyle />
      </>
    );
  }
}
