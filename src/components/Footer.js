import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to BookShop! We provide a wide variety of books ranging from the latest bestsellers to the timeless classics. Our mission is to deliver the best selection of books to book lovers around the world.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact-info">
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> support@bookshop.com</p>
          <p><strong>Address:</strong> 123 Book Lane, Story City, SC 12345</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="footer-newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 BookShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
