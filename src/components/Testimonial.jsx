import React from 'react';
import './Testimonial.css';
import image1 from '../assets/Reviews/image1.png';
import image2 from '../assets/Reviews/image2.png';
import image3 from '../assets/Reviews/image3.png';
import image4 from '../assets/Reviews/image4.png';
import image5 from '../assets/Reviews/image5.png';
import image6 from '../assets/Reviews/image6.png';

// Array of testimonial images
const images = [
    require('../assets/Testimonial/image1.png'),
    require('../assets/Testimonial/image2.png'),
    require('../assets/Testimonial/image3.png'),
];

// Array of testimonial data including quote, name, title, and image
const testimonials = [
    {
        quote: "We've used several tools in the past, but this was by far the most cost-effective and immediate solution. Highly recommend to early-stage B2B founders.",
        name: "Jason Melby",
        title: "Co-founder, MelbyTech Solutions",
        image: images[0]
    },
    {
        quote: "The quality of leads exceeded expectations. Within a week, we booked 4 qualified demos directly from the database. Simple process, real results.",
        name: "Karen Schneider",
        title: "Founder, KNS Consulting",
        image: images[1]
    },
    {
        quote: "Super intuitive process. Got the leads within minutes after payment, and by week we were already closing discovery calls.",
        name: "Andrew Wellmeierer",
        title: "Founder & CEO, AW Marketing",
        image: images[2]
    }
];

// Testimonial component renders customer testimonials and reviews
const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-tag">
                {/* Testimonial icon */}
                <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="20" fill="#FF5722" />
                    <circle cx="26" cy="26" r="2" fill="#FFFFFF" />
                    <circle cx="38" cy="26" r="2" fill="#FFFFFF" />
                    <path d="M24 36 Q32 42 40 36" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
                <span>Testimonials</span>
            </div>
            <h1 className="testimonial-main-heading">
                See how access to 400M+ contacts <em>changed</em> the game.
            </h1>
            <p className="testimonial-subheading">
                Access Industry-Leading Data You Can Trust Only For $99 Lifetime Access
            </p>
            {/* Testimonial Cards */}
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <blockquote className="testimonial-quote">
                            "{testimonial.quote}"
                        </blockquote>

                        <div className="testimonial-profile">
                            <div className="testimonial-avatar">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                            </div>
                            <div className="testimonial-info">
                                <h4 className="testimonial-name">{testimonial.name}</h4>
                                <p className="testimonial-title">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="testimonial-main-heading">
                Not convinced? Check out some of our <em>reviews below!</em>
            </h1>
            {/* Review images */}
            <div className="reviews-images">
                <img src={image1} alt="Reviews 1" />
                <img src={image2} alt="Reviews 2" />
                <img src={image3} alt="Reviews 3" />
                <img src={image4} alt="Reviews 4" />
                <img src={image5} alt="Reviews 5" />
                <img src={image6} alt="Reviews 6" />
            </div>
            {/* Access button */}
            <a
                href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                target="_blank"
                rel="noopener noreferrer"
                className="access-button"
            >
                Get Instant Access Now - Only $99 &rarr;
            </a>
        </section>

    );
};

export default Testimonial;
