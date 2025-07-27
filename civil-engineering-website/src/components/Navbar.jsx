import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavPic from '../assets/NavPic.jpg'

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative px-3 py-1 text-sm font-medium group transition-colors duration-200 ${
        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-10 ml-2.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-all duration-300 ease-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed my-4 lg:mx-20 mx-4 z-30 top-0 left-0 right-0">
      <div className="relative p-[1px] rounded-lg overflow-hidden">
        {/* Rotating border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 "></div>
        
        {/* Nav content */}
        <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800/50">
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('https://images.assetsdelivery.com/compings_v2/askanchanacharoen/askanchanacharoen2011/askanchanacharoen201100188.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={NavPic} alt="" className="w-8 h-8 rounded-full mr-2"/>
            <Link 
              to="/" 
              className="text-3xl sm:text-4xl font-bold text-white font-['Dancing_Script'] relative z-10
                         hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300"
              style={{ 
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                letterSpacing: '1px',
                transform: 'rotate(-2deg)'
              }}
            >
              Niraj sah
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="-mr-2 flex z-50 items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden relative z-50">
          <div className="pt-2 pb-3 flex flex-col space-y-1 px-4">
            <NavLink to="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gray-700/50 transition-colors">Home</NavLink>
            <NavLink to="/about" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors">About</NavLink>
            <NavLink to="/portfolio" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors">Projects</NavLink>
            <NavLink to="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors">Contact</NavLink>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default Navbar