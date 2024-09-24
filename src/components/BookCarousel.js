import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/motivation1.jpg';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import img4 from '../assets/images/4.webp';
import img5 from '../assets/images/5.webp';

const BookCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Unlock Your Imagination</h3>
          <p>Books open up worlds you've never explored before.</p>
          <button className="btn btn-primary">Buy Book</button> {/* Buy Book Button */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Journey Through Time</h3>
          <p>Every book is a time machine ready to take you anywhere.</p>
          <button className="btn btn-primary">Buy Book</button> {/* Buy Book Button */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fuel Your Mind</h3>
          <p>Reading sharpens your mind and expands your perspective.</p>
          <button className="btn btn-primary">Buy Book</button> {/* Buy Book Button */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Dream Big</h3>
          <p>Let books inspire you to dream and achieve more.</p>
          <button className="btn btn-primary">Buy Book</button> {/* Buy Book Button */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Knowledge is Power</h3>
          <p>Every page you read is a step towards success.</p>
          <button className="btn btn-primary">Buy Book</button> {/* Buy Book Button */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BookCarousel;
