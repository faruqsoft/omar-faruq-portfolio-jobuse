import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Me</h3>
                        <p className="text-gray-300">
                            A passionate Full Stack Developer specializing in MERN stack development.
                            Creating modern and responsive web applications.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                            <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-300">Email: your.email@example.com</li>
                            <li className="text-gray-300">Phone: +1 234 567 890</li>
                            <li className="text-gray-300">Location: City, Country</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-300">
                        © {new Date().getFullYear()} Your Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;