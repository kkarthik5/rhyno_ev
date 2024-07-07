import React from 'react';
import grpImage from '../assets/grp.png';

const ContactUs = () => {
  return (
    <div className="contact-us-container" style={styles.container}>
      <img src={grpImage} alt="Company Logo" className="logo-image" style={styles.logoImage} />
      <div className="contact-info" style={styles.contactInfo}>
        <h2 style={styles.header}>Contact Us:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Mail:</strong> info@rhyno.in</li>
          <li style={styles.listItem}><strong>Mobile no.:</strong> +91-9023987528</li>
          <li style={styles.listItem}>
            <strong>Location:</strong> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
            Raisan, Gandhinagar, Gujarat, India
          </li>
        </ul>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .contact-us-container {
              flex-direction: column;
              text-align: center;
            }
            .logo-image {
              width: 100%;
              height: auto;
              margin-bottom: 20px;
            }
            .contact-info {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  logoImage: {
    width: '450px',
    height: '400px',
    marginRight: '20px'
  },
  contactInfo: {
    flex: 1,
    fontSize: '1.5rem',
    textAlign: 'left'
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  list: {
    listStyleType: 'none',
    padding: '0'
  },
  listItem: {
    marginBottom: '8px'
  }
};

export default ContactUs;
