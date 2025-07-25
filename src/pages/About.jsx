const About = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="https://placehold.co/400x500" alt="Profile" className="rounded-lg shadow-lg" />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
                    <p className="mb-4">
                        Hello! I'm a passionate Full Stack Developer with expertise in React.js, Node.js, and modern web technologies.
                        With 3+ years of experience in web development, I specialize in creating responsive, user-friendly applications
                        that solve real-world problems.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-3">Personal Info</h4>
                        <ul className="space-y-2">
                            <li><span className="font-medium">Name:</span> Your Name</li>
                            <li><span className="font-medium">Age:</span> 25</li>
                            <li><span className="font-medium">Location:</span> City, Country</li>
                            <li><span className="font-medium">Email:</span> your.email@example.com</li>
                            <li><span className="font-medium">Available for:</span> Freelance & Full-time</li>
                        </ul>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
