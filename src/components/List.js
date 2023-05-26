import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  booksStatus, fetchBooks, booksError, allBooks,
} from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const List = () => {
  const dispatch = useDispatch();

  const books = useSelector(allBooks);
  const status = useSelector(booksStatus);
  const error = useSelector(booksError);
  useEffect(() => {
    if (status === 'notStarted') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'load') {
    content = <h2>&quot;Loading books...&quot;</h2>;
  } else if (status === 'success') {
    content = Object.entries(books).map(([key, book]) => (
      <Book
        key={key}
        title={book[0].title}
        author={book[0].author}
        itemId={key}
        category={book[0].category}
      />
    ));
  } else if (status === 'fail') {
    content = <h2>{error}</h2>;
  }

  return (
    <div>
      <div>
        {content}
      </div>
      <hr />
      <Form />
    </div>
  );
};

export default List;
