import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ServicesSection from '../components/home/ServicesSection';

const Home = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <HeroSection />
            <StatsSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
        </div>
    );
};

export default Home;