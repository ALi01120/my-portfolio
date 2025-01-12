import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/about.css";
import img1 from '../assets/1.jpg';

const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                } else {
                    controls.start("hidden");
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <motion.div
            className="about-container"
            id="about"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.3 },
                },
            }}
        >
            <div className="about-content">
                <motion.div
                    className="about-image"
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src={img1} alt="Mustakeem" />
                </motion.div>
                <motion.div
                    className="about-text"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm Mustakeem, a passionate Web Developer and Software Engineer. I specialize in building dynamic, 
                        user-friendly web applications. With a strong foundation in software engineering, I am dedicated to 
                        creating solutions that not only meet but exceed user expectations. Let's connect and create something amazing together!
                    </p>
                    <p>
                        In my free time, I enjoy learning new technologies, contributing to open source, and exploring creative ways to solve complex problems.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
