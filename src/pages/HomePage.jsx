import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import BrandsSlider from '../components/BrandsSlider'
import ProjectsSection from '../components/ProjectsSection'
import PartnersSlider from '../components/PartnersSlider'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSlider />
      <ProjectsSection />
      <PartnersSlider />
      <FAQSection />
    </div>
  )
}

export default HomePage