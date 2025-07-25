const Projects = () => {
    const projects = [
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
        }
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.liveLink} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Live Demo
                                </a>
                                <a href={project.githubLink} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
