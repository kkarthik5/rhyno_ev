import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navLeft}>
        <img src={logo2} alt="Rhyno Logo" style={styles.logo} />
      </div>
      <div style={styles.hamburger} onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul style={{ ...styles.navList, ...(mobileMenuOpen ? styles.navListOpen : {}) }}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About Us</Link>
        </li>
        <li
          style={styles.navItem}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          onClick={toggleDropdown}
        >
          <span style={styles.navLink}>Products</span>
          {dropdownOpen && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}>
                <Link to="/products/se03lite" style={styles.dropdownLink}>SE03 Lite</Link>
              </li>
              <li style={styles.dropdownItem}>
                <Link to="/products/se03" style={styles.dropdownLink}>SE03</Link>
              </li>
              <li style={styles.dropdownItem}>
                <Link to="/products/se03max" style={styles.dropdownLink}>SE03 Max</Link>
              </li>
            </ul>
          )}
        </li>
        <li style={styles.navItem}>
          <Link to="/compareall" style={styles.navLink}>Compare All</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/prebook" style={styles.navLink}>Pre-book Now</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#252525',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '60px',
    width: '200px',
  },
  hamburger: {
    display: 'none',
    fontSize: '2em',
    color: 'white',
    cursor: 'pointer',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navListOpen: {
    display: 'block',
    width: '100%',
  },
  navItem: {
    position: 'relative',
    marginLeft: '1.5em',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Lato, Poppins, Calibri',
    padding: '0.5em',
    transition: 'color 0.3s, box-shadow 0.3s',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#333',
    padding: '0.5em 0',
    listStyleType: 'none',
    margin: 0,
    borderRadius: '0.5em',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
  dropdownItem: {
    padding: '0.5em 1em',
  },
  dropdownLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Lato, Poppins, Calibri',
    transition: 'color 0.3s',
  },
  '@media (max-width: 768px)': {
    navList: {
      display: 'none',
      flexDirection: 'column',
      width: '100%',
      textAlign: 'center',
    },
    hamburger: {
      display: 'block',
    },
    navItem: {
      marginLeft: 0,
      marginBottom: '1em',
    },
    dropdown: {
      position: 'relative',
      boxShadow: 'none',
    },
  },
  '@media (max-width: 425px)': {
    nav: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    logo: {
      height: '50px',
      width: '150px',
    },
    hamburger: {
      alignSelf: 'flex-end',
    },
  },
};

export default Navbar;
