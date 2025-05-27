import { useState } from 'react';
import '../styles/About.css';
import Skills from './Skills.jsx';



const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <>
            <section id="about" className="about-section">
                <div className="about_container">
                    <div className="row">

                        <div className="about-img-box">
                            <div className="about-image">
                                <img src="/Images/WhiteRose2.png" alt="About" className="img_logo" />
                            </div>
                        </div>

                        <div className="about-content-box section-title">
                            <h2 className="title">Introduction About Me</h2>
                            <div>
                                <p>Hi, I’m Jeduthun Idemudia — a full-stack developer driven by a love for AI, cloud technologies, and data, and an aspiring model exploring creativity through fashion. I bring ideas to life through clean, efficient code and creative design, with core skills in Python, Java/C++, React, Deep Learning, JavaScript, Docker, and Kubernetes.I’ve built a range of academic and personal projects that showcase both front- and back-end development, and I’m always eager to take on bold, collaborative tech challenges.</p>
                                <p>Outside of coding, I pursue modelling and digital marketing, blending tech with fashion to express creativity in fresh and innovative ways. When I’m not working, you’ll likely find me reading, playing guitar, trying out new recipes, or staying active through basketball and calisthenics.</p>
                                <p>I’m driven by a passion to innovate at the intersection of tech and fashion — and I’m always open to new opportunities. Let’s connect and create something great.</p>
                            </div>
                            <div className="buttons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-once="true">
                                <a href="/assets/Jeduthun-Tech.pdf" download className="custom-link">Download CV</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Skills />

            <section className="tabs-section" id="experience-education">
                <div className="tabs-section-container">
                    <div className="tab-header">
                        <a
                            className={`tab-link ${activeTab === 'experience' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experience')}
                        >
                            My Experiences
                        </a>
                        <a
                            className={`tab-link ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            My Education
                        </a>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'experience' && (
                            <ul className="timeline">
                                <li data-aos="fade-right">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">September 2024 – Present</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>AI Training Specialist (Remote)</h4>
                                            <p>Outlier, London</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-left">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">March 2025 - April 2025</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>Information Package Broker</h4>
                                            <p>Kharis Initiative</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-right">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">December 2024 – February 2025</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>Sales Assistant</h4>
                                            <p>Zara, London</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-left">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">May 2024 – September 2024</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>Volunteer Shop Assistant</h4>
                                            <p>White Rose Trading, Nottingham</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-right">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">September 2022</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>E-Transportation Marketplace (University Project)</h4>
                                            <p>Project Lead, Nottingham</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )}
                        {activeTab === 'education' && (
                            <ul className="timeline">
                                <li data-aos="fade-left">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">September 2021 – July 2024</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>Nottingham Trent University</h4>
                                            <p>BSc (Hons) Computer Science with Artificial Intelligence</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-right">
                                    <span className="dot" />
                                    <div className="media">
                                        <div className="d-flex">
                                            <p className="date">September 2020 - June 2021</p>
                                        </div>
                                        <div className="media-body">
                                            <h4>International Degree Foundation Program</h4>
                                            <p>Global International College Nigeria </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;
