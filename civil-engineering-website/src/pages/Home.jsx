import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MYpic from '../assets/profile_pic.jpg'
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden text-white py-12 md:py-20">
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0  z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in text-center lg:text-left">
                <p className="text-blue-200 text-lg mb-2">Welcome to My Portfolio</p>
                <h1 className="text-4xl font-['Dancing_Script'] sm:text-5xl md:text-6xl font-bold mb-4">Niraj Sah</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-6">Professional Civil Engineer</h2>
                <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">Transforming visions into reality through innovative engineering solutions and sustainable design practices.</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="/portfolio" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    View My Work
                  </a>
                  <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition duration-300 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
              <div className="relative  mt-12 lg:mt-0">
                {/* Tree-like decorative elements */}
                <div className="absolute -top-12 hidden lg:block -left-0 w-24 h-24 border-t-4 border-l-4 border-blue-400 rounded-tl-3xl opacity-70"></div>
                <div className="absolute -bottom-0 hidden lg:block -right-0 w-24 h-24 border-b-4 border-r-4 border-blue-400 rounded-br-3xl opacity-70"></div>
                
                {/* Main image container */}
                <div className="relative z-10 w-fit mx-auto transform transition-all duration-500 hover:scale-105">
                  <div className="relative group">
                    {/* Image with tree-like frame */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-70 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300"></div>
                    
                    {/* Main image */}
                    <div className="relative overflow-hidden rounded-xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition-all duration-500">
                      <img 
                        src={MYpic} 
                        alt="Niraj Sah - Civil Engineer"
                        className="w-64 h-64 lg:w-96 lg:h-96 transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Decorative leaves/branches */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 group-hover:animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-70 group-hover:opacity-100 group-hover:animate-pulse"></div>
                  </div>
                  
                  {/* Decorative text or badge */}
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 text-sm font-medium text-blue-100 bg-blue-900/50 backdrop-blur-sm rounded-full border border-blue-400/30">
                      Professional Civil Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-400 mb-4">My Expertise</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Delivering innovative engineering solutions with precision and excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Structural Engineering</h3>
                <p className="text-gray-400 text-center">Designing robust and efficient structures that stand the test of time while meeting all safety standards.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Construction Management</h3>
                <p className="text-gray-400 text-center">End-to-end project management ensuring quality, safety, and timely delivery.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Infrastructure Development</h3>
                <p className="text-gray-400 text-center">Design and implementation of roads, bridges, and public utilities with a focus on sustainability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-400">Education & Qualifications</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">My academic background and professional certifications</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Education Timeline */}
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 w-0.5 h-full bg-blue-200 -translate-x-1/2"></div>
                
                {/* Education Item 1 */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-xs font-semibold text-gray-400">B.Tech in Civil Engineering (2021 - 2025)</h3>
                    <p className="text-blue-600 lg:text-sm text-xs">RK University</p>
                    <p className="text-gray-500 lg:text-sm text-xs">6.89 CGPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Specialized in advanced structural analysis and earthquake engineering.</p>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-xs font-semibold text-gray-400">+2 Science NEB (2018 - 2020)</h3>
                    <p className="text-blue-600 lg:text-sm text-xs">Monastic Secondary Boarding school janakpur, Nepal</p>
                    <p className="text-gray-500 lg:text-sm text-xs">2.71 GPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Completed my 12th NEB with distinction.</p>
                  </div>
                </div>

                {/* Certification */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-xs font-semibold text-gray-400">10th SEE (2018)</h3>
                    <p className="text-blue-600 lg:text-sm text-xs">Monastic Secondary Boarding school janakpur, Nepal</p>
                    <p className="text-gray-500 lg:text-sm text-xs">3.1 GPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Completed my 10th SEE with distinction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-400 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">Some of our most impressive engineering achievements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Modern residential complex" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hillside Residences</h3>
                  <p className="text-gray-600 mb-4">Modern residential complex with sustainable design features.</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>San Francisco, CA</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1610&q=80" alt="Commercial office building" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Downtown Office Tower</h3>
                  <p className="text-gray-600 mb-4">32-story commercial building with LEED Platinum certification.</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Chicago, IL</span>
                    <span>2021</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Highway interchange" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Metro Highway Interchange</h3>
                  <p className="text-gray-600 mb-4">Major transportation hub reducing congestion by 40%.</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Atlanta, GA</span>
                    <span>2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/portfolio" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary transition duration-300">View All Projects</a>
            </div>
          </div>
        </section>

       
      </main>

      <Footer />
    </div>
  )
}

export default Home