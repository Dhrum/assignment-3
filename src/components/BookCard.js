import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.bookName} />
      <h3>{book.bookName}</h3>
      <p>{book.author}</p>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.bookId}`}>
        <button>Book Details</button>
      </Link>

      {/* Fancy Footer for the Book Card */}
      <footer className="book-footer">
        <p>Published by: {book.publisher}</p>
        <p>Year: {book.yearOfPublishing}</p>
      </footer>
    </div>
  );
};

export default BookCard;
