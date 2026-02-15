"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hello, I'm <span className={styles.name}>Prashant Kaushik</span>
                </motion.h1>

                <motion.div
                    className={styles.roles}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <span className={styles.role}>Event Host</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.role}>Tech Enthusiast</span>
                    <span className={styles.separator}>|</span>
                    <span className={styles.role}>Physics Topper</span>
                </motion.div>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Crafting experiences through code, communication, and leadership.
                </motion.p>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <Link href="#projects" className={styles.primaryBtn}>
                        View Work
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Background Decor */}
            <motion.div
                className={styles.circle1}
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={styles.circle2}
                animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
        </section>
    );
};

export default Hero;
