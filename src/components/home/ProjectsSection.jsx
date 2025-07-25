import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Newspaper Management Services',
      description: 'A full-stack app that fetches and categorizes live news from multiple APIs with user-based filters and search.',
      image: 'https://placehold.co/400x300?text=Project+1',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Library Management Services',
      description: 'Role-based dashboard for managing users, articles, and approval flow with chart visualizations.',
      image: 'https://placehold.co/400x300?text=Project+2',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Hobbyhub Project ',
      description: 'A React app allowing users to subscribe and access premium content with Stripe payment integration.',
      image: 'https://placehold.co/400x300?text=Project+3',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.7, ease: 'easeOut' }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden group transition-transform border-2 border-blue-500/10 hover:border-purple-500/30 duration-300"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex gap-4">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Live Demo →
                </motion.a>
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Source Code →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
