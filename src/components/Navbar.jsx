import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

// Navbar component renders the top navigation bar with show/hide on scroll functionality
const Navbar = () => {
    // State to control visibility of navbar
    const [showNavbar, setShowNavbar] = useState(true);
    // Ref to store last scroll position
    const lastScrollY = useRef(0);

    // Function to control navbar visibility based on scroll direction
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY.current) {
                // User scrolled down - hide navbar
                setShowNavbar(false);
            } else {
                // User scrolled up - show navbar
                setShowNavbar(true);
            }
            lastScrollY.current = window.scrollY;
        }
    };

    // Add scroll event listener on mount and clean up on unmount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, []);

    return (
        <header className={`navbar ${showNavbar ? 'active' : 'hidden'}`}>
            <div className="navbar-container">
                {/* Company logo */}
                <img src={require('../assets/LOGO.png')} alt="Leads Vault Logo" width="150" height="50" />
                {/* Navigation links */}
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#process">Our Process</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#faqs">FAQs</a>
                </nav>
                {/* Access button */}
                <button className="access-btn">Get Access!</button>
            </div>
        </header>
    );
};

export default Navbar;
