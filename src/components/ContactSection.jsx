/* eslint-disable no-undef */
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Add this CSS for animations
const styles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
  }

  .animate-pulse-slow {
    animation: pulse 2s infinite;
  }

  .input-focus {
    transition: all 0.3s ease;
  }

  .input-focus:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS Configuration - Use string literals for IDs
      const SERVICE_ID = 'service_ssco7rk'; // Ensure this is your actual Service ID
      const TEMPLATE_ID = 'template_rvelg2l'; // Ensure this is your actual Template ID
      const PUBLIC_KEY = 'eVYKe6mQ9_3qAXWt5'; // Ensure this is your actual Public Key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'pvarshild.25@gmail.com'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow animate-slide-in">
          <span className="text-primary">Contact</span> Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-none animate-slide-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="oklch(0 0 0) mb-8 leading-relaxed text-muted-foreground">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {[
                  { Icon: Mail, text: 'pvarshild.25@gmail.com' },
                  { Icon: Phone, text: '+91 9104433064' },
                  { Icon: MapPin, text: 'Gandhinagar, India' }
                // eslint-disable-next-line no-unused-vars
                ].map(({ Icon, text }, index) => (
                  <div 
                    key={text} 
                    className="flex items-center gap-4 animate-slide-in" 
                    style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="oklch(0 0 0)">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-300 dark:border-white/20 shadow-xl dark:shadow-none animate-slide-in" style={{animationDelay: '0.4s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { Icon: User, name: 'name', placeholder: 'Your Name' },
                  { Icon: Mail, name: 'email', placeholder: 'Your Email', type: 'email' }
                // eslint-disable-next-line no-unused-vars
                ].map(({ Icon, name, placeholder, type = 'text' }, index) => (
                  <div key={name} className="relative">
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                      placeholder={placeholder}
                      className="w-full pl-12 pr-4 py-3 bg-white dark:bg-black/20 border-2 border-gray-300 dark:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 input-focus"
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-black/20 border-2 border-gray-300 dark:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 input-focus"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-black/20 border-2 border-gray-300 dark:border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none input-focus"
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-800 rounded-lg animate-slide-in">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-800 rounded-lg animate-slide-in">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Something went wrong. Please try again or contact me directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 disabled:from-primary/50 disabled:to-primary/40 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:hover:scale-100 animate-pulse-slow"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};