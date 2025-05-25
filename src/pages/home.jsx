import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import NavBar from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { EducationSection } from "../components/EducationSection"

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
        </main>



        { /* Footer */ }
        </div>
    )
}
