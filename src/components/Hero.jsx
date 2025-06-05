import '../styles/Hero.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import zaraImage from '/Images/ZARA.jpeg';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {

            strings: [
                'Full-Stack Developer',
                'Bsc Computer Science (AI) Graduate',
                'AI ^200& Cloud Explorer',
                'Fashion ^200& Gaming Enthusiast',
            ],
            startDelay: 1000,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2500,
            loop: true,
            smartBackspace: false,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
        });

        return () => typed.destroy();
    }, []);


    return (
        <div className="hero-wrapper">
            <section className="hero" style={{ backgroundImage: `url(${zaraImage})` }}>
                <div className="hero-content">
                    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" data-aos-easing="ease-in-sine">
                        <h1>Hey, I'm Jeduthun</h1>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                        <p>
                            <span ref={el} />
                        </p>
                    </div>
                    <div data-aos="fade-right"  data-aos-duration="1500" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                        <a href="#contact" className="custom-link">Hire Me</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
