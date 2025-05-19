
import React from 'react';

interface NavLinkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick }) => {
  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

interface MainNavLinksProps {
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
}

const MainNavLinks: React.FC<MainNavLinksProps> = ({ activeNavItem, setActiveNavItem }) => {
  // Навигационные ссылки
  const navLinks = [
    { id: 'explore', label: 'Исследовать' },
    { id: 'learn', label: 'Учиться' },
    { id: 'shop', label: 'Магазин' },
    { id: 'jobs', label: 'Вакансии' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navLinks.map(link => (
        <NavLink 
          key={link.id}
          label={link.label}
          isActive={activeNavItem === link.id}
          onClick={() => setActiveNavItem(link.id)}
        />
      ))}
    </nav>
  );
};

export default MainNavLinks;
