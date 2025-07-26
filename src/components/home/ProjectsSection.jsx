import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Newspaper Management Services',
    description:
      'A full-stack app that fetches and categorizes live news from multiple APIs with user-based filters and search.',
    image: 'https://i.ibb.co/yFWDc45f/news-1172463.jpg',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Library Management Services',
    description:
      'A full-stack Library Management System that enables users to browse, borrow, and return books with real-time inventory updates and secure role-based access.',
    image: 'https://i.ibb.co/Z6bbpfXq/books-8594725-1920.jpg',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Hobbyhub Project',
    description:
      'A dynamic MERN stack platform where users can discover, join, and create local hobby-based groups with real-time interactions and secure authentication.',
    image: 'https://i.ibb.co/RkrGvYNQ/student-1258137-1920.jpg',
    demoLink: '#',
    codeLink: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-blue-900/10 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-md flex flex-col items-stretch"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 flex-grow-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;