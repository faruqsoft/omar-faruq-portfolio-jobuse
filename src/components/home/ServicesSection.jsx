import { motion } from 'framer-motion';

const ServicesSection = () => {
    const services = [
        {
            icon: "💻",
            title: "Full Stack Development",
            description: "End-to-end web apps using MERN with clean architecture, performance, and maintainability.",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            icon: "🎨",
            title: "Frontend Development",
            description: "Beautiful, responsive UIs with modern frameworks and animation-rich user experiences.",
            technologies: ["React", "Next.js", "Tailwind CSS", "Redux"]
        },
        {
            icon: "⚙️",
            title: "Backend Development",
            description: "Robust APIs & scalable backends using Node, Express, and modern databases.",
            technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            icon: "🚀",
            title: "API Development",
            description: "RESTful API design with documentation, versioning, and security best practices.",
            technologies: ["Swagger", "Postman", "JWT", "OAuth"]
        },
        {
            icon: "🔒",
            title: "Authentication & Security",
            description: "Secure login systems with token-based and OAuth authentication.",
            technologies: ["JWT", "OAuth", "Firebase Auth", "Passport.js"]
        },
        {
            icon: "🔄",
            title: "CI/CD Implementation",
            description: "Automated deployment workflows using GitHub Actions, Docker, and cloud platforms.",
            technologies: ["GitHub Actions", "Docker", "AWS", "Vercel"]
        }
    ];

    return (
        <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Services I Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white text-black p-6 rounded-2xl shadow-xl border border-transparent transition-all duration-300 hover:shadow-purple-200/30"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 70 }}
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-semibold mb-3 text-xl text-gray-800 ">
                            {service.title}
                        </h3>
                        <p className="text-gray-600  mb-5 text-sm leading-relaxed">
                            {service.description}
                        </p>

                        {/* Technologies */}
                        <div className="grid grid-cols-2 gap-2">
                            {service.technologies.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    className="text-sm font-medium px-3 py-1 rounded-full text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-white/20"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesSection;
