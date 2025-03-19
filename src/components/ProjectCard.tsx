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
    <Card className="overflow-hidden transition-all duration-300 bg-card hover:scale-[1.01] hover:shadow-xl hover:border-primary/50 cursor-pointer">
      <div className="h-52 overflow-hidden p-2">
        <img src={imageUrl} alt={title} className="w-full h-full object-contain bg-muted/10" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-muted text-muted-foreground rounded-md px-3 py-1 text-xs mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-24 overflow-y-auto custom-scrollbar">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="secondary"
          className="w-full hover:bg-primary hover:text-primary-foreground"
        >
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
