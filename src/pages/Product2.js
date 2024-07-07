import React, { useState } from 'react';
import blackImg from '../assets/blaack.png'; 
import blueImg from '../assets/bluee.png';  
import redImg from '../assets/reed.png';    

const Product2 = () => {
  const [image, setImage] = useState(blackImg);

  const handleColorChange = (color) => {
    if (color === 'blue') setImage(blueImg);
    else if (color === 'red') setImage(redImg);
    else setImage(blackImg);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image} alt="Vehicle" style={styles.image} />
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => handleColorChange('blue')}
            style={styles.colorButton}
          >
            Blue
          </button>
          <button 
            onClick={() => handleColorChange('red')}
            style={styles.colorButton}
          >
            Red
          </button>
        </div>
      </div>
      <div style={styles.infoContainer}>
        <h1 style={styles.title}>SE03</h1>
        <p style={styles.description}>
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th colSpan="2" style={styles.tableHeader}>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Battery</td>
              <td style={styles.tableCell}>2.7Kwh</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Battery features</td>
              <td style={styles.tableCell}>
                LFP with 1500 cycles<br />
                Active Balancing<br />
                Waterproof (IP67)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Battery warranty</td>
              <td style={styles.tableCell}>3 Years</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Charging time</td>
              <td style={styles.tableCell}>4 hours (12A)</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Motor</td>
              <td style={styles.tableCell}>1500W</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Max speed</td>
              <td style={styles.tableCell}>55 km/h</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Warranty on electronics</td>
              <td style={styles.tableCell}>1 year</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Max range (@30km/h)</td>
              <td style={styles.tableCell}>150 km</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Max range (@45km/h)</td>
              <td style={styles.tableCell}>110 km</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Max range (@full speed)</td>
              <td style={styles.tableCell}>90 km</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Other key benefits</td>
              <td style={styles.tableCell}>
                Fire-safe battery<br />
                Range prediction<br />
                Comfortable ride<br />
                Stable and safe
              </td>
            </tr>
          </tbody>
        </table>
        <button style={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  image: {
    width: '80%',
    marginBottom: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  colorButton: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#333',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  infoContainer: {
    textAlign: 'left',
    width: '100%',
    maxWidth: '800px'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px'
  },
  tableHeader: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold'
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px'
  },
  buyButton: {
    display: 'block',
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '10px'
    },
    image: {
      width: '90%'
    },
    title: {
      fontSize: '36px'
    },
    description: {
      fontSize: '14px'
    },
    buyButton: {
      fontSize: '16px'
    }
  },
  '@media (max-width: 425px)': {
    imageContainer: {
      marginBottom: '15px'
    },
    image: {
      width: '100%'
    },
    buttonContainer: {
      gap: '5px'
    },
    colorButton: {
      padding: '8px 16px'
    },
    title: {
      fontSize: '28px'
    },
    description: {
      fontSize: '12px',
      marginBottom: '15px'
    },
    table: {
      marginBottom: '15px'
    },
    tableHeader: {
      padding: '6px'
    },
    tableCell: {
      padding: '6px'
    },
    buyButton: {
      fontSize: '14px',
      padding: '12px'
    }
  }
};

export default Product2;
