"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
    const ref = useRef(null);

    // Mouse Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();

        // Calculate normalized position (-1 to 1)
        const xPos = (clientX - left) / width - 0.5;
        const yPos = (clientY - top) / height - 0.5;

        x.set(xPos * 20); // Move 20px
        y.set(yPos * 20);
    };

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Background Parallax using Scroll
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            ref={ref}
            className={styles.hero}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.content}>
                <motion.div style={{ x: springX, y: springY }}>
                    <h1 className={styles.title}>
                        Hello, I'm <br />
                        <span className={styles.name}>Prashant Kaushik</span>
                    </h1>

                    <motion.div
                        className={styles.roles}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span>Event Host</span>
                        <span className={styles.dot}>•</span>
                        <span>Tech Enthusiast</span>
                        <span className={styles.dot}>•</span>
                        <span>Physics Topper</span>
                    </motion.div>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        Crafting immersive experiences through code, communication, and leadership.
                    </motion.p>

                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link href="#projects" className={styles.primaryBtn}>
                            View Work
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Parallax Background Elements */}
            <motion.div
                className={styles.bgShape1}
                style={{ y: y1, rotate: 10 }}
            />
            <motion.div
                className={styles.bgShape2}
                style={{ y: y2, rotate: -15 }}
            />

            <div className={styles.overlay} />
        </section>
    );
};

export default Hero;
