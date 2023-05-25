import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const List = () => {
  const { booksList } = useSelector((store) => store.book);
  return (
    <>
      <div>
        {booksList.map((book) => (
          <Book
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </>
  );
};
export default List;
