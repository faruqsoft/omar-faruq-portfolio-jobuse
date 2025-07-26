import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const menuItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/services', label: 'Services' },
        { to: '/blog', label: 'Blog' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <motion.nav 
            className={`fixed w-full top-6 rounded-3xl z-50 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 
              
            `}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wide">
                        <span className={scrolled ? 'bg-purple-600 text-transparent bg-clip-text' : 'text-white'}>
                            Omar
                        </span>
                        <span className="text-yellow-400">.dev</span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `relative px-2 py-1 text-sm font-medium transition-all duration-300
                                    ${isActive
                                        ? scrolled 
                                            ? 'text-yellow-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600'
                                            : 'text-yellow-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-300'
                                        : scrolled
                                            ? 'text-gray-700 hover:text-purple-900 dark:text-gray-200'
                                            : 'text-white hover:text-yellow-300'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden focus:outline-none ${
                            scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
                        }`}
                    >
                        <svg 
                            className="h-6 w-6 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        className={`md:hidden absolute top-16 left-0 right-0 ${
                            scrolled
                                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
                                : 'bg-gradient-to-r from-blue-700 to-purple-700'
                        }`}
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.to}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <NavLink
                                        to={item.to}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                                            ${isActive
                                                ? scrolled
                                                    ? 'bg-blue-50 dark:bg-gray-800 text-purple-600 dark:text-purple-400'
                                                    : 'bg-white/10 text-yellow-300'
                                                : scrolled
                                                    ? 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400'
                                                    : 'text-white hover:bg-white/10 hover:text-yellow-300'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
