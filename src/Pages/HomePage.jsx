import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import AboutSection from "../Components/Sections/AboutSection/AboutSection";
import ContactSection from "../Components/Sections/ContactSection/ContactSection";
import ProjectsSection from "../Components/Sections/ProjectsSection/ProjectsSection";
import ServicesSection from "../Components/Sections/ServicesSection/ServicesSection";
import SkillsSection from "../Components/Sections/SkillsSection/SkillsSection";
import Footer from "../Components/Footer/Footer";

function HomePage() {
    return (
        <div className="home-page">
            {/* Nav */}
            <Nav />
            {/* Header */}
            <Header />
            {/* Services Section */}
            <ServicesSection />
            {/* Projects Section */}
            <ProjectsSection />
            {/* About Section */}
            <AboutSection />
            {/* Skills Section */}
            <SkillsSection />
            {/* Contact Section */}
            <ContactSection />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage;