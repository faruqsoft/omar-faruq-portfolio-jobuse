import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Firebase", "JWT", "Mongoose"],
      icon: "⚙️"
    },
    {
      title: "Dev Tools & Deployment",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "VS Code", "Postman"],
      icon: "🛠️"
    },
    {
      title: "Additional Technologies",
      skills: ["Redux", "React Query", "Prisma", "GraphQL", "Socket.io", "WebSockets"],
      icon: "🚀"
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
        Featured Skills
      </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {skills.map((category, catIndex) => (
    <motion.div
      key={catIndex}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: catIndex * 0.1 }}
    >
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="font-semibold mb-4 text-xl">{category.title}</h3>

      {/* 👉 Make skills in 2 columns */}
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-0.5 rounded-full text-center text-sm shadow-sm"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: skillIndex * 0.4 + catIndex * 0.4, 
              type: "spring", 
              stiffness: 50 
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  ))}
</div>

    </motion.div>
  );
};

export default SkillsSection;
