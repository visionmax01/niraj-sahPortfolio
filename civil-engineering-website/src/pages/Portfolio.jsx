import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Hillside Residences",
      description: "Modern residential complex with sustainable design features and energy-efficient systems.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "San Francisco, CA",
      year: "2022"
    },
    {
      id: 2,
      title: "Downtown Office Tower",
      description: "32-story commercial building achieving LEED Platinum certification with innovative facade design.",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1610&q=80",
      location: "Chicago, IL",
      year: "2021"
    },
    {
      id: 3,
      title: "Metro Highway Interchange",
      description: "Major transportation hub reducing congestion by 40% with intelligent traffic management systems.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      location: "Atlanta, GA",
      year: "2020"
    },
    {
      id: 4,
      title: "Riverfront Mixed-Use Development",
      description: "Integrated residential, retail, and public space along 1.5 miles of revitalized waterfront.",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "Portland, OR",
      year: "2019"
    },
    {
      id: 5,
      title: "University Science Complex",
      description: "State-of-the-art research facilities with specialized labs and collaborative learning spaces.",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      location: "Boston, MA",
      year: "2018"
    },
    {
      id: 6,
      title: "Regional Hospital Expansion",
      description: "300-bed expansion with emergency department upgrade and specialized care units.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      location: "Houston, TX",
      year: "2017"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-3xl mx-auto">Explore our completed projects showcasing innovative engineering solutions</p>
          </div>
        </section>

        {/* Portfolio Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  location={project.location}
                  year={project.year}
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">12</p>
                  <p className="text-gray-600">States Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">25</p>
                  <p className="text-gray-600">Industry Awards</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">98%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Portfolio