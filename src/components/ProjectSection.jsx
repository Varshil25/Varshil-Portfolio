import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// React Icons
import {
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiSequelize,
  SiSwagger,
  SiRedis,
  SiStripe,
  SiDocker,
  SiSpringboot,
  SiHibernate,
  SiThymeleaf,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { FaBootstrap, FaJava } from "react-icons/fa6";

// Media
import SalonWebDemo from "../assets/ProjectsMedia/ShearDemo.mp4";
import SalonAdminDemo from "../assets/ProjectsMedia/ShearBrillianceAdminDemo.mp4";
import ESSDemo from "../assets/ProjectsMedia/ESS.png";
import SCMDemo from "../assets/ProjectsMedia/SCM.png";
import AutoMobDemo from "../assets/ProjectsMedia/AutoMob.png";
import { FaHtml5 } from "react-icons/fa";

export const ProjectSection = () => {
  const techIcons = {
    Html: <FaHtml5 style={{ color: "#E34F26" }} className="text-xl" title="HTML5" />,
    CSS: <FaCss3Alt style={{ color: "#1572B6" }} className="text-xl" title="CSS3" />,
    JavaScript: <FaJs style={{ color: "#F7DF1E" }} className="text-xl" title="JavaScript" />,
    Bootstrap: <FaBootstrap style={{ color: "#7952B3" }} className="text-xl" title="Bootstrap" />,
    Java: <FaJava style={{ color: "#007396" }} className="text-xl" title="Java" />,
    Thymeleaf: <SiThymeleaf style={{ color: "#005F0F" }} className="text-xl" title="Thymeleaf" />,
    Springboot: <SiSpringboot style={{ color: "#6DB33F" }} className="text-xl" title="Spring Boot" />,
    Hibernate: <SiHibernate style={{ color: "#BCA469" }} className="text-xl" title="Hibernate" />,
    "Node.js": <SiNodedotjs style={{ color: "#339933" }} className="text-xl" title="Node.js" />,
    PostgreSQL: <SiPostgresql style={{ color: "#336791" }} className="text-xl" title="PostgreSQL" />,
    RabbitMQ: <SiRabbitmq style={{ color: "#FF6600" }} className="text-xl" title="RabbitMQ" />,
    Sequelize: <SiSequelize style={{ color: "#03AFEF" }} className="text-xl" title="Sequelize" />,
    Swagger: <SiSwagger style={{ color: "#85EA2D" }} className="text-xl" title="Swagger" />,
    Redis: <SiRedis style={{ color: "#DC382D" }} className="text-xl" title="Redis" />,
    "Stripe API": <SiStripe style={{ color: "#635BFF" }} className="text-xl" title="Stripe API" />,
    Microservices: <SiSpringboot style={{ color: "#6DB33F" }} className="text-xl" title="Microservices" />,
    Docker: <SiDocker style={{ color: "#2496ED" }} className="text-xl" title="Docker" />,
  };

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
      technologies: ["Java", "Springboot", "Hibernate", "Thymeleaf", "Bootstrap", "Html", "CSS", "JavaScript"],
      media: ESSDemo,
      githubLink: "https://github.com/Varshil25/Employee-Self-Service",
    },
    {
      id: 4,
      title: "Smart Conact Manager",
      description: "Smart Contact Manager is an advanced application for efficiently managing contacts, featuring a user-friendly interface.",
      technologies: ["Java", "Hibernate", "Thymeleaf", "Bootstrap"],
      media: SCMDemo,
      githubLink: "https://github.com/Varshil25/SmartContactManager.git",
    },
    {
      id: 5,
      title: "AutoMob-Mechanic",
      description: "At AutoMob-Mechanic, we aim to make the car repair and service experience straightforward by providing services for repairing, servicing and maintaining - lending our expertise in all forms.",
      technologies: ["Html", "CSS", "JavaScript", "Bootstrap"],
      media: AutoMobDemo,
      githubLink: "https://github.com/Varshil25/AutoMob-Mechanic.git",
    },
  ];

  const isVideo = (url) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  // Create a ref to access the Swiper instance
  const swiperRef = useRef(null);
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle touch start to determine if touch is on left or right side
  const handleTouchStart = (event) => {
    if (!swiperRef.current) return;

    const touchX = event.touches[0].clientX;
    const swiperWidth = swiperRef.current.el.offsetWidth;
    const halfWidth = swiperWidth / 2;

    if (touchX < halfWidth) {
      // Touch on the left side, go to previous slide
      swiperRef.current.slidePrev();
    } else {
      // Touch on the right side, go to next slide
      swiperRef.current.slideNext();
    }
  };

  // Custom pagination logic to show only 3 dots
  const totalSlides = projects.length;
  const handleDotClick = (dotIndex) => {
    if (!swiperRef.current) return;

    let targetSlide;
    if (dotIndex === 0) {
      // Left dot: go to previous slide or group
      targetSlide = Math.max(0, currentSlide - 1);
    } else if (dotIndex === 2) {
      // Right dot: go to next slide or group
      targetSlide = Math.min(totalSlides - 1, currentSlide + 1);
    } else {
      // Middle dot: stay on current slide (or can be used to jump to a specific group)
      targetSlide = currentSlide;
    }
    swiperRef.current.slideTo(targetSlide);
  };

  // Update current slide index when the slide changes
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow">
          <span className="text-primary"> Projects </span>
        </h2>
       
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          className="pb-10"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onTouchStart={handleTouchStart}
          onSlideChange={handleSlideChange}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 h-[480px] flex flex-col">
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

                {/* Icons for technologies */}
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-gray-700" title={tech}>
                      {techIcons[tech] || (
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom pagination with only 3 dots */}
          <div className="custom-pagination mt-4 flex justify-center gap-2">
            {[0, 1, 2].map((dotIndex) => (
              <span
                key={dotIndex}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  dotIndex === 1 ? "bg-blue-500 scale-125" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(dotIndex)}
              />
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};