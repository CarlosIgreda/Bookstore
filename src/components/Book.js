import PropTypes from 'prop-types';

const Book = ({
  id, title, author, handleDelete,
}) => (
  <article key={id}>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  </article>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Book;
