import BookCard from './BookCard';
import books from '../data/books.json'; // Load the book data
import BookCarousel from './BookCarousel';

const Home = () => {
  return (
    <div className="home">
      <section className="carousel-section">
        {/* Carousel Component */}
        <BookCarousel />
      </section>

      <section className="books">
        <h2>Available Books</h2>
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
