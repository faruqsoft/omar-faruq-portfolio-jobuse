import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML5", proficiency: 90 },
    { name: "CSS3/SCSS", proficiency: 85 },
    { name: "JavaScript", proficiency: 90 },
    { name: "React.js", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "Tailwind CSS", proficiency: 85 },
  ],
  backend: [
    { name: "Node.js", proficiency: 80 },
    { name: "Express.js", proficiency: 80 },
    { name: "MongoDB", proficiency: 75 },
    { name: "PostgreSQL", proficiency: 70 },
  ],
  tools: [
    { name: "Git", proficiency: 85 },
    { name: "Docker", proficiency: 70 },
    { name: "VS Code", proficiency: 90 },
    { name: "Postman", proficiency: 85 },
  ],
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SkillBar = ({ name, proficiency }) => (
  <motion.div
    variants={cardVariants}
    className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 p-[1px] rounded-full shadow-md"
  >
    <div className="bg-white dark:bg-[#0f172a] p-3 rounded-full">
      <div className="flex justify-between mb-1 text-xs font-medium text-gray-700 dark:text-gray-300">
        <span>{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200  rounded-full">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-16"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-purple-400 text-center uppercase tracking-wide">
              {category
                .replace("frontend", "Frontend")
                .replace("backend", "Backend")
                .replace("tools", "Tools")}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {items.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
