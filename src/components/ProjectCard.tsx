import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-24 overflow-y-auto">
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
