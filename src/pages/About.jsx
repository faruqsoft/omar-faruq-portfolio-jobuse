import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="https://i.ibb.co/KxfYdW1b/fbe8cac2ccc2.jpg"
            alt="Profile"
            className="rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
          />
        </motion.div>

        {/* Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            <Typewriter
              words={['Frontend Web Developer', 'React.js Enthusiast', 'UI/UX Focused Engineer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm a dedicated Frontend Web Developer with a strong command of modern frameworks like React.js, Tailwind CSS, and responsive UI design principles.
            I specialize in building intuitive, accessible, and performance-optimized interfaces that offer seamless digital experiences across all devices.
            With a passion for pixel-perfect design and interactive frontend development, I transform ideas into scalable, elegant code that delivers real value.
          </p>

          {/* Personal Info */}
          <div className="mb-6">
            <h4 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Personal Info
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li><span className="font-medium">Name:</span> Omar Faruq</li>
              <li><span className="font-medium">Age:</span> 27</li>
              <li><span className="font-medium">Location:</span> Dhaka, Bangladesh</li>
              <li><span className="font-medium">Email:</span> omarfaruqngdc@email.com</li>
              <li><span className="font-medium">Available for:</span> Freelance & Full-time</li>
            </ul>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-2xl"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
