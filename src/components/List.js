import React, { useState } from 'react';
import Form from './Form';

const List = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Old Man and The Sea',
      author: 'Ernest Hemingway',
    },
    {
      id: 2,
      title: 'The Metamorphosis',
      author: 'Franz Kafka',
    },
    {
      id: 3,
      title: 'Ulysses',
      author: 'James Joyce',
    },
    {
      id: 4,
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
    },
  ]);

  const handleDelete = (id) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== id);

      // Update the IDs of the remaining books
      const updatedBooksWithNewIds = updatedBooks.map((book, index) => ({
        ...book,
        id: index + 1,
      }));

      return updatedBooksWithNewIds;
    });
  };

  const handleAddBook = (book) => {
    const newBook = {
      id: books.length + 1,
      ...book,
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      {books.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <button type="button" onClick={() => handleDelete(book.id)}>
            Delete
          </button>
        </article>
      ))}
      <Form onSubmit={handleAddBook} />
    </>
  );
};

export default List;
