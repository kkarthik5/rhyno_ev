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
      <img src={finalImg} alt="Comparison" style={styles.image} />
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
