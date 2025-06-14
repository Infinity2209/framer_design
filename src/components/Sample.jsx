import React, { useState } from 'react';
import './Sample.css';

// Array of sample images to display in the carousel
const images = [
    require('../assets/DataSample/image1.png'),
    require('../assets/DataSample/image2.png'),
    require('../assets/DataSample/image3.png'),
    require('../assets/DataSample/image4.png'),
    require('../assets/DataSample/image5.png'),
    require('../assets/DataSample/image6.png'),
];

// Sample component displays a carousel of sample data images with navigation buttons
const Sample = () => {
    // State to track the starting index of visible images in the carousel
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    // Handler for previous button click - wraps around to the end if at start
    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? images.length - visibleCount : prevIndex - 1
        );
    };

    // Handler for next button click - wraps around to the start if at end
    const handleNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex === images.length - visibleCount ? 0 : prevIndex + 1
        );
    };

    // Get the currently visible images based on startIndex and visibleCount
    const visibleImages = images.slice(startIndex, startIndex + visibleCount);

    // Handle wrap-around for last images to fill visible slots
    if (visibleImages.length < visibleCount) {
        visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
    }

    return (
        <section className="sample-section">
            <div className="sample-tag">
                {/* Icon for the samples section */}
                <div className="sample-icon" aria-hidden="true">
                    <img src={require('../assets/icon.png')} alt="Samples Icon" width="32" height="32" />
                </div>
                <span>Samples</span>
            </div>
            {/* Heading and subtitle */}
            <h1 className="sample-heading">Data sample and proof</h1>
            <p className="sample-subtitle">Real data. Real results. Full transparency.</p>
            {/* Carousel with navigation buttons */}
            <div className="sample-carousel">
                <button onClick={handlePrev} className="sample-arrow prev" aria-label="Previous">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="sample-images">
                    {visibleImages.map((img, idx) => (
                        <div key={idx} className="sample-image-wrapper">
                            <img src={img} alt={`Sample ${startIndex + idx + 1}`} />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="sample-arrow next" aria-label="Next">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            {/* Link to access sample data */}
            <a
                href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                target="_blank"
                rel="noopener noreferrer"
                className="access-button"
            >
                Access Sample Data! &rarr;
            </a>
        </section>
    );
};

export default Sample;
