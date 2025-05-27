import { Briefcase, Code, User } from "lucide-react";
import { FaEnvelope } from "react-icons/fa"; // import any icons you want
import { Cloud, Download } from "lucide-react"; // Import Cloud icon for AWS/DevOps

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-1 text-center text-glow">
          About <span className="text-primary"> Me</span>
        </h2>
        <hr className="border-t-2 border-[#E5E7EB] w-58 mx-auto mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & Passionate Learner
            </h3>

            <p className="text-muted-foreground">
              👋 Hi, I'm <strong>Varshil Patel</strong>, a passionate Backend
              Developer with a strong foundation in Node.js and Java. I build
              robust and scalable APIs, design efficient microservices, and love
              solving real-world problems through clean architecture.
            </p>

            <p className="text-muted-foreground">
              Currently, I'm working at <strong>Orionik Technologies</strong>,
              where I contribute to enterprise-level backend systems and
              collaborate with cross-functional teams to deliver
              mission-critical projects.
            </p>
            <p className="text-muted-foreground">
              My tech stack includes{" "}
              <strong>Node.js, PostgreSQL, RabbitMQ, Sequelize</strong>, and{" "}
              <strong>Docker</strong>, with a growing interest in cloud
              infrastructure and DevOps.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I enjoy exploring new technologies, contributing
              to open-source, and continuously leveling up my backend
              architecture skills.
            </p>

            <p className="text-muted-foreground font-medium">
              💡 Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a
                href="#contact"
                className="cosmic-button flex items-center gap-2"
              >
                <FaEnvelope className="text-lg" />
                Get In Touch
              </a>

              <a
                href="/Varshil%20Patel.pdf"
                download="Varshil_Patel_CV.pdf"
                className="cosmic-button flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable frontend and backend systems using modern
                    frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />{" "}
                  {/* Changed from User to Cloud */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AWS / Cloud / DevOps
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable cloud infrastructure on AWS using EC2, S3,
                    and Lambda, automating deployments with Terraform, and
                    managing CI/CD pipelines with Jenkins.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
