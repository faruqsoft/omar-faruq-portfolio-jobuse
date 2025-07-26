import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-white mt-12">
      {/* Wave SVG at Top */}
      <div className="absolute -top-20 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-24 w-full">
          <path d="M-2.54,18.78 C149.99,150.00 349.29,-49.99 502.54,78.78 L500.00,0.00 L0.00,0.00 Z" 
                style={{ stroke: 'none', fill: 'url(#footerGradient)' }} />
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="bg-gradient-to-b from-blue-500 to-purple-600 pt-6 pb-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeInUp">
          {/* About Me */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-200 leading-relaxed">
              I’m a passionate <span className="text-white font-bold">Full Stack Developer</span> (MERN),
              crafting modern and responsive web experiences that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-3 text-gray-200">
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-2"><FaEnvelope /> your.email@example.com</li>
              <li className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Dhaka, Bangladesh</li>
              <li className="flex gap-4 mt-4 text-xl">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-purple-400 pt-2 text-center text-gray-200 text-sm tracking-wide">
          © {new Date().getFullYear()} Omar.dev — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
