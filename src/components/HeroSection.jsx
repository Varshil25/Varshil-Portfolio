export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6"> 
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> 
                        { " "}
                        Varshil 
                    </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
                        { " "}
                        Patel 
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I create full-stack web applications using modern technologies.  
                    Specializing in backend development, I build secure, scalable APIs and manage efficient databases.  
                    On the frontend, I craft intuitive and responsive user interfaces that enhance user experience.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>
                    <a href="#projects" className="cosmic-button">
                        View My Projects
                    </a>
                </div>

            </div>
        </div>
    </section>
}