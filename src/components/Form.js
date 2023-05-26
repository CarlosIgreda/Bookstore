import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  const [form, setForm] = useState({
    title: '',
    author: '',
    item_id: '',
    category: '',
  });

  const onStateUpdate = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.title.trim() === '' || form.author.trim() === '' || form.category.trim() === '') { return; }

    setLoading(true);
    dispatch(addBook({
      ...form,
      item_id: uuidv4(),
    })).then(() => {
      setLoading(false);
      setForm({
        title: '',
        author: '',
        item_id: '',
        category: '',
      });
      dispatch(fetchBooks());
    }).catch(() => {
      setLoading(false);
    });

    if (loading) {
      <div>Loading...</div>;
    }
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
            value={form.title}
            onChange={onStateUpdate}
          />
        </label>
        <label htmlFor="author" className="visually-hidden">
          Author
          <input
            name="author"
            id="author"
            value={form.author}
            onChange={onStateUpdate}
            placeholder="Author"
          />
        </label>
        <label htmlFor="category" className="visually-hidden">
          Category
          <input
            name="category"
            id="category"
            value={form.category}
            onChange={onStateUpdate}
            placeholder="Category"
          />
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
