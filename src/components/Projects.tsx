import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with customer authentication, product catalog, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management tool with real-time updates, team management, and progress tracking.',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website to showcase projects and skills.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
  ];

  return (
    <div className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
