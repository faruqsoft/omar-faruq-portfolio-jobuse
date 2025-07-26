import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import SkillsSection from '../components/home/SkillsSection';

import TestimonialsSection from '../components/home/TestimonialsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectShowcase from '../components/home/ProjectShowcase';
import About from '../components/home/About';

const Home = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <HeroSection />
            <About/>
            <StatsSection />
            <SkillsSection />
            <ProjectShowcase></ProjectShowcase>
            <ServicesSection />
           
            <TestimonialsSection />
        </div>
    );
};

export default Home;