import React from 'react';
import './Footer.css';
import logo from "../assets/LOGO.png";

const Footer = () => {
    const openChat = () => {
        alert('Chat functionality would be implemented here!');
    };

    const socialLinks = [
        { icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', name: 'Instagram', url: '#' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png', name: 'TikTok', url: '#' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', name: 'LinkedIn', url: '#' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', name: 'YouTube', url: '#' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', name: 'Twitter', url: '#' }
    ];

    const navigationLinks = [
        { name: 'Home', url: '#' },
        { name: 'Our Process', url: '#' },
        { name: 'Testimonials', url: '#' },
        { name: 'FAQs', url: '#' }
    ];

    return (
        <>
            <div className="footer-gradient-bg"></div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <img src={logo} alt="LOGO" />
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="social-icon"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright">
                            © Copyrights 2025 | All Rights Reserved | ZiFi Media®
                        </p>
                        <nav className="footer-nav">
                            {navigationLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="footer-nav-link"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="chat-button" onClick={openChat}>
                    {/* <span className="chat-text">Chat now!</span> */}
                    <div className="whatsapp-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;