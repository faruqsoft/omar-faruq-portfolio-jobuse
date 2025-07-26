import React, { useState } from 'react';
import './SkillsSection.css';
import { SiVercel } from 'react-icons/si';

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaFigma, FaGitAlt, FaGithub, } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiExpress, SiMongodb, SiMysql, SiFirebase, SiJsonwebtokens, SiPostman, SiSketch, SiNpm, SiWebstorm, SiNetlify } from 'react-icons/si';

const allSkills = [
  // Frontend
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend', desc: 'Markup Language' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend', desc: 'Styling Language' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend', desc: 'Utility-first CSS' },
  { name: 'ReactJS', icon: <FaReact />, category: 'Frontend', desc: 'UI Library' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend', desc: 'React Framework' },
  { name: 'Bootstrap', icon: <FaBootstrap />, category: 'Frontend', desc: 'CSS Framework' },
  { name: 'Framer Motion', icon: <SiFramer />, category: 'Frontend', desc: 'Animation library' },

  // Backend
  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', desc: 'JavaScript runtime' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend', desc: 'Web framework' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Backend', desc: 'NoSQL Database' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Backend', desc: 'Relational Database' },
  { name: 'Firebase', icon: <SiFirebase />, category: 'Backend', desc: 'Backend services' },
  { name: 'JWT', icon: <SiJsonwebtokens />, category: 'Backend', desc: 'Auth token system' },


  // Tools
  { name: 'VS Code', icon: <SiVercel />, category: 'Tools', desc: 'Code Editor' },
  { name: 'WebStorm', icon: <SiWebstorm />, category: 'Tools', desc: 'IDE' },
  { name: 'Git', icon: <FaGitAlt />, category: 'Tools', desc: 'Version control' },
  { name: 'GitHub', icon: <FaGithub />, category: 'Tools', desc: 'Repository host' },
  { name: 'Postman', icon: <SiPostman />, category: 'Tools', desc: 'API testing' },
  { name: 'npm', icon: <SiNpm />, category: 'Tools', desc: 'Package manager' },
  { name: 'Figma', icon: <FaFigma />, category: 'Tools', desc: 'UI Design' },
  { name: 'Sketch', icon: <SiSketch />, category: 'Tools', desc: 'Design tool' },

  // DevOps
 { name: 'Vercel', icon: <SiVercel />, category: 'DevOps', desc: 'Frontend deploy' },

  { name: 'Netlify', icon: <SiNetlify />, category: 'DevOps', desc: 'Web Hosting' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'DevOps'];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredSkills = selectedCategory === 'All' ? allSkills : allSkills.filter(skill => skill.category === selectedCategory);

  // Duplicate skills for smooth infinite scroll
  const doubleSkills = [...filteredSkills, ...filteredSkills];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <button className="skills-button">My Skills</button>
        <h2>Skills and Technology</h2>
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-row scroll-left">
          {doubleSkills.map((skill, index) => (
            <div key={`top-${index}`} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
        <div className="scroll-row scroll-right">
          {doubleSkills.map((skill, index) => (
            <div key={`bottom-${index}`} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
