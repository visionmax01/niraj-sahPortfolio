const ProjectCard = ({ title, description, image, location, year }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard