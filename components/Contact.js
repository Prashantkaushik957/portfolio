"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.heading}>Get In Touch</h2>
                <p className={styles.text}>
                    Whether you want to discuss a project, need a host for your next event,
                    or just want to say hi, my inbox is always open.
                </p>

                <a href="mailto:kaushikprashant243@gmail.com" className={styles.emailBtn}>
                    <FaEnvelope /> Say Hello
                </a>

                <div className={styles.socials}>
                    <a href="https://linkedin.com/in/prashant-kaushik" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/prashant-kaushik" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/prashant_kaushik" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaInstagram />
                    </a>
                </div>

                <footer className={styles.footer}>
                    <p>Designed & Built by Prashant Kaushik © {new Date().getFullYear()}</p>
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
