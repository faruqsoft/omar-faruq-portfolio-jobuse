import { motion } from 'framer-motion';
import ContactComponent from '../components/home/Contact';

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
            <ContactComponent />
        </motion.div>
    );
};

export default Contact;
