import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import NavBar from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"

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

        </main>



        { /* Footer */ }
        </div>
    )
}
