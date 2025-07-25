import { motion } from "framer-motion";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const radius = 190;
    const iconSize = 45;

    const techIcons = [
        "react",
        "javascript",
        "tailwindcss",
        "express",
        "firebase",
        "nextjs",
        "github",
        "html5",
        "css3",
        "nodejs",
        "mongodb",
        "typescript"
    ];

    const iconTypes = {
        react: "original",
        javascript: "original",
        tailwindcss: "plain",
        express: "original",
        firebase: "plain",
        nextjs: "original",
        github: "original",
        html5: "original",
        css3: "original",
        nodejs: "original",
        mongodb: "original",
        typescript: "original"
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Left Content */}
            <motion.div variants={itemVariants}>
                <motion.h1
                    className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Hi, I'm <span>Omar Faruq</span>
                </motion.h1>
                <motion.h2
                    className="text-2xl text-gray-600 mb-6"
                    variants={itemVariants}
                >
                    Full Stack Developer | React Specialist
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 mb-8"
                    variants={itemVariants}
                >
                    I create modern and responsive web applications using the latest technologies.
                    Specialized in MERN stack development with a passion for clean code and user experience.
                </motion.p>
                <motion.div className="flex gap-4" variants={itemVariants}>
                    <motion.a
                        href="#contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Hire Me
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transform transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Portfolio
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Right Image + Tech Circle */}
            <motion.div
                className="relative flex items-center justify-center w-[450px] h-[450px]"
                variants={itemVariants}
            >
                {/* Icons Circular Arrangement */}
                <div className="absolute w-full h-full">
                    {techIcons.map((icon, index) => {
                        const angle = (index / techIcons.length) * 2 * Math.PI;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={icon}
                                className="absolute"
                                style={{
                                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12,
                                    delay: index * 0.1
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    filter: "brightness(1.2)"
                                }}
                            >
                                <img
                                    src={icon === 'tailwindcss' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${iconTypes[icon]}.svg`}
                                    alt={`${icon} icon`}
                                    className={`w-full h-full object-contain bg-white/60 p-1 rounded-lg drop-shadow-md ${icon === 'tailwindcss' ? 'text-[#38bdf8]' : ''}`}
                                    onError={(e) => {
                                        if (icon === 'tailwindcss') {
                                            e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg';
                                        } else {
                                            e.target.src = "https://via.placeholder.com/50";
                                        }
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Profile Image in Middle */}
                <motion.div
                    className="relative w-80 h-80 group"
                    initial={{ rotate: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {/* Animated Border Gradient */}
                    <motion.div 
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)",
                            backgroundSize: "400% 100%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                    <motion.div 
                        className="absolute inset-0 rounded-full blur-md"
                        style={{
                            background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)",
                            backgroundSize: "400% 100%",
                            opacity: 0,
                        }}
                        whileHover={{
                            opacity: 0.7,
                        }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                    
                    {/* Profile Image */}
                    <motion.div 
                        className="absolute inset-[3px] bg-white rounded-full overflow-hidden"
                        initial={{ rotate: 0 }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                    >
                        <img
                            src="https://i.ibb.co/nWVVpCk/ACLD-196294-copy.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
