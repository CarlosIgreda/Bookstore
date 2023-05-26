import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/booksSlice';

const Book = ({
  itemId,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  const handleRemove = () => {
    setLoading(true);
    dispatch(deleteBook(itemId)).then(() => {
      setLoading(false);
      dispatch(fetchBooks());
    }).catch(() => {
      setLoading(false);
    });

    if (loading) {
      <div>Loading...</div>;
    }
  };

  return (
    <section>
      <article>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </article>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={handleRemove}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
