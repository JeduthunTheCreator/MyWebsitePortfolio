import { useRef } from 'react';
import { useTransform, motion as Motion } from 'framer-motion';
import PropTypes from 'prop-types';


export const ProjectCard = ({
    i,
    title,
    description,
    url,
    color,
    progress,
    range,
    targetScale,
    githubLink,
    liveLink,
}) => {
    const containerRef = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    const y = useTransform(progress, range, [0, -50]);

    return (
        <div
            ref={containerRef}
            className="flex h-screen items-center justify-center sticky top-0 project-container"
        >
            <Motion.div
                style={{
                    scale,
                    y,
                    zIndex: 100 - i,
                }}
                className="relative w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
                whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                }}
            >
                {/* Modern split card design */}
                <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
                    {/* Image section - full width on mobile, 55% on desktop */}
                    <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
                        <Motion.img
                            src={url}
                            alt={title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* Colored overlay on hover */}
                        <Motion.div
                            className="absolute inset-0"
                            style={{ backgroundColor: color, mixBlendMode: "overlay" }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Project number */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                            Project {i + 1}
                        </div>
                    </div>

                    {/* Content section - full width on mobile, 45% on desktop */}
                    <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div
                                    className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                            </div>

                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                                {title}
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                                {description}
                            </p>
                        </div>

                        <div className="mt-4 md:mt-auto pt-4">
                            <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

                            <div className="flex items-center gap-4">
                                {/* GitHub Link */}
                                <Motion.a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2"
                                    whileHover={{ y: -3 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={color}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    <span
                                        className="text-xs md:text-sm font-medium"
                                        style={{ color }}
                                    >
                                        Code
                                    </span>
                                </Motion.a>

                                {/* Live Link */}
                                <Motion.a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2"
                                    whileHover={{ y: -3 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={color}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    <span
                                        className="text-xs md:text-sm font-medium"
                                        style={{ color }}
                                    >
                                        Live
                                    </span>
                                </Motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </Motion.div>
        </div>
    );
}

ProjectCard.propTypes = {
    i: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    progress: PropTypes.object.isRequired,
    range: PropTypes.array.isRequired,
    targetScale: PropTypes.number.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
};


export default ProjectCard;