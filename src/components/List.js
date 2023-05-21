import React, { useState } from 'react';
import Form from './Form';
import Book from './Book';

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

  const handleAddBook = (book) => {
    const newBook = {
      id: Date.now(),
      ...book,
    };
    setBooks([...books, newBook]);
  };

  const handleDelete = (key) => {
    setBooks(books.filter((book) => book.id !== key));
  };

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          handleDelete={handleDelete}
        />
      ))}
      <Form onSubmit={handleAddBook} />
    </>
  );
};

export default List;
