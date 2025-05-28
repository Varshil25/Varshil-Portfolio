import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import NavBar from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { EducationSection } from "../components/EducationSection"
import { SkillSection } from "../components/SkillSection"
import { ProjectSection } from "../components/ProjectSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { CertificationSection } from "../components/CertificationSection"
import { ContactSection } from "../components/ContactSection"
import { Contact } from "lucide-react"
import Footer from "../components/Footer"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       { /* Theme Toggle */ }
        {/* <ThemeToggle /> */}



        {/* BackGround Effects */ }

        <BackgroundEffects />


        { /* NavBar */ }


        <NavBar />

        { /* Main Content */ }

        <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillSection />
            <ProjectSection />
            <ExperienceSection />
            <CertificationSection />
            <ContactSection />
        </main>



        { /* Footer */ }
        <Footer />
        
        </div>
    )
}
