import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './Helpers/apiImage';
import { PreviewGallery } from './ImageGallery/PreviewGallery/PreviewGallery';
import { optionsForNotify } from './Helpers/OptionsForNotify';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonMore, setIsButtonMore] = useState('');

  const totalHitsPages = useRef(12);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    function setchGalleryItems(nextQuery, nextPage, totalHitsPages) {
      setIsLoading(true);
      setError(false);

      fetchImages(nextQuery, nextPage, totalHitsPages.current)
        .then(data => {
          const { totalHits, hits } = data;
          if (!totalHits) {
            setIsLoading(false);
            setError(true);
            toast.warn(
              '😯Oops... there are no images matching your search... ',
              optionsForNotify
            );
            return;
          }

          if (nextPage === 1 || totalHits <= totalHitsPages) {
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

          setImages(prevState => [...prevState, ...newData]);
          setIsButtonMore(page < Math.ceil(totalHits / totalHitsPages.current));
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
          setError(false);
        });
    }

    setchGalleryItems(searchQuery, page, totalHitsPages);
  }, [searchQuery, page]);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
    setIsButtonMore(false);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      {error && <PreviewGallery text="Let`s find images! 😊" />}
      {!error && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isButtonMore && !isLoading && <Button onClick={handleLoadMore} />}
      <ToastContainer transition={Slide} draggablePercent={60} />
      <GlobalStyle />
    </>
  );
};
