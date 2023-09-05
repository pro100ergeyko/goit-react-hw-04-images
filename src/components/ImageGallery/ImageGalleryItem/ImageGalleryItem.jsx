import { ListItem, Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onClick }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <ListItem
      onClick={e => {
        e.preventDefault();
        onClick({ largeImageURL, tags });
      }}
    >
      <div>
        <Picture src={webformatURL} alt={tags} />
      </div>
    </ListItem>
  );
};
