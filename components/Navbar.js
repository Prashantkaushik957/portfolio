"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.logo}>
                <Link href="/">PK</Link>
            </div>
            <div className={styles.links}>
                <Link href="#about">About</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#timeline">Journey</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
