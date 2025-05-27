import { useEffect, useRef } from 'react';

// Import logos (you'll need to source these images or use SVGs/icons)
import drcLogo from '../assets/ExperienceMedia/drc-logo.jpg'; // Replace with actual path
import orionikLogo from '../assets/ExperienceMedia/orionik-logo.jpg';

export const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: 'DRC SYSTEM INDIA LIMITED',
      role: 'Associate Software Developer',
      period: 'JAN 2024 - JULY 2024',
      logo: drcLogo,
    },
    {
      company: 'Orionik Technologies private limited',
      role: 'Junior Software Engineer',
      period: 'AUGUST 2024 - JULY 2025',
      logo: orionikLogo,
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow"
          style={{ animation: 'var(--animate-fade-in)' }}
        >
          Work <span className="text-primary">Experience</span>
        </h2>
       
        {/* Work Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 opacity-0"
              style={{ animation: `var(--animate-fade-in-delay-${index + 2})` }}
            >
              {/* Logo */}
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-full object-contain"
              />
              {/* Company, Role, and Period */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold uppercase text-gray-900 dark:text-white group-hover:text-primary transition duration-300">
                  {exp.company}
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-500">{exp.role}</p>
              </div>
              <div className="text-right">
                <p className="text-lg text-gray-800 dark:text-gray-500 uppercase">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};