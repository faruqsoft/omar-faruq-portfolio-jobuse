import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 50, text: "Projects Completed", suffix: "+" },
  { number: 30, text: "Happy Clients", suffix: "+" },
  { number: 5, text: "Years Experience", suffix: "+" },
  { number: 20, text: "Technologies", suffix: "+" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StatsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 mt-32 mb-32 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0"
    >
      {stats.map((stat, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.4,
        });

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            className="text-center p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/70 to-blue-100/60 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]"
          >
            <motion.h3
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2"
              whileHover={{ scale: 1.1 }}
              ref={ref}
            >
              {inView && (
                <CountUp
                  end={stat.number}
                  duration={1.5}
                  suffix={stat.suffix || ""}
                  delay={index * 0.2}
                />
              )}
            </motion.h3>
            <p className="text-gray-700 font-medium text-base md:text-lg">
              {stat.text}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StatsSection;
