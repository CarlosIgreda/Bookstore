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
    <section className="form-section">
      <h3 className="add-new-book-title">ADD NEW BOOK</h3>
      <form onSubmit={onSubmit} className="form-container display-flex">
        <div className="input-container display-flex">
          <label htmlFor="title" className="visually-hidden">
            Title
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Book title"
              value={form.title}
              onChange={onStateUpdate}
              className="input-field"
            />
          </label>
          <label htmlFor="author" className="visually-hidden">
            Author
            <input
              name="author"
              id="author"
              value={form.author}
              onChange={onStateUpdate}
              placeholder="Book author"
              className="input-field"
            />
          </label>
          <label htmlFor="category" className="visually-hidden">
            Category
            <input
              name="category"
              id="category"
              value={form.category}
              onChange={onStateUpdate}
              placeholder="Book category"
              className="input-field"
            />
          </label>
        </div>
        <button type="submit" className="add-book-button cursor">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
