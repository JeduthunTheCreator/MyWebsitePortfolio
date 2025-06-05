import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Cloud Based Game Recommender System",
        description: "Cloud - powered game recommendation system that predicts your gaming preferences by learning from similar players—delivering personalized suggestions tailored to your unique taste.",
        icon: "bi bi-controller",
        delay: 100,
        link: '/projects/cloud-based-game-recommender-system',
        skills: [
            { name: "Python" },
            { name: "Shell Scripting" },
            { name: "Streamlit" },
            { name: "Redis" },
            { name: "Docker" },
            { name: "Azure Kubernetes Service" },
            { name: "Pycharm" },
        ]
    },
    {
        title: "Travel Buddy Finder",
        description: "Find travel buddies, plan trips, and explore with real-time weather updates—powered by RESTful services.",
        icon: "bi bi-luggage",
        delay: 200,
        link: '/projects/travel-buddy-finder',
        skills: [
            { name: "Java" },
            { name: "Python" },
            { name: "SQlite" },
            { name: "Tomcat" },
            { name: "REST APIs" },
            { name: "Springboot" },
            { name: "Pycharm" },
        ]
    },
    {
        title: "Video Game Chatbot",
        description: "A video game chatbot capable of conversational capabilitites, logical reasoning and image classification.",
        icon: "bi bi-chat-dots",
        delay: 300,
        link: '/projects/video-game-chatbot',
        skills: [
            { name: "Python" },
            { name: "AIML Patterns" },
            { name: "NLP" },
            { name: "NLTK Library" },
            { name: "Deep Learning" },
            { name: "CNN" },
            { name: "Expert Systems" },
            { name: "Pycharm" },
        ]
    },
    {
        title: "Cloud Based File Storage",
        description: "A modern cloud file server that lets users easily store, manage, and control their files with both basic and advanced functionalities.",
        icon: "bi bi-file-lock",
        delay: 400,
        link: '/projects/cloud-based-file-storage',
        skills: [
            { name: "Java" },
            { name: "JavaFX" },
            { name: "Shell Scripting" },
            { name: "Docker" },
            { name: "Netbeans" },
            { name: "Remote Desktop" },
            { name: "Terminal" },
        ]
    },
    {
        title: "E-Transport Marketplace",
        description: "Virtual platform for road transport that connects users all around the world to facilitate easier transactions.",
        icon: "bi bi-shop",
        delay: 500,
        link: '/projects/e-transport-marketplace',
        skills: [
            { name: "C++" },
            { name: "IOstream" },
            { name: "Cctype" },
            { name: "C++ STL Algorithm" },
            { name: "Sqlite3" },
            { name: "MQTT Protocol" },
            { name: "CLion" },
        ]
    },
    {
        title: "Student Report Management System",
        description: "Grading system that collects and stores student's details and provides the overall grade result.",
        icon: "bi bi-kanban",
        delay: 600,
        link: '/projects/student-report-management-system',
        skills: [
            { name: "C++" },
            { name: "SQL" },
            { name: "Visual Studio" },
        ]
    },
    {
        title: "Maze Master: AI-Powered JetBot Navigation System",
        description: "An AI-driven robotics project that fuses real-time obstacle avoidance, object and traffic sign recognition, and SLAM to autonomously guide a JetBot through a dynamic maze. It showcases intelligent navigation at the intersection of computer vision, robotics, and machine learning.",
        icon: "bi bi-robot",
        delay: 700,
        link: '/projects/maze-master',
        skills: [
            { name: "Python" },
            { name: "Shell Scripting" },
            { name: "ROS2" },
            { name: "Nav2" },
            { name: "SLAM" },
            { name: "YOLO" },
            { name: "CNN" },
            { name: "Tensorflow" },
            { name: "OpenCV" },
            { name: "ROS2 Bags" },
            { name: "ROSTest" },
            { name: "Gazebo" },
            { name: "RViz" },
            { name: "Docker" },
            { name: "Jupyter Labs" },
            { name: "Git" },
        ]
    }
];

const Projects = () => {

    return (
        <section className="projects-section" id="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2 className="title">Projects</h2>
                    <p>Here's where ideas meet execution—from chatty game bots to cloud storage, travel apps, and more. These projects are snapshots of my journey as a developer. Dive in and explore what I've been building.</p>
                </div>

                <div className="row gy-4">
                    {projects.map((project, index) => (
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={project.delay} key={index}>
                            <div to={project.link} className="project-link-wrapper">
                                <div className="project-item position-relative">
                                    <div className="icon">
                                        <i className={project.icon}></i>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-overlay">
                                        <div className="project-skills-badges">
                                            {project.skills.map((skill, index) => (
                                                <span className="project-skill-badge" key={index}>
                                                    {skill.name}
                                                </span>
                                            ))}
                                            <p className="overlay-text"> COMING SOON!! </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
