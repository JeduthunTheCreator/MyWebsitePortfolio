import { useState, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import '../styles/About.css';
import Skills from './Skills.jsx';


const About = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const imageRef = useRef(null);
    const [activeTab, setActiveTab] = useState('experience');

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    }


    const handleMouseMove = (e) => {
        if (imageRef.current) {
    
            const { left, top, width, height } = imageRef.current.getBoundingClientRect();
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

            const xRaw = ((e.clientX - left) / width) * 60 - 30;
            const yRaw = ((e.clientY - top) / height) * 60 - 30;

            const x = clamp(xRaw, -30, 30);
            const y = clamp(yRaw, -30, 30);

            setPosition({ x, y });
        }
    };


    return (
        <>
            <section id="about" className="about-section" ref={imageRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="about_container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img-box">
                                <Motion.div className="about-image">
                                    <Motion.div
                                        className="image-layer main-image"
                                        animate={{
                                            x: position.x * 0.2,
                                            y: position.y * 0.2
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 50,
                                            damping: 40,
                                        }}
                                    >
                                        <img src="/assets/about-image.png" alt="main-image"/>
                                    </Motion.div>

                                    <Motion.div
                                        className="image-layer overlay-1"
                                        animate={{
                                            x: position.x * 0.3,
                                            y: position.y * 0.3
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 50,
                                            damping: 40
                                        }}
                                    >
                                        <img src="/assets/about-bg.jpeg" alt="Overlay 1" />
                                    </Motion.div>

                                    <Motion.div
                                        className="image-layer overlay-2"
                                        animate={{
                                            x: position.x * 0.5,
                                            y: position.y * 0.5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 50,
                                            damping: 40
                                        }}
                                    >
                                        <img src="/assets/Film-bg.png" alt="Overlay 2" />
                                    </Motion.div>

                                </Motion.div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content-box section-title ">
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
                </div>
            </section>

            <Skills />

            <section className="tabs-section" id="experience-education" style={{ backgroundImage: `url("/assets/Beige3.jpg")` }}>
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
