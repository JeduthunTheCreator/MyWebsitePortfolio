import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import FashionSwiper from '../components/FashionSwiper';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Services />
            <FashionSwiper />
            <Contact />
        </div>
    );
};

export default Home;
