
import React from 'react';
import { Heart, Eye, MessageCircle } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    author: string;
    image: string;
    likes: number;
    views: number;
    tags: string[];
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="card-hover bg-card border border-border" onClick={onClick}>
      {/* Project Image */}
      <div className="relative group overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Overlay with tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag}`}>
              {tag === 'new' ? 'Новое' : 
               tag === 'popular' ? 'Популярное' : 
               tag === 'character' ? 'Персонаж' :
               tag === 'environment' ? 'Окружение' :
               tag === 'props' ? 'Объект' : tag}
            </span>
          ))}
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <div className="w-full">
            <div className="flex justify-between items-center text-white">
              <div className="text-sm font-medium truncate">{project.author}</div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="flex items-center hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-3">
        <h3 className="text-lg font-medium mb-1 truncate">{project.title}</h3>
        
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1 text-red-500" />
            <span className="mr-2">{project.likes}</span>
            <Eye className="w-4 h-4 mr-1" />
            <span>{project.views}</span>
          </div>
          <div>
            <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-xs text-primary">3D</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
