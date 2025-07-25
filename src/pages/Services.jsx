const Services = () => {
    const services = [
        {
            id: 1,
            icon: "🌐",
            title: "Frontend Development",
            description: "Building responsive and interactive web applications using React.js, Next.js, and modern CSS frameworks.",
            technologies: ["React.js", "Next.js", "Tailwind CSS", "Material UI"]
        },
        {
            id: 2,
            icon: "⚙️",
            title: "Backend Development",
            description: "Developing robust server-side applications and RESTful APIs using Node.js and Express.",
            technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"]
        },
        {
            id: 3,
            icon: "🔄",
            title: "Full Stack Development",
            description: "End-to-end application development from concept to deployment with modern tech stack.",
            technologies: ["MERN Stack", "TypeScript", "Docker", "AWS"]
        },
        {
            id: 4,
            icon: "📱",
            title: "Responsive Web Design",
            description: "Creating mobile-first, responsive websites that work seamlessly across all devices.",
            technologies: ["HTML5", "CSS3", "Bootstrap", "SASS"]
        },
        {
            id: 5,
            icon: "🔍",
            title: "Code Review & Optimization",
            description: "Reviewing and optimizing existing codebases for better performance and maintainability.",
            technologies: ["Performance Optimization", "Code Refactoring", "Best Practices"]
        },
        {
            id: 6,
            icon: "🚀",
            title: "API Development",
            description: "Designing and developing RESTful APIs with proper documentation and testing.",
            technologies: ["API Design", "Swagger", "Postman", "Jest"]
        }
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
