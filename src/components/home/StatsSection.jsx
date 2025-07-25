import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { number: "50+", text: "Projects Completed" },
        { number: "30+", text: "Happy Clients" },
        { number: "5+", text: "Years Experience" },
        { number: "20+", text: "Technologies" }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                >
                    <motion.h3 
                        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2"
                        whileHover={{ scale: 1.1 }}
                    >
                        {stat.number}
                    </motion.h3>
                    <p className="text-gray-600">{stat.text}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsSection;
