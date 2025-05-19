
import React from 'react';
import { X, Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-card rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-auto fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-card/80 backdrop-blur-sm">
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="flex flex-col space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={project.authorAvatar} 
                  alt={project.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">by {project.author}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => {
                const isSpecial = tag === 'new' || tag === 'popular';
                const className = isSpecial ? `tag ${tag}` : 'tag';
                return (
                  <span key={tag} className={className}>
                    {tag}
                  </span>
                );
              })}
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Описание</h4>
              <p className="text-muted-foreground">
                Это пример проекта в KRX Community. Здесь будет размещаться описание проекта, 
                рассказывающее о процессе создания, использованных инструментах и вдохновении автора.
                В будущем пользователи смогут добавлять свои описания при загрузке работ.
              </p>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Комментарии</h4>
              <div className="bg-secondary/50 p-4 rounded-md">
                <p className="text-center text-muted-foreground">
                  Комментарии будут доступны после полной регистрации
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
