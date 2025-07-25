import { motion } from 'framer-motion';

const ProjectsSection = () => {
    const projects = [1, 2, 3];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project}
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: project * 0.2 }}
                    >
                        <div className="relative overflow-hidden">
                            <motion.img
                                src={`https://placehold.co/400x300`}
                                alt={`Project ${project}`}
                                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                            <p className="text-gray-600 mb-4">
                                A brief description of the project and the technologies used.
                            </p>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#"
                                    className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Live Demo →
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Source Code →
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsSection;
