import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaRocket,
  FaLock,
  FaSyncAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSwagger,
  SiPostman,
  SiJsonwebtokens,
  SiAuth0,
  SiFirebase,
  SiPassport,
  SiVercel,
  SiGithubactions,
} from 'react-icons/si';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Development',
      description: 'End-to-end web apps using MERN with clean architecture, performance, and maintainability.',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> },
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: 'Frontend Development',
      description: 'Beautiful, responsive UIs with modern frameworks and animation-rich user experiences.',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux', icon: <SiRedux /> },
      ],
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust APIs & scalable backends using Node, Express, and modern databases.',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      icon: <FaRocket />,
      title: 'API Development',
      description: 'RESTful API design with documentation, versioning, and security best practices.',
      technologies: [
        { name: 'Swagger', icon: <SiSwagger /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'JWT', icon: <SiJsonwebtokens /> },
        { name: 'OAuth', icon: <SiAuth0 /> },
      ],
    },
    {
      icon: <FaLock />,
      title: 'Authentication & Security',
      description: 'Secure login systems with token-based and OAuth authentication.',
      technologies: [
        { name: 'JWT', icon: <SiJsonwebtokens /> },
        { name: 'OAuth', icon: <SiAuth0 /> },
        { name: 'Firebase Auth', icon: <SiFirebase /> },
        { name: 'Passport.js', icon: <SiPassport /> },
      ],
    },
    {
      icon: <FaSyncAlt />,
      title: 'CI/CD Implementation',
      description: 'Automated deployment workflows using GitHub Actions, Docker, and cloud platforms.',
      technologies: [
        { name: 'GitHub action', icon: <SiGithubactions /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Vercel', icon: <SiVercel /> },
      ],
    },
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
  transition={{ delay: index * 0.15, type: 'spring', stiffness: 70 }}
>
  <div className="flex justify-center items-center mb-4 text-blue-600" style={{ height: '80px' }}>
    <span className="text-5xl">{service.icon}</span>
  </div>
  <h3 className="font-semibold mb-3 text-xl text-gray-800 text-center">{service.title}</h3>
  <p className="text-gray-600 mb-5 text-sm leading-relaxed text-center">{service.description}</p>

  {/* Technologies */}
  <div className="grid grid-cols-2 gap-3">
    {service.technologies.map((tech, idx) => (
      <motion.div
        key={idx}
        className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-white/20"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1 }}
      >
        <span className="text-lg">{tech.icon}</span>
        {tech.name}
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
