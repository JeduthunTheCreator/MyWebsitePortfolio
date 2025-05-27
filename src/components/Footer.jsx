import "../styles/Footer.css";
import Logo from "./Logo";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Top Content */}
                    <div className="footer-top">
                        <div className="logo-link">
                            {/*<Link to="/">
                                <img src="/Images/Logo.png" alt="Jeduthun Logo" className="footer-logo" />
                            </Link>*/}
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="footer-bottom">
                        <div className="footer-content-container">
                            <div className="legal-links">
                                <p className="add">Location</p>
                                <p cassName="location">London, United Kingdom</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/JeduthunTheCreator" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/jeduthun-idemudia-116309288/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="icon" />
                                </a>
                                <a href="mailto:idemudiajeduthun@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <IoIosMail className="icon" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-text">
                            <p>© 2025 Jeduthun Idemudia. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
