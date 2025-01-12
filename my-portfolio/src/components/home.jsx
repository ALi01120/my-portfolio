import React from "react";
import "./styles/home.css";
import { TypeAnimation } from 'react-type-animation';
import img from '../assets/1.jpg';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import Navebare from "./nave";
import About from "./About";
import Skills from "./Skills";
import ServicePage from "./Service";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home_page = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <Navebare />
            <motion.div
                className="main_caintaner"
                id="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="content"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="box">
                        <h1>Hello, I'm Mustakeem 👋</h1>
                        <h2>
                            <TypeAnimation
                                sequence={['Web Developer', 1000, 'Software Engineer', 1000]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                        <p>
                            A passionate software engineer specializing in creating dynamic
                            and user-friendly web applications.
                        </p>
                        <motion.div
                            className="cv_box"
                            onClick={scrollToAbout}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p>Let's Get Started</p>
                        </motion.div>
                        <div className="social-media-links1">
                            <motion.a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}>
                                <FaLinkedin className="social-icon1" />
                            </motion.a>
                            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}>
                                <FaTwitter className="social-icon1" />
                            </motion.a>
                            <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}>
                                <FaFacebook className="social-icon1" />
                            </motion.a>
                            <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}>
                                <FaGithub className="social-icon1" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="picter_contanier"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <img src={img} alt="my imge" />
                </motion.div>
            </motion.div>
            <About />
            <Skills />
            <ServicePage />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default Home_page;
