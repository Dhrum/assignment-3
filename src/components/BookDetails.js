import { useParams } from 'react-router-dom';
import books from '../data/books.json'; // Import the book data
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(b => b.bookId === parseInt(id));

  const handleAddToCart = () => {
    toast.success(`${book.bookName} has been successfully added to the Cart`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${book.bookName} has been successfully added to the Wishlist`);
  };

  return (
    <div className="book-details-container">
      <div className="book-image">
        <img src={book.image} alt={book.bookName} />
      </div>
      <div className="book-info">
        <h1>{book.bookName}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Total Pages:</strong> {book.totalPages}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Review:</strong> {book.review}</p>
        <p><strong>Tags:</strong> {book.tags.join(', ')}</p>
        <div className="book-buttons">
          <button onClick={handleAddToWishlist}>Wish to Read</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
