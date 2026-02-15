"use client";

import { motion } from "framer-motion";
import styles from "./Timeline.module.css";
import Image from "next/image";

const timelineData = [
    {
        year: "First Year",
        title: "Class Representative (CR)",
        description: "Acted as the bridge between faculty and students, ensuring smooth communication and student welfare.",
        category: "Leadership"
    },
    {
        year: "DTU Journey",
        title: "Emcee DTU - Inaugural Ceremony of Yuvaan",
        description: "Selected as the first recruit to host a major stage event, the inaugural ceremony of Yuvaan, the film and literature fest of DTU.",
        category: "Hosting"
    },
    {
        year: "Academics",
        title: "JEE Mains & Advanced",
        description: "Qualified JEE Mains and Advanced twice. All India Topper in Physics in JEE Mains with 99.95%ile. Admitted to IIT BHU but chose DTU IT.",
        category: "Academic"
    },
    {
        year: "Volunteering",
        title: "Desh K Mentor Conclave",
        description: "Felicitated by the Hon'ble Education Minister of Delhi for excellence in volunteering. Received 2 awards: Volunteering & Panelist.",
        category: "Volunteering"
    },
    {
        year: "Hosting",
        title: "MUN Society Orientation",
        description: "Hosted the orientation for the MUN society and conducted interviews for new recruits.",
        category: "Hosting"
    },
    {
        year: "Management",
        title: "Invictus - Official Tech Fest",
        description: "Managed PR for Invictus. Created a reel with over 100k views, driving significant engagement.",
        category: "Management"
    },
    {
        year: "2024",
        title: "Engifest DTU - PR Co-Head",
        description: "Led PR teams for Engifest, the official cultural fest of DTU.",
        category: "Leadership"
    },
    {
        year: "Conference",
        title: "DelTech MUN Conference",
        description: "Opening Ceremony Host and Committee Head for AIPPM (Biggest Committee).",
        category: "Hosting"
    },
    {
        year: "August 2024",
        title: "Freshers' Hosting",
        description: "Hosted the official freshers' event for the batch of 2024.",
        category: "Hosting"
    },
    {
        year: "Yuvaan 2024",
        title: "Concert Prom Night Host",
        description: "Hosted on the biggest stage of the college for the concert prom night.",
        category: "Hosting"
    },
    {
        year: "Festivals",
        title: "Diwali Mela",
        description: "Hosted the Diwali Mela event.",
        category: "Hosting"
    },
    {
        year: "Tech Soc",
        title: "Vice President - MACS DTU",
        description: "Leading a team of 500+ students in the official tech society of DTU. Organized orientation in BR Audi.",
        category: "Leadership"
    },
    {
        year: "Fest",
        title: "Engifest Publicity Head",
        description: "Led the Publicity department, securing multiple deals.",
        category: "Management"
    },
    {
        year: "Placement",
        title: "Placement Coordinator",
        description: "Ensured seamless coordination between companies and students, bringing multiple opportunities to campus.",
        category: "Leadership"
    }
];

const TimelineItem = ({ data, index }) => {
    return (
        <motion.div
            className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className={styles.content}>
                <span className={styles.year}>{data.year}</span>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.description}>{data.description}</p>
                <span className={styles.category}>{data.category}</span>
            </div>
            <div className={styles.dot}></div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section id="timeline" className={styles.timelineSection}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                My Journey
            </motion.h2>
            <div className={styles.timeline}>
                {/* Central Line */}
                <div className={styles.line}></div>

                {timelineData.map((item, index) => (
                    <TimelineItem key={index} data={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
