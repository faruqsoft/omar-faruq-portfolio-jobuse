import { motion } from 'framer-motion';
import ContactComponent from '../components/home/Contact';

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white py-6"
        >
            <ContactComponent />
        </motion.div>
    );
};

export default Contact;
