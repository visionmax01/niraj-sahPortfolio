import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Niraj Sah</h3>
            <p className="text-gray-400 mb-4">
              Professional Civil Engineer with expertise in structural design, construction management, and infrastructure development. Committed to delivering innovative and sustainable engineering solutions.
            </p>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Me</h4>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://wa.me/9779709101794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/your-username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <address className="text-gray-400 not-italic">
              <p className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kathmandu, Nepal
              </p>
              <p className="mt-3 flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +977 9709101794
              </p>
              <p className="mt-3 flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nirajsah@example.com
              </p>
            </address>
          </div>
        </div>
        <div className="mt-6  pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Niraj Sah. All rights reserved.</p>
          <p className="flex items-center justify-center space-x-1">
            <span>Developed with</span>
            <svg className="h-5 w-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by</span>
            <a 
              href="https://bhishansah.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline"
            >
              Bhishan Sah
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer