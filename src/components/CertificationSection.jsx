import { Download } from 'lucide-react';
import JavaHibernate from '../assets/Certificate/JavaHibernate.jpg'; 
import JavaHibernatePdf from '../assets/Certificate/Java-Hibernate.pdf';
import Java from '../assets/Certificate/Java.jpg'; 
import JavaPdf from '../assets/Certificate/Java.pdf'; 
import JavaScript from '../assets/Certificate/JavaScript.jpg';
import JavaScriptPdf from '../assets/Certificate/JavaScript.pdf';
import DSA from '../assets/Certificate/DSA.jpg';
import DSAPdf from '../assets/Certificate/DSA.pdf';
import infolabz from '../assets/Certificate/InfoLabzInternship.jpg'; // Placeholder image for Node.js
import infolabzPdf from '../assets/Certificate/InfoLabzInternship.pdf'; // Placeholder PDF for Node.js
import DRC from '../assets/Certificate/InfoLabzInternship.jpg'; // Placeholder image for Node.js
import DRCPdf from '../assets/Certificate/InfoLabzInternship.pdf'; // Placeholder PDF for Node.js

// Sample certification data - replace with your actual data
const certifications = [
  {
    id: 1,
    title: "Project on Java and Hibernate - Employee Management System",
    issuer: "Infosys Springboard",
    date: "September 3, 2023",
    image: JavaHibernate,  
    downloadUrl: JavaHibernatePdf   
  },
  {
    id: 2,
    title: "Project Development Using Java",
    issuer: "Udemy",
    date: "October 14, 2022",
    image: Java,  
    downloadUrl: JavaPdf   
  },
  {
    id: 3,
    title: "Learn JavaScript - For Beginners",
    issuer: "Udemy",
    date: "October 13, 2022",
    image: JavaScript,  
    downloadUrl: JavaScriptPdf
  },
  {
    id: 4,
    title: "DSA Bootcamp",
    issuer: "GeeksforGeeks",
    date: "October 4, 2022 - October 15, 2023",
    image: DSA,  
    downloadUrl: DSAPdf
  },
  {
    id: 5,
    title: "SUMMER INTERNSHIP",
    issuer: "INFOLABZ IT SERVICES PVT. LTD",
    date: "August 12, 2023",
    image: infolabz,  
    downloadUrl: infolabzPdf   
  },
  {
    id: 6,
    title: "Internship",
    issuer: "DRC System India Limited",
    date: "January 8, 2024 - July 8, 2024",
    image: DRC,  
    downloadUrl: DRCPdf  
  }
];

export const CertificationSection = () => {
  const handleDownload = (downloadUrl, title) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow">
          <span className="text-primary">Certifications</span>
        </h2>
        
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-white/20 hover:border-primary/50 shadow-lg dark:shadow-none transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-primary font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.date}
                  </p>
                </div>
                
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(cert.downloadUrl, cert.title)}
                  className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/50 hover:border-primary text-primary font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                  Download Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State - Show when no certifications */}
        {certifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No certifications available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};