import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MYpic from '../assets/profile_pic.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">About Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Civil Engineering Student | Aspiring Structural Engineer</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-200 mb-6">My Journey</h2>
                <p className="text-gray-400 text-justify mb-4">
                  I am a passionate Civil Engineering student currently pursuing my B.Tech at RK University. My journey in civil engineering began with a fascination for how structures shape our world and a desire to contribute to sustainable infrastructure development.
                </p>
                <p className="text-gray-400 text-justify mb-4">
                  With a strong foundation in structural analysis, construction management, and sustainable design principles, I'm dedicated to creating innovative solutions to real-world engineering challenges.
                </p>
                <p className="text-gray-400 text-justify">
                  My academic journey has equipped me with hands-on experience in various aspects of civil engineering, from structural design to project management, preparing me for a successful career in the field.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <img 
                    src={MYpic} 
                    alt="Niraj Sah - Civil Engineering Student" 
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Education</h2>
              <div className="space-y-12 relative">
                {/* Timeline */}
                <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
                
                {/* Education Item 1 */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-sm font-semibold text-gray-300">B.Tech in Civil Engineering (2021 - 2025)</h3>
                    <p className="text-blue-400 lg:text-sm text-xs">RK University</p>
                    <p className="text-gray-500 lg:text-sm text-xs">6.89 CGPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-800 -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Specialized in advanced structural analysis and earthquake engineering. Gained hands-on experience with industry-standard software and practical applications.</p>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-sm font-semibold text-gray-300">+2 Science NEB (2018 - 2020)</h3>
                    <p className="text-blue-400 lg:text-sm text-xs">Monastic Secondary Boarding School</p>
                    <p className="text-gray-500 lg:text-sm text-xs">2.71 GPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-800 -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Completed my 12th with distinction, focusing on Physics, Chemistry, and Mathematics, which laid the foundation for my engineering journey.</p>
                  </div>
                </div>

                {/* Education Item 3 */}
                <div className="relative flex items-center">
                  <div className="flex-shrink-0 w-1/2 pr-12 text-right">
                    <h3 className="lg:text-xl text-sm font-semibold text-gray-300">10th SEE (2018)</h3>
                    <p className="text-blue-400 lg:text-sm text-xs">Monastic Secondary Boarding School</p>
                    <p className="text-gray-500 lg:text-sm text-xs">3.1 GPA</p>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-800 -translate-x-1/2"></div>
                  <div className="flex-shrink-0 w-1/2 pl-12">
                    <p className="text-gray-400 lg:text-sm text-xs">Completed my 10th with distinction, developing strong analytical and problem-solving skills that would later prove essential in my engineering studies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-gray-200 mb-12 text-center">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Skill Card 1 */}
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">Structural Analysis</h3>
                  <p className="text-gray-400">Proficient in analyzing and designing structures using software like STAAD.Pro and ETABS, with a strong understanding of load calculations and structural integrity.</p>
                </div>

                {/* Skill Card 2 */}
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">Project Management</h3>
                  <p className="text-gray-400">Experienced in project planning, scheduling, and resource management. Familiar with MS Project and Primavera for effective project execution and monitoring.</p>
                </div>

                {/* Skill Card 3 */}
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">Technical Software</h3>
                  <p className="text-gray-400">Skilled in AutoCAD, Revit, and SketchUp for 2D and 3D modeling. Proficient in using MATLAB and Python for engineering computations and data analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              I'm always looking for new opportunities to apply my skills and contribute to meaningful projects. Whether you have a question or want to discuss potential collaborations, I'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;