"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
    {
        title: "Project 1 Name",
        description: "Brief description of the project. What tech stack was used and what problem it solves.",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        title: "Project 2 Name",
        description: "Another cool project description. Highlight the key features and your role in it.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        title: "Project 3 Name",
        description: "Short description of this project. Maybe it's a mobile app or a utility tool.",
        tags: ["Flutter", "Firebase"],
        github: "https://github.com",
        demo: "https://github.com"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Featured Projects
            </motion.h2>

            <div className={styles.grid}>
                {projectsData.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className={styles.card}
                    >
                        <div className={styles.imagePlaceholder}>
                            {/* Project Screenshot Placeholder */}
                            <span>No Image Available</span>
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                <Link href={project.github} target="_blank" className={styles.link}>
                                    <FaGithub /> Code
                                </Link>
                                <Link href={project.demo} target="_blank" className={styles.link}>
                                    <FaExternalLinkAlt /> Live Demo
                                </Link>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default Projects;
