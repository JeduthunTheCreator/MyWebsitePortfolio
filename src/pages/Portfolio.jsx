import { Link } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import ErrorBoundary from '../components/ErrorBoundary';
import { projects } from '../data/projects';


const Portfolio = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
        layoutEffect: false
    });

    const containerHeight = `${projects.length * 100}vh`;

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            @media screen and (width: 1366px) and (height: 768px),
                    screen and (width: 1367px) and (height: 768px),
                    screen and (width: 1368px) and (height: 769px) {
            .project-card {
                scale: 0.85;
                margin-top: -5vh;
            }
            .project-container {
                height: 90vh;
            }
            }
            `;
        document.head.appendChild(style);

        // Resolution check function
        const checkResolution = () => {
            const isTargetResolution =
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775;

            if (isTargetResolution) {
                document.documentElement.style.setProperty("--project-scale", "0.85");
                document.documentElement.style.setProperty("--project-margin", "-5vh");
            } else {
                document.documentElement.style.setProperty("--project-scale", "1");
                document.documentElement.style.setProperty("--project-margin", "0");
            }
        };

        checkResolution();
        window.addEventListener("resize", checkResolution);

        return () => {
            document.head.removeChild(style);
            window.removeEventListener("resize", checkResolution);
        };
    }, []);

    return (
        <ErrorBoundary>
            <div className="Portfolio relative bg-zinc-900 min-h-screen"  >

                {/* Right-side Navigation bar */}
                <nav className="fixed top-1/2 left-8 transform -translate-y-1/2 z-10">
                    <div className="flex flex-col items-start space-y-[16rem]">
                        <div className="flex flex-col items-center group space-y-8">
                            <Link
                                to="/"
                                className="text-[#c55911]  hover:text-[#EDE8D0] text-base transition-colors mr-4 transform rotate-180"
                                style={{
                                    writingMode: 'vertical-lr'
                                }}
                            >
                                Home
                            </Link>
                            <div className="h-[90px] w-px bg-[#c55911] transition-colors transform translate-x-[-6px] mb-[-8sppx]"></div>
                        </div>

                        <div className="flex flex-col items-center group space-y-16">
                            <div className="h-[90px] w-px bg-[#c55911] transition-colors transform translate-x-[-4px] mb-[-40px]"></div>
                            <Link
                                to="/portfolio"
                                className="text-[#c55911] hover:text-[#EDE8D0] text-base transition-colors mr-4 transform rotate-180"
                                style={{
                                    writingMode: 'vertical-lr'
                                }}
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Project Slides */}
                <div>
                    <ReactLenis root>
                        <main ref={containerRef} className="relative" style={{ height: containerHeight }}>
                            <section className="relative text-white w-full">
                                {projects.map((project, i) => {
                                    const range = [i / projects.length, (i + 1) / projects.length];
                                    return (
                                        <ProjectCard
                                            key={`p_${i}`}
                                            i={i}
                                            url={project.link}
                                            title={project.title}
                                            color={project.color}
                                            description={project.description}
                                            progress={scrollYProgress}
                                            range={range}
                                            targetScale={0.9}
                                            githubLink={project.githubLink}
                                            liveLink={project.liveLink}
                                        />
                                    );
                                })}
                            </section>
                        </main>  
                    </ReactLenis>
                </div>
            </div>
        </ErrorBoundary>
    );
};

 
export default Portfolio;
