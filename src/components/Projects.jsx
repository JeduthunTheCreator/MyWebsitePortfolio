import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import projects from  '../hooks/data/projectsLists'

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
