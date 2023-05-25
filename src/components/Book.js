import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  itemId,
  title,
  author,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button type="button">comments</button>
        <button type="button" onClick={handleRemove}>remove</button>
      </div>
    </>
  );
};
Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
