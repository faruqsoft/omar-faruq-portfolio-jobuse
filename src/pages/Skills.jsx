const Skills = () => {
    const skills = {
        frontend: [
            { name: "HTML5", proficiency: 90 },
            { name: "CSS3/SCSS", proficiency: 85 },
            { name: "JavaScript", proficiency: 90 },
            { name: "React.js", proficiency: 85 },
            { name: "Next.js", proficiency: 80 },
            { name: "Tailwind CSS", proficiency: 85 }
        ],
        backend: [
            { name: "Node.js", proficiency: 80 },
            { name: "Express.js", proficiency: 80 },
            { name: "MongoDB", proficiency: 75 },
            { name: "PostgreSQL", proficiency: 70 }
        ],
        tools: [
            { name: "Git", proficiency: 85 },
            { name: "Docker", proficiency: 70 },
            { name: "VS Code", proficiency: 90 },
            { name: "Postman", proficiency: 85 }
        ]
    };

    const SkillBar = ({ name, proficiency }) => (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span>{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${proficiency}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
                    {skills.frontend.map((skill, index) => (
                        <SkillBar key={index} {...skill} />
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
                    {skills.backend.map((skill, index) => (
                        <SkillBar key={index} {...skill} />
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
                    {skills.tools.map((skill, index) => (
                        <SkillBar key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
