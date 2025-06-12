import React, { useState, useEffect } from 'react';
import './FAQ.css';

// FAQ component renders a list of frequently asked questions with toggle functionality
const FAQ = () => {
    // State to track which FAQ item is currently active/open; default is index 2 (third item)
    const [activeIndex, setActiveIndex] = useState(2);

    // Array of FAQ questions and answers
    const faqData = [
        {
            question: "What exactly is the B2B Leads Vault?",
            answer: "It’s a comprehensive database of over 400 million verified B2B leads from multiple industries across the globe. The data includes names, emails, company info, job titles, LinkedIn profiles, and more."
        },
        {
            question: "How do I receive the database after payment?",
            answer: "After completing the payment, simply send proof (screenshot) to our WhatsApp number at +91 8108972414 or via email. Once confirmed, you’ll receive instant access to the database."
        },
        {
            question: "What formats is the data delivered in?",
            answer: "The data is provided in easy-to-use CSV or Excel files that you can filter, search, and import into your favorite CRM or outreach tools."
        },
        {
            question: "Do I get lifetime access?",
            answer: "Yes, once you purchase the database, it's yours to keep and use without any recurring fees or subscriptions."
        },
        {
            question: "Is support available if I face any issues?",
            answer: "Absolutely! You can easily upgrade or downgrade your plan based on your evolving needs, without any hassle."
        }
    ];

    // Function to toggle the active FAQ item; closes if clicked again
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // useEffect hook to add a parallax scrolling effect to the background
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            document.body.style.backgroundPosition = `center ${rate}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="faq-container">
            <h1 className="faq-title">
                Frequently Asked <span>Questions</span>
            </h1>

            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    <div
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="question-text">{item.question}</div>
                        <div className="toggle-icon"></div>
                    </div>
                    <div className="faq-answer">
                        <div className="answer-text">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}

            <div className="disclaimer">
                <div className="disclaimer-text">
                    <strong>Disclaimer:</strong> Unauthorized resale, redistribution, or sharing of this database is
                    strictly prohibited and constitutes a violation of our internal policies. Any breach
                    may result in immediate legal action to protect our intellectual property.
                </div>
            </div>
            <div className='lastDisclaimer'>
                <strong>
                    Get your first client this week
                </strong>
                <a
                    href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="access-button"
                >
                    Get Your First Client THis Week
                </a>
            </div>
        </div>
    );
};

export default FAQ;
