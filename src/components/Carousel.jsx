import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import black from '../assets/black.png';
import final from '../assets/final.png';
import grp from '../assets/grp.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const changingWords = ["Elegance", "Minimalism", "Comfort"];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.homeContainer}>
      <div style={styles.frontLine}>
        <h1 style={styles.h1}>
          Welcome to Rhyno EV
        </h1>
        <h2 style={styles.h2}>
          Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span style={styles.changingWord}>{changingWords[currentWordIndex]}</span>
        </h2>
      </div>
      <div style={styles.carouselWrapper}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={2000}
          style={styles.carousel}
        >
          <div>
            <img src={black} alt="Blue Vehicle" style={styles.carouselImg} />
          </div>
          <div>
            <img src={final} alt="Black Vehicle" style={styles.carouselImg} />
          </div>
          <div>
            <img src={grp} alt="Final Vehicle" style={styles.carouselImg} />
          </div>
        </Carousel>
      </div>
      <div style={styles.uspContainer}>
        <h2 style={styles.uspHeader}>Our USPs</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={2000}
          centerMode
          centerSlidePercentage={33.33}
        >
          <div style={styles.uspItem}>
            <h3 style={styles.uspTitle}>LFP Battery</h3>
            <p style={styles.uspDescription}>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!</p>
          </div>
          <div style={styles.uspItem}>
            <h3 style={styles.uspTitle}>Wider Tyres</h3>
            <p style={styles.uspDescription}>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
          </div>
          <div style={styles.uspItem}>
            <h3 style={styles.uspTitle}>Range Prediction</h3>
            <p style={styles.uspDescription}>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.</p>
          </div>
          <div style={styles.uspItem}>
            <h3 style={styles.uspTitle}>Extraordinary Experience</h3>
            <p style={styles.uspDescription}>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
          </div>
          <div style={styles.uspItem}>
            <h3 style={styles.uspTitle}>Rugged and Simple Design</h3>
            <p style={styles.uspDescription}>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home.</p>
          </div>
        </Carousel>
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="/privacy-policy" style={styles.footerLink}>Privacy Policy</a>
          <a href="/refund-policy" style={styles.footerLink}>Refund Policy</a>
          <a href="/website-policy" style={styles.footerLink}>Website Policy</a>
          <a href="/contact-us" style={styles.footerLink}>Contact Us</a>
          <a href="/products" style={styles.footerLink}>Products</a>
          <a href="https://www.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Career</a>
          <a href="/rentals" style={styles.footerLink}>Rentals</a>
        </div>
        <div style={styles.footerIcons}>
          <a href="https://www.instagram.com/rhyno.in" target="_blank" rel="noopener noreferrer" style={styles.footerIcon}>
            <img src={instagramIcon} alt="Instagram" style={styles.iconImage} />
            <span>@rhyno_ev</span>
          </a>
          <a href="https://www.linkedin.com/company/rhyno-wheels" target="_blank" rel="noopener noreferrer" style={styles.footerIcon}>
            <img src={linkedinIcon} alt="LinkedIn" style={styles.iconImage} />
            <span>Rhyno EV</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  homeContainer: {
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    paddingBottom: '50px',
    backgroundColor: 'darkgrid',
  },
  frontLine: {
    width: '100%',
    padding: '20px',
    zIndex: 1,
    position: 'relative',
    color: 'black',
  },
  h1: {
    fontSize: '3em',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'marquee 20s linear infinite',
  },
  h2: {
    fontSize: '2em',
    margin: 0,
    color:'black',
  },
  changingWord: {
    color: 'red',
  },
  carouselWrapper: {
    marginTop: '0px',
  },
  carousel: {
    height: '50vh',
  },
  carouselImg: {
    width: '100%',
    height: '500px',
    objectFit: 'contain',
  },
  uspContainer: {
    marginTop: '20px',
  },
  uspHeader: {
    fontSize: '2em',
    marginBottom: '20px',
    color:'black',
  },
  uspItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 10px',
    boxSizing: 'border-box',
  },
  uspTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  uspDescription: {
    fontSize: '1em',
    textAlign: 'left',
    overflowY: 'auto',
  },
  footer: {
    backgroundColor: '#131313',
    color: 'white',
    height: '150px',
    marginTop: '100px',
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '10px',
  },
  footerIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  footerIcon: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  iconImage: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
};

export default Home;
