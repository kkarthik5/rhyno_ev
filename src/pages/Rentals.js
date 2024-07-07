import React from 'react';
import logo from '../assets/logo.png'; // Update the path to your logo2.png

const Rentals = () => {
    const rentalInfoStyle = {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '80%',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#fff',
    };

    const imageStyle = {
        maxWidth: '450px', // Adjust the size as needed
        height: '250px',
        marginBottom: '20px'
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img src={logo} alt="Rhyno EV" style={imageStyle} />
            <div style={rentalInfoStyle}>
                <p>
                    Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.
                </p>
                <p>
                    Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
                </p>
                <p>
                    Download our rental app: <a href="https://play.google.com/store">Android</a> | <a href="https://www.apple.com/app-store/">Apple</a>
                </p>
            </div>
        </div>
    );
};

export default Rentals;
