"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import SpotlightCard from "./SpotlightCard";
import { FaCode, FaMicrophone, FaBrain, FaCalculator } from "react-icons/fa";

const skillsData = [
    {
        category: "Technical",
        icon: <FaCode />,
        skills: ["Next.js", "React", "Python", "C++", "Data Structures"]
    },
    {
        category: "Data Science & AI",
        icon: <FaBrain />,
        skills: ["Machine Learning", "Deep Learning", "Data Analysis", "TensorFlow"]
    },
    {
        category: "Mathematics",
        icon: <FaCalculator />,
        skills: ["Advanced Calculus", "Linear Algebra", "Probability", "Statistics"]
    },
    {
        category: "Soft Skills",
        icon: <FaMicrophone />,
        skills: ["Public Speaking", "Event Hosting", "Leadership", "Communication"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Skills & Expertise
            </motion.h2>

            <div className={styles.grid}>
                {skillsData.map((category, index) => (
                    <SpotlightCard
                        key={index}
                        className={styles.card}
                    >
                        <div className={styles.iconWrapper}>
                            {category.icon}
                        </div>
                        <h3 className={styles.categoryTitle}>{category.category}</h3>
                        <ul className={styles.list}>
                            {category.skills.map((skill, i) => (
                                <li key={i} className={styles.skillItem}>{skill}</li>
                            ))}
                        </ul>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default Skills;
