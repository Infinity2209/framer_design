import React from 'react';
import './Features.css';

import image1 from '../assets/Features/image1.png';
import image2 from '../assets/Features/image2.png';
import image3 from '../assets/Features/image3.png';
import image4 from '../assets/Features/image4.png';

// Features component displays key features of the product with images and descriptions
const Features = () => {
    return (
        <section className="features-section">
            <div className="features-tag">
                {/* Icon and label for the features section */}
                <div className="feature-icon" aria-hidden="true" style={{ width: '34px', height: '34px', marginRight: '8px' }}>
                    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="24" width="48" height="28" rx="4" ry="4" fill="#FF5722" stroke="#E64A19" strokeWidth="1" />
                        <rect x="10" y="22" width="44" height="6" rx="3" ry="3" fill="#FF6D47" stroke="#E64A19" strokeWidth="1" />
                        <rect x="26" y="16" width="12" height="8" rx="6" ry="6" fill="none" stroke="#E64A19" strokeWidth="3" />
                        <rect x="30" y="26" width="4" height="3" rx="1" fill="#E64A19" />
                        <circle cx="14" cy="30" r="2" fill="#E64A19" />
                        <circle cx="50" cy="30" r="2" fill="#E64A19" />
                        <circle cx="12" cy="28" r="1.5" fill="#E64A19" />
                        <circle cx="52" cy="28" r="1.5" fill="#E64A19" />
                        <circle cx="12" cy="48" r="1.5" fill="#E64A19" />
                        <circle cx="52" cy="48" r="1.5" fill="#E64A19" />
                        <rect x="9" y="25" width="46" height="26" rx="3" ry="3" fill="none" stroke="#D84315" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                </div>
                <span>Features</span>
            </div>
            {/* Main heading for the features section */}
            <h1 className="features-main-heading">
                Struggling to find clients? Get 400M+ verified B2B leads for <em>just $99</em>
            </h1>
            {/* List of features with images and descriptions */}
            <div className="features-list">
                <div className="feature feature-1 left-image">
                    <div className="feature-text">
                        <div className="feature-tag">
                            <span role="img" aria-label="Magnifying Glass">🔍</span> <strong>Massive</strong> <em>datebase</em>
                        </div>
                        <p className="feature-description">
                            Instantly access 400M+ verified B2B leads and scale your business faster.
                        </p>
                        <a
                            href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-button"
                        >
                            Get Access!
                        </a>
                    </div>
                    <div className="feature-image">
                        <img src={image1} alt="Massive database preview" />
                    </div>
                </div>

                <div className="feature feature-2 right-image">
                    <div className="feature-image">
                        <img src={image2} alt="Direct decision-maker access preview" />
                    </div>
                    <div className="feature-text">
                        <div className="feature-tag">
                            <span role="img" aria-label="Briefcase">💼</span> <strong>Direct Decision-Make</strong> <em>Access</em>
                        </div>
                        <p className="feature-description">
                            Connect with CEOs, CMOs, Founders & key decision-makers effortlessly.
                        </p>
                        <a
                            href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-button"
                        >
                            Get Access!
                        </a>
                    </div>
                </div>

                <div className="feature feature-3 left-image">
                    <div className="feature-text">
                        <div className="feature-tag">
                            <span role="img" aria-label="Check Mark">✅</span> <strong>Trusted &amp;</strong> <em>Verified</em>
                        </div>
                        <p className="feature-description">
                            Sourced from <strong>Apollo</strong>, <strong>LinkedIn</strong>, and People Data Labs for maximum accuracy.
                        </p>
                        <a
                            href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-button"
                        >
                            Get Access!
                        </a>
                    </div>
                    <div className="feature-image">
                        <img src={image3} alt="Trusted and verified preview" />
                    </div>
                </div>

                <div className="feature feature-4 right-image">
                    <div className="feature-image paypal-image">
                        <img src={image4} alt="PayPal logo" />
                    </div>
                    <div className="feature-text paypal-text">
                        <h2 className="paypal-heading">
                            Why <em>spend</em> $1000+?
                        </h2>
                        <p className="paypal-subtext">
                            Get the same premium leads for just 99$ — <strong>Limited Time Offer!</strong>
                        </p>
                        <a
                            href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feature-button"
                        >
                            Get Access!
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="paypal-main-heading">
                World-Class Data, <span className="highlight-red">One Affordable Price</span>
            </h1>
        </section>
    );
};

export default Features;
