import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
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
    {
      title: 'Weather Application',
      description:
        'Real-time weather application with location detection and forecast predictions.',
      tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
    {
      title: 'Blog Platform',
      description:
        'Content management system for creating and publishing blog posts with user authentication.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
    {
      title: 'Social Network App',
      description:
        'Social networking application with user profiles, posts, and real-time chat functionality.',
      tags: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      imageUrl: '/api/placeholder/600/400', // Placeholder image
      projectUrl: '#',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Here's a collection of my recent work. Each project was selected to showcase different
        skills and technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
