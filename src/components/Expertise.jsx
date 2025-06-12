import React from 'react';
import './Expertise.css';
import image1 from '../assets/Expertise/image1.png';
import image2 from '../assets/Expertise/image2.png';
import image3 from '../assets/Expertise/image3.png';
import image4 from '../assets/Expertise/image4.png';
import image5 from '../assets/Expertise/image5.png';
import image6 from '../assets/Expertise/image6.png';

const Expertise = () => {
    return (
        <section className="expertise-section">
            <div className="expertise-tag">
                <div className="expertise-icon" aria-hidden="true" style={{ width: '24px', height: '24px', marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.09 8.26L20.97 8.27L15.45 12.14L17.54 18.4L12 14.53L6.46 18.4L8.55 12.14L3.03 8.27L9.91 8.26L12 2Z" fill="#FF5722"/>
                        <circle cx="18" cy="5" r="1.5" fill="#FF5722" />
                        <circle cx="19.5" cy="8" r="1" fill="#FF5722" />
                        <circle cx="15" cy="7" r="1" fill="#FF5722" />
                    </svg>
                </div>
                <span>Our Expertise</span>
            </div>
            <h1 className="expertise-main-heading">
                Expertise that drives your success
            </h1>
            <div className="expertise-images">
                <img src={image1} alt="Expertise 1" />
                <img src={image2} alt="Expertise 2" />
                <img src={image3} alt="Expertise 3" />
                <img src={image4} alt="Expertise 4" />
                <img src={image5} alt="Expertise 5" />
                <img src={image6} alt="Expertise 6" />
            </div>
        </section>
    );
};

export default Expertise;
