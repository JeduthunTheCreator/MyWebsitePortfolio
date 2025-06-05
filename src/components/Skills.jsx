import React from "react";
import "../styles/Skills.css";
import  skillsData from '../data/skillsData.jsx';

import TagSphere from "./TagSphere.jsx";



const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="skills-content-box section-title">
                    <div className="text-column col-lg-6 col-md-6">
                        <h2 className="title">Tech Stack & Skills</h2>
                        <p> Over the years, I’ve had the opportunity to work with a wide range of innovative technologies and trusted open-source tools. Below is a collection of the platforms, frameworks, and systems I’ve become proficient in—each contributing to the depth and versatility of my technical skill set.</p>
                    </div>
                    <div className="sphere-column col-lg-6 col-md-6">
                        <TagSphere />
                    </div>
                </div>  
                <div className="skills-grid">
                    {skillsData.map((group, idx) => (
                        <div className="skills-card" data-aos="fade-up" key={idx}>
                            <div className="skills-title">
                                <span>{group.icon}</span> {group.category}
                            </div>
                            <div className="skills-badges">
                                {group.skills.map((skill, index) => (
                                    <span className="skill-badge" key={index}>
                                        {skill.icon && <span>{skill.icon}</span>}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
