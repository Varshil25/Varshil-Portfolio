import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "../components/BackgroundEffects"
import NavBar from "../components/NavBar"

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



        { /* Footer */ }
        </div>
    )
}
