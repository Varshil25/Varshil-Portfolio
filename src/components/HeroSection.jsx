// HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollDownButton } from "./ScrollDownButton";
import { FaEnvelope, FaFolderOpen } from 'react-icons/fa'; // import any icons you want


const phrases = [
  <span>
    I'm a tech <span className="text-primary">enthusiast</span>
  </span>,
  <span>
    I'm a <span className="text-primary">Problem-Solver</span>
  </span>,
  <span>
    I build scalable <span className="text-primary">APIs</span>
  </span>,
  <span>
   I design clean <span className="text-primary">architectures</span>
  </span>,
  <span>
    I thrive on <span className="text-primary">innovation</span>
  </span>,
  <span>
    I write <span className="text-primary">maintainable</span> code
  </span>,
];

export const HeroSection = () => {
  const textRef = useRef(null);
  const phraseRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Animate container fade-in
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(phraseRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % phrases.length);
          gsap.fromTo(
            phraseRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 }
          );
        },
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Varshil
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              Patel
            </span>
          </h1>

          <div
            ref={textRef}
            className="text-gradient text-xl md:text-2xl font-medium min-h-[2.5rem] opacity-0 translate-y-4"
          >
            <div ref={phraseRef}>{phrases[index]}</div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I create full-stack web applications using modern technologies.
            Specializing in backend development, I build secure, scalable APIs
            and manage efficient databases. On the frontend, I craft intuitive
            and responsive user interfaces that enhance user experience.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="cosmic-button flex items-center gap-2"
            >
              <FaEnvelope className="text-lg" />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="cosmic-button flex items-center gap-2"
            >
              <FaFolderOpen className="text-lg" />
              View My Projects
            </a>
          </div>
        </div>
      </div>
      <ScrollDownButton />
    </section>
  );
};
