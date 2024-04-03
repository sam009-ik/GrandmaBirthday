import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import logo from './logo.svg';
import './App.css';
import giftImage from './gift.png';

// For React Router v6 and above
import { useNavigate } from 'react-router-dom';

// Assuming navigateToPhotoPage is a placeholder for actual navigation logic,
// which could be implemented using React Router's useHistory hook or another method.

const HomePage = () => {
    let navigate = useNavigate();
    // Function to continuously trigger confetti
    const [messageShown, setMessageShown] = useState(false); // State to control the display of the message

    const handleGiftOpen = () => {
        // Start the animation and display the message
        setMessageShown(true);

        // Set a timeout for how long the message should be displayed before navigating
        setTimeout(() => {
            navigate('/photos');
        }, 3000); // 3 seconds for the message to be read
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Confetti from the top left corner
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0 },
                colors: ['#bb0000', '#ffffff', '#ff0000', '#f1c40f', '#e91e63', '#9b59b6']
            });

            // Confetti from the top right corner
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 65,
                origin: { x: 1, y: 0 },
                colors: ['#bb0000', '#ffffff', '#ff0000', '#f1c40f', '#e91e63', '#9b59b6']
            });
        }, 2000); // The interval is set to every 2000 milliseconds (2 seconds).

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="container mt-5" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="row">
                <div className="col text-center">
                    <h1 className="birthday-message display-4">Happy Birthday, Nani! 🎂</h1>
                    <div className="gift-wrapper" onClick={handleGiftOpen} style={{ cursor: 'pointer' }}>
                        <img src={giftImage} alt="Open the Gift" className="gift-icon" />
                    </div>
                    {messageShown && (
                        <div className={`message-container ${messageShown ? 'active' : ''}`}>
                            <p className="thoughtful-message">Let's take a trip down memory lane....... </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
