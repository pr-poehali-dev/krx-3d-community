
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface Project {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleClick = () => {
    onClick(project);
  };

  return (
    <Card className="overflow-hidden card-hover cursor-pointer" onClick={handleClick}>
      <AspectRatio ratio={16 / 9}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full" 
        />
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-medium truncate mb-1">{project.title}</h3>
        <div className="flex items-center gap-2">
          <img 
            src={project.authorAvatar} 
            alt={project.author} 
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-muted-foreground">{project.author}</span>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex gap-1 flex-wrap">
        {project.tags.map(tag => {
          const isSpecial = tag === 'new' || tag === 'popular';
          const className = isSpecial ? `tag ${tag}` : 'tag';
          return (
            <span key={tag} className={className}>
              {tag}
            </span>
          );
        })}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
