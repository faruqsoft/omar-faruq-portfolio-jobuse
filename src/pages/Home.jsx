import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import SkillsSection from '../components/home/SkillsSection';

import TestimonialsSection from '../components/home/TestimonialsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectShowcase from '../components/home/ProjectShowcase';
import About from '../components/home/About';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <HeroSection />
            <About/>
            <StatsSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectShowcase />
            <TestimonialsSection />
            <Contact></Contact>
        </div>
    );
};

export default Home;