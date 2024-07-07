import React, { useState } from 'react';
import blackImg from '../assets/black.png'; 
import blueImg from '../assets/blue.png';  
import redImg from '../assets/red.png';    

const Product1 = () => {
  const [image, setImage] = useState(blackImg);

  const handleColorChange = (color) => {
    if (color === 'blue') setImage(blueImg);
    else if (color === 'red') setImage(redImg);
    else setImage(blackImg);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={image} alt="Vehicle" style={{ width: '80%', marginBottom: '20px' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button 
            onClick={() => handleColorChange('blue')}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#333',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Blue
          </button>
          <button 
            onClick={() => handleColorChange('red')}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#333',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Red
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          SE03 LITE
        </h1>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </p>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px'
        }}>
          <thead>
            <tr>
              <th colSpan="2" style={{
                border: '1px solid #ddd',
                padding: '8px',
                backgroundColor: '#f4f4f4',
                fontWeight: 'bold'
              }}>
                Specification
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Warranty on electronics</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 year</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Battery</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1.8Kwh</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Max range (@30km/h)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>100 km</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Motor</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1500W</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Charging time</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 hours (12A)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Battery warranty</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 Years</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Max speed</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>50 km/h</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Max range (@full speed)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>70 km</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Max range (@45km/h)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>90 km</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Other key benefits</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Fire-safe battery<br />Range prediction<br />Comfortable ride<br />Stable and safe
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Battery features</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)
              </td>
            </tr>
          </tbody>
        </table>
        <button style={{
          display: 'block',
          width: '100%',
          padding: '15px',
          fontSize: '18px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product1;
