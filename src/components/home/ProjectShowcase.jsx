import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from "react-icons/fa";
import projectData from "./projectData";
import "./ProjectShowcase.css";

const ProjectShowcase = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="relative z-10 flex flex-col gap-32">
        {projectData.map((project, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === projectData.length - 1;

          return (
            <div key={project.id} className="relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Carousel */}
                <div className="w-full md:w-1/2 rounded-xl shadow-xl overflow-hidden z-20">
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
                          alt={`Project ${project.id} screenshot ${idx + 1}`}
                          className="rounded-xl"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>

                {/* Info */}
                <div className="w-full md:w-1/2 space-y-4 text-left z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.stack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800 shadow-sm"
                        >
                          <Icon className="text-lg text-indigo-600" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4 flex-wrap">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:scale-105 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 flex items-center gap-2 bg-gray-800 text-white rounded-lg shadow hover:scale-105 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Connector between every 2 projects */}
              {index % 2 === 0 && index < projectData.length - 1 && (
                <div className="connector-wrapper">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6 }}
                    className="connector-line"
                  />

                  {/* Left probe */}
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [-5, 5, -5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="left-probe"
                  ></motion.span>

                  {/* Right probe */}
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [5, -5, 5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.4,
                    }}
                    className="right-probe"
                  ></motion.span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
