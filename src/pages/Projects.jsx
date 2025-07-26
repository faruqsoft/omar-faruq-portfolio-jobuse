import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectData from "../components/home/projectData";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const displayedProjects = showMore ? projectData : projectData.slice(0, 3);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto py-16 px-4" id="projects">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-20">
          {displayedProjects.map((project, index) => (
            <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Carousel */}
            <div className="w-full md:w-1/2 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
              <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                swipeable
                emulateTouch
              >
                {project.images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="rounded-xl"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-4 text-left">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Stack Icons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.stack.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200 shadow-sm"
                    >
                      <Icon className="text-lg text-blue-600 dark:text-purple-400" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
                      <div className="flex gap-3 pt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {showMore ? "Show Less" : "View More Projects"}
        </motion.button>
      </div>
    </div>
    </motion.div>
  );
};

export default Projects;
