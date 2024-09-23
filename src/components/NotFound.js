const NotFound = () => {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        color: '#333',
      },
      heading: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
      },
      message: {
        fontSize: '20px',
        marginBottom: '30px',
        color: '#555',
      },
      link: {
        fontSize: '18px',
        color: '#007bff',
        textDecoration: 'none',
      },
      linkHover: {
        textDecoration: 'underline',
      },
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.message}>Sorry, the page you're looking for does not exist.</p>
        <a
          href="/"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Go back to the homepage
        </a>
      </div>
    );
  };
  
  export default NotFound;
  