
import React, { useState, useEffect } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Киберпанк город',
    author: 'Андрей К.',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    image: 'https://cdn.poehali.dev/files/fc6f5685-8534-4261-a492-18539d3ce06f.jfif',
    tags: ['new', '3d', 'киберпанк']
  },
  {
    id: 2,
    title: 'Фентези персонаж',
    author: 'Елена В.',
    authorAvatar: 'https://i.pravatar.cc/150?img=2',
    image: 'https://images.unsplash.com/photo-1599625374666-c1fbf54ae0a5?q=80&w=1000',
    tags: ['персонаж', 'фентези', 'popular']
  },
  {
    id: 3,
    title: 'Научная фантастика',
    author: 'Максим Д.',
    authorAvatar: 'https://i.pravatar.cc/150?img=3',
    image: 'https://images.unsplash.com/photo-1630569470960-ec1e8c873d01?q=80&w=1000',
    tags: ['sci-fi', 'окружение']
  },
  {
    id: 4,
    title: 'Концепт оружия',
    author: 'Ольга С.',
    authorAvatar: 'https://i.pravatar.cc/150?img=4',
    image: 'https://images.unsplash.com/photo-1662017943564-ce0a316eefd9?q=80&w=1000',
    tags: ['концепт', 'оружие', 'game-asset']
  },
  {
    id: 5,
    title: 'Исторический персонаж',
    author: 'Иван Т.',
    authorAvatar: 'https://i.pravatar.cc/150?img=5',
    image: 'https://images.unsplash.com/photo-1646983426616-d3b41a39aff1?q=80&w=1000',
    tags: ['персонаж', 'историческое']
  },
  {
    id: 6,
    title: 'Абстрактный ландшафт',
    author: 'Мария П.',
    authorAvatar: 'https://i.pravatar.cc/150?img=6',
    image: 'https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?q=80&w=1000',
    tags: ['абстракция', 'пейзаж', 'popular']
  }
];

const InfiniteGallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Load initial projects
  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  // Function to load more projects
  const loadMoreProjects = () => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate loading more projects
    setTimeout(() => {
      // Generate new mock projects based on the existing ones but with modified titles
      const newProjects = mockProjects.map(project => ({
        ...project,
        id: project.id + page * mockProjects.length,
        title: `${project.title} ${page + 1}`
      }));
      
      setProjects(prev => [...prev, ...newProjects]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    }, 1000);
  };

  // Infinite scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      
      // Check if we've scrolled near the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="infinite-gallery">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={handleProjectClick}
          />
        ))}
      </div>
      
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-2 text-muted-foreground">Загрузка проектов...</p>
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </div>
  );
};

export default InfiniteGallery;
