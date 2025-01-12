import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles/service.css";

const ServicePage = () => {
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
            className="service-container"
            id="services"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.1, when: "beforeChildren", staggerChildren: 0.1 },
                },
            }}
        >
            <motion.h1
                className="service-title"
                variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                My Services
            </motion.h1>
            <motion.p
                className="service-description"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                Explore the services I offer for your business needs.
            </motion.p>
            
            <div className="service-cards">
                {["Web Development", "UI/UX Design", "E-commerce Solutions", "SEO Optimization"].map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h3 className="service-card-title">{service}</h3>
                        <p className="service-card-text">
                            {service === "Web Development" && "Creating responsive and interactive websites using modern technologies."}
                            {service === "UI/UX Design" && "Designing user-friendly interfaces that focus on the best user experience."}
                            {service === "E-commerce Solutions" && "Developing custom e-commerce platforms with secure payment integrations."}
                            {service === "SEO Optimization" && "Enhancing website visibility and search engine rankings through optimized practices."}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicePage;
