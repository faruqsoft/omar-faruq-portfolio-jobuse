import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-3xl font-bold text-white tracking-wide">
                        Omar<span className="text-yellow-300">.dev</span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/about', label: 'About' },
                            { to: '/projects', label: 'Projects' },
                            { to: '/skills', label: 'Skills' },
                            { to: '/services', label: 'Services' },
                            { to: '/blog', label: 'Blog' },
                            { to: '/contact', label: 'Contact' },
                        ].map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `relative px-2 py-1 text-sm font-medium transition-all duration-300
                                    ${isActive
                                        ? 'text-yellow-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-300'
                                        : 'text-white hover:text-yellow-300'}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button className="text-white hover:text-yellow-300 transition duration-300">
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
