import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        { title: "Frontend", skills: "React, Next.js, Tailwind CSS", icon: "🎨" },
        { title: "Backend", skills: "Node.js, Express, MongoDB", icon: "⚙️" },
        { title: "Tools", skills: "Git, Docker, VS Code", icon: "🛠" },
        { title: "Other", skills: "TypeScript, REST APIs, GraphQL", icon: "🔧" }
    ];

    return (
        <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Featured Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
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
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <h3 className="font-semibold mb-2 text-xl">{skill.title}</h3>
                        <p className="text-gray-600">{skill.skills}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsSection;
