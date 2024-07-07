import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.leftSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.rightSection}>
        <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link>
        <Link to="/refund-policy" style={styles.footerLink}>Refund Policy</Link>
        <Link to="/website-policy" style={styles.footerLink}>Website Policy</Link>
        <Link to="/contact-us" style={styles.footerLink}>Contact Us</Link>
        <Link to="/products" style={styles.footerLink}>Products</Link>
        <a href="https://www.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Career</a>
        <Link to="/rentals" style={styles.footerLink}>Rentals</Link>
        <a href="https://www.instagram.com/rhyno.in" target="_blank" rel="noopener noreferrer" style={styles.footerIcon}>
          <img src={instagramIcon} alt="Instagram" style={styles.iconImage} />
        </a>
        <a href="https://www.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer" style={styles.footerIcon}>
          <img src={linkedinIcon} alt="LinkedIn" style={styles.iconImage} />
        </a>
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#131313',
    color: 'white',
    padding: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 2,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '150px',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  },
  footerIcon: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
  },
  iconImage: {
    width: '30px',
    height: '30px',
  },
};

export default Footer;
