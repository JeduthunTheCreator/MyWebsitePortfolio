import { useState, useEffect } from 'react';
import './App.css';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PortfolioNavbar from './components/PortfolioNavbar';
import Footer from './components/Footer';
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@fontsource/playfair-display";
import "@fontsource/inter";
import Lenis from 'lenis';



import Home from './pages/Home';
import ProjectDetails1 from './pages/ProjectDetails1';
import ProjectDetails2 from './pages/ProjectDetails2';
import ProjectDetails3 from './pages/ProjectDetails3';
import ProjectDetails4 from './pages/ProjectDetails4';
import ProjectDetails5 from './pages/ProjectDetails5';
import ProjectDetails6 from './pages/ProjectDetails6';
import ProjectDetails7 from './pages/ProjectDetails7';
import Fashion from './pages/Fashion';
import Portfolio from './pages/Portfolio';

function ScrollReset() {
    const location = useLocation();

    useEffect(() => {
        const lenis = window.lenis;

        if (lenis) {
            lenis.stop();
            window.scrollTo(0, 0);
            requestAnimationFrame(() => {
                lenis.start();
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return null;
}

function AppContent() {
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 300,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            if (menuOpen && !e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 5, // Adjust this value to control scroll speed
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = null;
        };

    }, []);

    return (
        <>
            <ScrollReset />
            <div className="app-container">
                <Routes>
                    <Route path="/fashion" element={<FashionLayout> <Fashion /> </FashionLayout>} />
                    <Route path="/" element={<DefaultLayout> <Home /> </DefaultLayout>} />
                    <Route path="/portfolio" element={<FashionLayout> <Portfolio /> </FashionLayout>} />
                    <Route path="/projects/cloud-based-game-recommender-system" element={<DefaultLayout> <ProjectDetails1 /> </DefaultLayout>} />
                    <Route path="/projects/travel-buddy-finder" element={<DefaultLayout> <ProjectDetails2 /> </DefaultLayout>} />
                    <Route path="/projects/video-game-chatbot" element={<DefaultLayout> <ProjectDetails3 /> </DefaultLayout>} />
                    <Route path="/projects/cloud-based-file-storage" element={<DefaultLayout> <ProjectDetails4 /> </DefaultLayout>} />
                    <Route path="/projects/e-transport-marketplace" element={<DefaultLayout> <ProjectDetails5 /> </DefaultLayout>} />
                    <Route path="/projects/student-report-management-system" element={<DefaultLayout> <ProjectDetails6 /> </DefaultLayout>} />
                    <Route path="/projects/maze-master" element={<DefaultLayout> <ProjectDetails7 /> </DefaultLayout>} />
                </Routes>
            </div>
        </>
    );

}


const DefaultLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isPortfolioRoute = location.pathname.startsWith('/projects') || location.pathname === '/portfolio';

    return (
        <>
            {isPortfolioRoute ? <PortfolioNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            <div className="main-content">
                {children}
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    );
};

const FashionLayout = ({ children }) => {
    return (
        <div className="fashion-layout">
            {children}
        </div>
    );
};


function App() {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    className: 'bg-[#EDE8D0] text-[#333] font-medium px-4 py-2 rounded shadow',
                    style: {
                        background: '#fff',
                        color: '#333',
                        padding: '12px 16px',
                        fontSize: '16px',
                    },
                }}
            />
            <Router>
                <AppContent />
            </Router>
        </>
    )
}

export default App;
