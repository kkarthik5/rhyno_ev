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










https://github.com/kkarthik5/rhyno_ev.git












import React from 'react';
import finalImg from '../assets/final.png';

const CompareAll = () => {
  const specifications = [
    { key: 'Battery', se03Lite: '1.8Kwh', se03: '2.7Kwh', se03Max: '2.7Kwh' },
    { key: 'Battery features', se03Lite: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)', se03: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)', se03Max: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)' },
    { key: 'Battery warranty', se03Lite: '3 years', se03: '3 years', se03Max: '3 years' },
    { key: 'Charging time', se03Lite: '3 hours (12A)', se03: '4 hours (12A)', se03Max: '4 hours (12A)' },
    { key: 'Motor', se03Lite: '1500W', se03: '1500W', se03Max: '2000W' },
    { key: 'Max speed', se03Lite: '55 km/h', se03: '55 km/h', se03Max: '65 km/h' },
    { key: 'Warranty on electronics', se03Lite: '1 year', se03: '1 year', se03Max: '1 year' },
    { key: 'Max range (@30km/h)', se03Lite: '100 km', se03: '150 km', se03Max: '120 km' },
    { key: 'Max range (@45km/h)', se03Lite: '90 km', se03: '110 km', se03Max: '100 km' },
    { key: 'Max range (@full speed)', se03Lite: '60 km', se03: '90 km', se03Max: '80 km' },
    { key: 'Other key benefits', se03Lite: 'Fire-safe battery, Range prediction, Comfortable ride, Stable and safe', se03: 'Fire-safe battery, Range prediction, Comfortable ride, Stable and safe', se03Max: 'Fire-safe battery, Range prediction, Comfortable ride, Stable and safe' }
  ];

  return (
    <div style={styles.container}>
      <img src={finalImg} alt="Comparison Image" style={styles.image} />
      <div style={styles.tableWrapper}>
        <h2 style={styles.header}>Specification</h2>
        <div style={styles.table}>
          <div style={styles.headerCell}>Feature</div>
          <div style={styles.headerCell}>Rhyno SE03 Lite</div>
          <div style={styles.headerCell}>Rhyno SE03</div>
          <div style={styles.headerCell}>Rhyno SE03 Max</div>
          {specifications.map((spec, index) => (
            <React.Fragment key={index}>
              <div style={styles.cell}>{spec.key}</div>
              <div style={styles.cell}>{spec.se03Lite}</div>
              <div style={styles.cell}>{spec.se03}</div>
              <div style={styles.cell}>{spec.se03Max}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  tableWrapper: {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '1000px',
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  table: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    minWidth: '800px',
    boxSizing: 'border-box',
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '2px solid #ddd',
  },
  cell: {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  '@media (max-width: 768px)': {
    table: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
};

export default CompareAll;



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

