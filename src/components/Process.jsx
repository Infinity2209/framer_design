import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-tag">
                <div className="process-icon" aria-hidden="true" style={{ width: '34px', height: '34px', marginRight: '8px' }}>
                    <svg width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="16" y="10" width="24" height="32" rx="1" ry="1" fill="#FF5722" />
                        <path d="M32 12 L40 20 L32 20 Z" fill="#E64A19" />
                        <rect x="20" y="24" width="12" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                        <rect x="20" y="27" width="14" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                        <rect x="20" y="30" width="10" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                        <rect x="20" y="33" width="13" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                        <rect x="20" y="36" width="9" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                        <rect x="20" y="39" width="11" height="1" rx="0.5" fill="#FFFFFF" opacity="0.8" />
                    </svg>
                </div>
                <span>Process</span>
            </div>
            <h1 className="process-main-heading">
                Access Your 400M+ B2B Leads <br />
                <em>Database</em> in 4 Simple Steps
            </h1>
            <p className="process-subheading">
                Access Industry-Leading Data You Can Trust Only For $99 Lifetime Access
            </p>
            <div className="process-steps">
                <div className="step">
                    <div className="step-icon">
                        <dotlottie-player
                            src="https://framerusercontent.com/assets/5agvGTKvDzdOMKNfAqox82a1LVE.json"
                            autoplay
                            loop
                            background="rgba(0, 0, 0, 0)"
                            speed="1"
                            direction="1"
                            style={{ height: '100px', width: '100px', margin: '0 auto 1rem auto' }}
                        ></dotlottie-player>
                    </div>
                    <h2 className="step-title">Make Your Payment</h2>
                    <p className="step-description">
                        Use our secure gateway to complete your purchase.
                    </p>
                </div>
                <div className="step">
                    <h2 className="step-title">Send Payment Confirmation</h2>
                    <p className="step-description">
                        Share a screenshot of your transaction via WhatsApp (+91 81089 72414) or email for quick verification.
                    </p>
                </div>
                <div className="step">
                    <h2 className="step-title">Get Verified Instantly</h2>
                    <p className="step-description">
                        We’ll confirm your payment and prepare your file for delivery.
                    </p>
                </div>
                <div className="step">
                    <h2 className="step-title">Receive the Database</h2>
                    <p className="step-description">
                        Get instant access to the full database — delivered directly to your inbox.
                    </p>
                </div>
            </div>
            <div className="legal-warning">
                <h2><span className="highlight-red">Resale Forbidden</span> — Legal Action Will Be Taken!</h2>
                <p>
                    The B2B Leads Vault database is legally protected under copyright and intellectual property laws. Any unauthorized resale, distribution, or sharing is strictly prohibited.
                    Violators will face <strong>immediate legal action</strong>, including lawsuits and financial penalties.
                </p>
                <p>
                    By purchasing or using this database, <span className="highlight-red">you agree to these terms.</span>
                </p>
            </div>
            <a
                href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                target="_blank"
                rel="noopener noreferrer"
                className="process-button"
            >
                Get Instant Access Now - Only $99 &rarr;
            </a>
        </section>
    );
};

export default Process;
