import { motion } from "framer-motion";

const paragraph =
  "As a Full Stack Developer with a strong focus on React, I build scalable and intuitive web applications using the MERN stack. I’m passionate about crafting seamless user experiences, writing clean and maintainable code, and delivering performant solutions that solve real-world problems.";

const words = paragraph.split(" ");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // spacing between word animations
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AnimatedParagraph = () => {
  return (
    <motion.p
      className="text-lg text-gray-700 mb-8 leading-relaxed flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedParagraph;
