import '../styles/PortfolioNavbar.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-inner">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/Images/Logo.png" alt="Jeduthun Logo" className="logo" />
                    </Link>
                </div>

                <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className="navbar">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/portfolio" onclick={() => setMenuOpen(false)}>Portfolio</Link></li>
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
