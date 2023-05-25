import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    itemId: '',
    author: '',
    title: '',
  });

  const onStateUpdate = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (formData.author.trim() === '' || formData.title.trim() === '') {
      return;
    }

    dispatch(addBook({
      ...formData,
      itemId: uuidv4(),
    }));

    setFormData({
      itemId: '',
      author: '',
      title: '',
    });
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="title" className="visually-hidden">
          Title
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={onStateUpdate}
          />
        </label>
        <label htmlFor="author" className="visually-hidden">
          Author
          <input
            name="author"
            id="author"
            value={formData.author}
            onChange={onStateUpdate}
            placeholder="Author"
          />
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
