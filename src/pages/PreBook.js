import React from 'react';
import redImg from '../assets/red.png'; 

const PreBook = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="prebook-container" style={styles.container}>
      <div className="image-container" style={styles.imageContainer}>
        <img src={redImg} alt="Red Image" className="prebook-image" style={styles.image} />
      </div>
      <div className="form-container" style={styles.formContainer}>
        <h2 style={styles.heading}>Prebook Your Bike</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <input type="text" name="name" placeholder="Your Name" style={styles.input} required />
          </div>
          <div style={styles.inputContainer}>
            <input type="email" name="email" placeholder="Your Email" style={styles.input} required />
          </div>
          <div style={styles.inputContainer}>
            <input type="tel" name="mobile" placeholder="Your Mobile Number" style={styles.input} required />
          </div>
          <div style={styles.inputContainer}>
            <select name="vehicle" style={styles.input} required>
              <option value="">Select Vehicle</option>
              <option value="SE03">SE03</option>
              <option value="SE03Lite">SE03 Lite</option>
              <option value="SE03Max">SE03 Max</option>
            </select>
          </div>
          <div style={styles.benefitsContainer}>
            <h3 style={styles.subHeading}>Prebook Benefits:</h3>
            <ul style={styles.list}>
              <li>Early delivery</li>
              <li>Special discount</li>
              <li>Exclusive offers</li>
            </ul>
          </div>
          <div style={styles.supportContainer}>
            <h3 style={styles.subHeading}>Customer Support:</h3>
            <p>Contact Us:</p>
            <ul style={styles.list}>
              <li>Mail: info@rhyno.in</li>
              <li>Mobile no.: +91-9023987528</li>
            </ul>
          </div>
          <button type="submit" style={styles.button}>Pay Now</button>
        </form>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .prebook-container {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .image-container, .form-container {
              width: 100%;
            }
            .prebook-image {
              width: 100%;
              height: auto;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  imageContainer: {
    flex: '1',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  formContainer: {
    flex: '1',
    padding: '10px',
  },
  heading: {
    marginBottom: '10px',
    color: '#000',
  },
  form: {
    backgroundColor: '#222',
    padding: '10px',
    borderRadius: '10px',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  benefitsContainer: {
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#fff',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#fff',
  },
  supportContainer: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  }
};

export default PreBook;
