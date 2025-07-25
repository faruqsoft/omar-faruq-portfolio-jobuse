import { motion } from "framer-motion";
import './IconHighlight.css';

const HeroSection = () => {
    let bubbleAnimationInterval;
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
    const iconSize = 60; // Increased icon size

    // SVG line path for connections
    const createConnectionPath = (startX, startY, endX, endY) => {
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        // Calculate control point offset for smoother curve
        const dx = endX - startX;
        const dy = endY - startY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const offset = distance / 4;
        
        // Add slight curve to the path
        const cpX = midX + (dy / distance) * offset;
        const cpY = midY - (dx / distance) * offset;
        
        return `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
    };

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
                    {/* SVG Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#9333ea" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {techIcons.map((icon, i) => {
                            const angle1 = (i / techIcons.length) * 2 * Math.PI;
                            const x1 = Math.cos(angle1) * radius + 225;
                            const y1 = Math.sin(angle1) * radius + 225;
                            
                            return techIcons.map((_, j) => {
                                if (j <= i) return null;
                                const angle2 = (j / techIcons.length) * 2 * Math.PI;
                                const x2 = Math.cos(angle2) * radius + 225;
                                const y2 = Math.sin(angle2) * radius + 225;
                                
                                return (
                                    <motion.path
                                        key={`${i}-${j}`}
                                        d={createConnectionPath(x1, y1, x2, y2)}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ 
                                            pathLength: 1,
                                            opacity: [0.3, 0.6, 0.3],
                                            strokeWidth: ["2px", "3px", "2px"]
                                        }}
                                        transition={{
                                            pathLength: {
                                                duration: 1.5,
                                                ease: "easeInOut",
                                                delay: (i + j) * 0.1
                                            },
                                            opacity: {
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            strokeWidth: {
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        whileHover={{
                                            strokeWidth: "4px",
                                            opacity: 0.9,
                                            filter: "url(#glow) brightness(1.5)",
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                );
                            });
                        })}
                    </svg>

                    {/* Tech Icons */}
                    {techIcons.map((icon, index) => {
                            const angle = (index / techIcons.length) * 2 * Math.PI - Math.PI / 2; // Start from top
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;                        return (
                            <motion.div
                                key={icon}
                                className="absolute animate-float tech-icon-container"
                                style={{
                                    left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                                    top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`,
                                    padding: "10px",
                                    borderRadius: "50%",
                                }}
                                initial={{ scale: 0, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: index * 0.15
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    filter: "brightness(1.2)",
                                    zIndex: 10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    }
                                }}
                                onHoverStart={() => {
                                    const lines = document.querySelectorAll('.connection-line');
                                    lines.forEach(line => {
                                        line.style.stroke = "rgba(59, 130, 246, 0.3)";
                                        line.style.strokeDasharray = "4";
                                        line.style.animation = "connectLine 1s ease forwards";
                                    });
                                }}
                                onHoverEnd={() => {
                                    const lines = document.querySelectorAll('.connection-line');
                                    lines.forEach(line => {
                                        line.style.stroke = "rgba(59, 130, 246, 0)";
                                        line.style.animation = "none";
                                    });
                                }}
                            >
                                <img
                                    src={icon === 'tailwindcss' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${iconTypes[icon]}.svg`}
                                    alt={`${icon} icon`}
                                    className={`w-full h-full object-contain bg-white/70 p-2.5 rounded-xl drop-shadow-lg ${icon === 'tailwindcss' ? 'text-[#38bdf8]' : ''}`}
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
                    whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
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
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            backgroundPosition: {
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                            },
                            scale: {
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }
                        }}
                    />
                    <motion.div 
                        className="absolute inset-0 rounded-full blur-lg"
                        style={{
                            background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)",
                            backgroundSize: "400% 100%",
                            opacity: 0,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            opacity: {
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            },
                            backgroundPosition: {
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                            },
                            scale: {
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }
                        }}
                    />
                    
                    {/* Profile Image */}
                    <motion.div 
                        className="absolute inset-[3px] bg-white rounded-full overflow-hidden cursor-pointer"
                        initial={{ rotate: 0 }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        onHoverStart={() => {
                            const techIconElements = document.querySelectorAll('.tech-icon-container');
                            let currentIndex = 0;
                            
                            // Create highlight elements if they don't exist
                            techIconElements.forEach((element) => {
                                if (!element.querySelector('.icon-highlight')) {
                                    const highlight = document.createElement('div');
                                    highlight.className = 'icon-highlight';
                                    element.appendChild(highlight);
                                }
                            });
                            
                            // Clear any existing interval
                            if (bubbleAnimationInterval) {
                                clearInterval(bubbleAnimationInterval);
                            }
                            
                            // Start continuous animation
                            bubbleAnimationInterval = setInterval(() => {
                                // Remove animation from all icons
                                techIconElements.forEach(element => {
                                    const highlight = element.querySelector('.icon-highlight');
                                    if (highlight) {
                                        highlight.style.animation = '';
                                    }
                                });
                                
                                // Add animation to current icon
                                const currentElement = techIconElements[currentIndex];
                                const highlight = currentElement.querySelector('.icon-highlight');
                                if (highlight) {
                                    highlight.style.animation = 'iconBubbleHighlight 1s ease';
                                }
                                
                                // Move to next icon, loop back to start if at end
                                currentIndex = (currentIndex + 1) % techIconElements.length;
                            }, 1000); // Move to next icon every 1 second
                        }}
                        onHoverEnd={() => {
                            // Clear the animation interval
                            if (bubbleAnimationInterval) {
                                clearInterval(bubbleAnimationInterval);
                                bubbleAnimationInterval = null;
                            }
                            
                            // Remove animations from all icons
                            const highlights = document.querySelectorAll('.icon-highlight');
                            highlights.forEach(highlight => {
                                highlight.style.animation = '';
                            });
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
