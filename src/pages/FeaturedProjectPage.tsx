import ProjectCard from '../components/ProjectCard';

const FeaturedProjectPage = () => {
  const featuredProject = {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online shopping platform with customer authentication, product catalog, and payment integration. Built with modern web technologies and best practices.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/api/placeholder/800/400',
    projectUrl: '#',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Featured Project</h1>
        <p className="text-xl text-muted-foreground mb-12">
          This is my latest and most significant project, showcasing my expertise in full-stack
          development.
        </p>

        <div className="mb-12">
          <ProjectCard {...featuredProject} />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Project Highlights</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Secure user authentication and authorization system</li>
            <li>Real-time inventory management</li>
            <li>Seamless payment processing with Stripe integration</li>
            <li>Responsive design optimized for all devices</li>
            <li>Performance optimized with modern caching strategies</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {featuredProject.tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectPage;
