import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import ContactAnimation from "../../assets/animation/contact.json";

const Contact = () => {
  return (
    <div className="container mx-auto py-32 px-4 bg-white rounded-lg shadow-lg"> {/* Changed background to white */}
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info + Animation */}
        <div>
          {/* Lottie Animation */}
          <div className="w-full max-w-md mx-auto mb-6">
            <Player
              autoplay
              loop
            src={ContactAnimation}
              style={{ height: "250px", width: "100%" }}
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Get in Touch</h3>
          <p className="mb-6 text-gray-700">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <span>omarfaruqngdc@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-500" />
              <span>+880 1749399735</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="flex gap-5 text-2xl mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-800">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
