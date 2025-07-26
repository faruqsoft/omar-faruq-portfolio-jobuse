import ServicesSection from '../components/home/ServicesSection';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen mt-24 bg-white"
        >
            <ServicesSection />
        </motion.div>
    );
};

export default Services;
