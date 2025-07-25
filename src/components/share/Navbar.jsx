import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        Portfolio
                    </Link>
                    
                    <div className="hidden md:flex space-x-6">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/skills" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Skills
                        </NavLink>
                        <NavLink 
                            to="/services" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink 
                            to="/blog" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-blue-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;