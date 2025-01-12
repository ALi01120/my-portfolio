import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGit, FaGithub } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> }
    ];

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
        <div className="skills-container" id="skill" ref={ref}>
            <motion.h2
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
            >
                My Skills
            </motion.h2>
            <motion.div
                className="skills-grid"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { staggerChildren: 0.2, duration: 0.5 },
                    },
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {skill.icon}
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
