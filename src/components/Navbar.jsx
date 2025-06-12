import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY.current) {
                // scroll down
                setShowNavbar(false);
            } else {
                // scroll up
                setShowNavbar(true);
            }
            lastScrollY.current = window.scrollY;
        }
    };

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
                <img src={require('../assets/LOGO.png')} alt="Leads Vault Logo" width="150" height="50" />
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#process">Our Process</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#faqs">FAQs</a>
                </nav>
                <button className="access-btn">Get Access!</button>
            </div>
        </header>
    );
};

export default Navbar;
