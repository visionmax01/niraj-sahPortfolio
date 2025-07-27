import { useState } from 'react';
import { FaMapMarkerAlt,FaClock, FaWhatsapp, FaFacebook, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. I will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-transparent  py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl max-w-3xl mx-auto">Have a project in mind or questions about my services? I'd love to hear from you.</p>
          </div>
           {/* Social Media Links */}
           <div className="p-6 flex justify-center flex-col items-center bg-gray-600/45 m-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-400 mb-3">Connect With Me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://wa.me/9779709101794" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://facebook.com/your-profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/your-profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
        </section>

        {/* Contact Content */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-200 mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through the contact form or directly via email or phone.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-1">Phone</h3>
                      <p className="text-gray-400">+977 9709101794</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-1">Email</h3>
                      <p className="text-gray-400">nirajsah@example.com</p>
                    </div>
                  </div>
                  
                 
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-1">Location</h3>
                      <p className="text-gray-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaClock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-400 mb-1">Working Hours</h3>
                      <p className="text-gray-400">Sunday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-400">Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-400 mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-400 mb-12">Find Me Here</h2>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4631653507536!2d85.32001131506207!3d27.70689898279328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900b8b7a7e5%3A0x8a3a9d1c0e1b0b1d!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location in Kathmandu, Nepal"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact