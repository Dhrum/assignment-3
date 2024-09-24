import React from 'react';
import image404 from '../assets/images/404.webp'; // Import the image

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 80px)', // Assuming navbar and footer are 80px in total height
      width: '100%',
      padding: '0',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the image covers the entire container while maintaining aspect ratio
    },
  };

  return (
    <div style={styles.container}>
      <img src={image404} alt="404 Page Not Found" style={styles.image} />
    </div>
  );
};

export default NotFound;
