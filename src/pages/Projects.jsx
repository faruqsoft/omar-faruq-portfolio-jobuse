import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A dynamic blog with markdown support and admin panel",
      image: "https://placehold.co/400x300",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Chat App",
      description: "Real-time chat app using socket.io and Firebase auth",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Socket.io", "Firebase"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "News Portal",
      description: "A full-featured newspaper app with categories and subscriptions",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 7,
      title: "Event Booking",
      description: "Event booking platform with seat reservation and admin dashboard",
      image: "https://placehold.co/400x300",
      technologies: ["Next.js", "PostgreSQL", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 8,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency dashboard with charts and analysis",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Chart.js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 9,
      title: "Job Portal",
      description: "A job listing portal with user auth and recruiter dashboard",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Redux", "Firebase"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 10,
      title: "Learning Platform",
      description: "A platform for online courses and quizzes",
      image: "https://placehold.co/400x300",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 11,
      title: "Weather App",
      description: "Weather forecast application using OpenWeather API",
      image: "https://placehold.co/400x300",
      technologies: ["React", "API", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 12,
      title: "Restaurant Finder",
      description: "Find and review restaurants using Google Maps API",
      image: "https://placehold.co/400x300",
      technologies: ["React", "Google Maps", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <div className="container mx-auto py-16 px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsToShow.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            View All Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
