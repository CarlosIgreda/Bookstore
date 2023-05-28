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
    <section className="book-item">
      <div className="left-side">
        <article>
          <p className="add-new-book-title book-category">{category}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </article>
        <div>
          <button className="buttons buttons3 cursor" type="button">Comments</button>
          <button className="buttons buttons2 buttons3 cursor" type="button" onClick={handleRemove}>Remove</button>
          <button className="buttons buttons2 cursor" type="button">Edit</button>
        </div>
      </div>
      <div className="display-flex right-side">
        <div className="display-flex advance-container">
          <div className="circle-bar-container">
            <div className="circle-bar">{}</div>
          </div>
          <div>
            <div className="percentage">64%</div>
            <div className="status">Completed</div>
          </div>
        </div>
        <div className="display-flex flex-dir-col chapter-container">
          <div className="roboto status">CURRENT CHAPTER</div>
          <div className="roboto chapter">Chapter 18</div>
          <button className="roboto cursor add-book-button update-button" type="button">
            UPDATE PROGRESS
          </button>
        </div>
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
