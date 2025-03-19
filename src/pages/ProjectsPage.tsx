import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Here's a collection of my recent work. Each project was selected to showcase different
        skills and technologies.
      </p>
      <Projects showHeading={false} />
    </div>
  );
};

export default ProjectsPage;
