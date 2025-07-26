import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player"; // or from "lottie-react"
import developerAnimation from "../../assets/animation/developer.json"; // replace with your path      

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
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full"
        >
          <Player
            autoplay
            loop
            src={developerAnimation}
            style={{ height: "100%", width: "100%" }}
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
              words={[
                "Fullstack Web Developer",
                "React.js Enthusiast",
                "UI/UX Focused Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I’m a passionate Junior Fullstack Web Developer skilled in crafting responsive and scalable web applications using technologies like React.js, Node.js, Express, MongoDB, and Tailwind CSS. I enjoy building clean and functional UIs on the frontend while ensuring robust, secure, and efficient logic on the backend. With a strong foundation in both client-side and server-side development, I bring ideas to life through end-to-end solutions that are user-friendly, maintainable, and performance-driven.
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
