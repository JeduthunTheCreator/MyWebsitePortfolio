import '../styles/Navbar.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            rootMargin: '-20% 0px -30% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (sectionId) => {
        setMenuOpen(false);

        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-inner">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/Images/Logo.png" alt="Jeduthun Logo" className="logo" />
                    </Link>
                </div>

                <div className="relative">
                    <button className={`menu-toggle ${menuOpen ? "open" : ""}`}onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>

                <nav className= "navbar">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><Link to="/" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</Link></li>
                        <li><Link to="/fashion">Fashion</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Navbar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
};

export default Navbar;
