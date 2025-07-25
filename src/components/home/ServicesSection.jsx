import { motion } from 'framer-motion';

const ServicesSection = () => {
    const services = [
        {
            icon: "💻",
            title: "Full Stack Development",
            description: "End-to-end web application development using MERN stack with modern architecture and best practices.",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            icon: "🎨",
            title: "Frontend Development",
            description: "Creating responsive, interactive UIs with modern frameworks and state-of-the-art animations.",
            technologies: ["React", "Next.js", "Tailwind CSS", "Redux"]
        },
        {
            icon: "⚙️",
            title: "Backend Development",
            description: "Building scalable REST APIs and microservices with robust architecture.",
            technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        },
        {
            icon: "🚀",
            title: "API Development",
            description: "Designing and developing RESTful APIs with proper documentation and testing.",
            technologies: ["Swagger", "Postman", "JWT", "OAuth"]
        },
        {
            icon: "🔒",
            title: "Authentication & Security",
            description: "Implementing secure authentication and authorization systems.",
            technologies: ["JWT", "OAuth", "Firebase Auth", "Passport.js"]
        },
        {
            icon: "🔄",
            title: "CI/CD Implementation",
            description: "Setting up automated deployment pipelines and DevOps practices.",
            technologies: ["GitHub Actions", "Docker", "AWS", "Vercel"]
        }
    ];

    return (
        <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Services I Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-semibold mb-2 text-xl">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesSection;
