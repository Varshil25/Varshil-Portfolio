import { Cloud, Download, Calendar } from "lucide-react";

export const EducationSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-white dark:bg-background">
            <div className="container mx-auto max-w-5xl animate-fade-in-delay-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">
                    <span className="text-primary">Education</span>
                </h2>
                <hr className="border-t-2 border-[#E5E7EB] w-44 mx-auto mb-12 animate-fade-in-delay-2" />

                <div className="relative">
                    {/* Curved Path Line SVG */}
                    <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 hidden md:block" height="100%" width="4" viewBox="0 0 4 800" preserveAspectRatio="none">
                        <path 
                            d="M2 0 C2 100, 2 200, 2 300 S2 500, 2 600 S2 700, 2 800" 
                            stroke="#3B82F6" 
                            strokeWidth="2" 
                            strokeDasharray="6,6" 
                            fill="none" 
                        />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                        <div className="flex justify-center animate-float z-10">
                            <Cloud className="w-32 h-32 text-primary opacity-40" />
                        </div>

                        <div className="group space-y-6 animate-fade-in-delay-3 card-hover p-6 rounded-xl bg-card shadow-md relative z-10 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold text-primary">
                                    Bachelor of Engineering in Information Technology
                                </h3>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center gap-2 text-md bg-primary text-white px-3 py-1 rounded-full shadow-sm w-fit group-hover:scale-105 transition-transform">
                                    <Calendar className="h-4 w-4" />
                                    <span>2020 – 2024</span>
                                </div>
                            </div>

                            <p className="text-muted-foreground">
                                <strong>Gujarat Technological University</strong>
                            </p>
                            <p className="text-muted-foreground">
                                Graduated with a strong foundation in software development,
                                algorithms, and data structures.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                                <a
                                    href="/Varshil%20Patel.pdf"
                                    download="Varshil_Patel_CV.pdf"
                                    className="cosmic-button flex items-center gap-2 animate-fade-in-delay-4"
                                >
                                    <Download className="h-5 w-5" />
                                    Transcript
                                </a>
                            </div>
                        </div>

                        <div className="group space-y-6 animate-fade-in-delay-3 card-hover p-6 rounded-xl bg-card shadow-md relative z-10 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold text-primary">
                                    Master of Science in Computer Science
                                </h3>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center gap-2 text-md bg-primary text-white px-3 py-1 rounded-full shadow-sm w-fit group-hover:scale-105 transition-transform">
                                    <Calendar className="h-4 w-4" />
                                    <span>2025 – 2027</span>
                                </div>
                            </div>

                            <p className="text-muted-foreground">
                                <strong>Gujarat Technological University</strong>
                            </p>
                            <p className="text-muted-foreground">
                                Coursework focused on AI, ML, systems design, and scalable computing.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                                <a
                                    href="/Varshil%20Patel.pdf"
                                    download="Varshil_Patel_CV.pdf"
                                    className="cosmic-button flex items-center gap-2 animate-fade-in-delay-4"
                                >
                                    <Download className="h-5 w-5" />
                                    Transcript
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center animate-float z-10">
                            <Cloud className="w-32 h-32 text-primary opacity-40" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Starfield effect with contrast for white theme */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="star bg-black dark:bg-white rounded-full"
                        style={{
                            position: "absolute",
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: "4px",
                            height: "4px",
                            animation: "pulse-subtle 6s ease-in-out infinite",
                        }}
                    />
                ))}
            </div>
        </section>
    );
};