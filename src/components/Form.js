import React, { useState } from 'react';
import PropTypes from 'prop-types';

const authors = [
  'Ernest Hemingway',
  'Franz Kafka',
  'James Joyce',
  'Mark Twain',
];

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="visually-hidden">
          Title
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author" className="visually-hidden">
          Author
          <select
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="" disabled hidden>
              Select an Author
            </option>
            {authors.map((authorName) => (
              <option key={authorName} value={authorName}>
                {authorName}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
