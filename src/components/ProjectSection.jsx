// ProjectSection.tsx or ProjectSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import videos from the assets folder
import ShearDemo from "../assets/ShearDemo.mp4";
// Videos for projects (replace with actual files if available)
import SalonWebDemo from "../assets/ShearDemo.mp4"; // Replace with actual SalonWebDemo.mp4
import SalonAdminDemo from "../assets/ShearBrillianceAdminDemo.mp4"; // Replace with actual SalonAdminDemo.mp4
import ESSDemo from "../assets/ESS.png"; // Replace with actual BlogDemo.mp4
import SCMDemo from "../assets/SCM.png"; // Replace with actual TodoDemo.mp4
import AutoMobDemo from "../assets/AutoMob.png"; // Replace with actual CalendarDemo.mp4

export const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Salon Management System Web",
      description:
        "User-facing salon management system with appointment booking, queue position tracking, and seamless payment integration using Stripe.",
      technologies: [
        "Node.js",
        "PostgreSQL",
        "RabbitMQ",
        "Sequelize",
        "Swagger",
        "Redis",
        "Stripe API",
        "S3",
        "Microservices",
        "Docker",
      ],
      media: SalonWebDemo,
      githubLink: "https://github.com/Varshil25/Salon_Management_System",
    },
    {
      id: 2,
      title: "Salon Management System Admin",
      description:
        "Admin dashboard for managing appointments, viewing payroll, and handling staff management with a microservices architecture.",
      technologies: [
        "Node.js",
        "PostgreSQL",
        "RabbitMQ",
        "Sequelize",
        "Swagger",
        "Redis",
        "S3",
        "Microservices",
        "Docker",
      ],
      media: SalonAdminDemo,
      githubLink: "https://github.com/Varshil25/Salon_Management_System",
    },
    {
      id: 3,
      title: "Employee Self Service",
      description:
        "An HRM platform for HR to track employee activities, including punch in/out, task management, and more, with priority and local storage.",
      technologies: ["Java", "Springboot", "Hibernate", "JDBC", "Thymeleaf"],
      media: ESSDemo,
      githubLink: "https://github.com/Varshil25/Employee-Self-Service", // Placeholder
    },
    {
      id: 4,
      title: "Smart Conact Manager",
      description: "Smart Contact Manager is an advanced application for efficiently managing contacts, featuring a user-friendly interface.",
      technologies: ["Spring Boot", "Hibernate", "Thymeleaf","Bootstrap"],
      media: SCMDemo,
      githubLink: "https://github.com/Varshil25/SmartContactManager.git", // Placeholder
    },
    {
      id: 5,
      title: "AutoMob-Mechanic",
      description: "At AutoMob-Mechanic, we aim to make the car repair and service experience straightforward by providing services for repairing, servicing and maintaining - lending our expertise in all forms.",
      technologies: ["Html", "CSS", "JavaScript", "Bootstrap"],
      media: AutoMobDemo,
      githubLink: "https://github.com/Varshil25/AutoMob-Mechanic.git", // Placeholder
    },
  ];

  // Helper to determine if media is an image or video based on extension
  const isVideo = (url) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center text-glow">
          <span className="text-primary"> Projects </span>
        </h2>
        <hr className="border-t-2 border-[#E5E7EB] w-36 mx-auto mb-12" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 h-[480px] flex flex-col">
                {/* Media Container with Fixed Aspect Ratio */}
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  {project.media ? (
                    isVideo(project.media) ? (
                      <video
                        src={project.media}
                        controls
                        className="w-full h-full object-cover"
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Media</span>
                    </div>
                  )}
                </div>
                {/* Title with GitHub Logo */}
                <div className="flex justify-center items-center mb-4 transition-all duration-300 hover:bg-gray-100 rounded-lg p-2">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                    >
                        <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub Logo"
                        className="w-4 h-4 transition-transform duration-300 hover:scale-110"
                        />
                        <h3 className="text-md font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                        </h3>
                    </a>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                {/* Technologies as Text Labels */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};