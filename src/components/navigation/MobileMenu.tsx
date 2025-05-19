
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MobileMenuProps {
  isOpen: boolean;
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeNavItem,
  setActiveNavItem,
  onLoginClick,
  onRegisterClick,
  isLoggedIn,
  handleLogout
}) => {
  // Если меню закрыто, не рендерим его содержимое
  if (!isOpen) return null;
  
  // Навигационные ссылки
  const navLinks = [
    { id: 'explore', label: 'Исследовать' },
    { id: 'learn', label: 'Учиться' },
    { id: 'shop', label: 'Магазин' },
    { id: 'jobs', label: 'Вакансии' },
  ];

  return (
    <div className="md:hidden p-4 bg-background border-t">
      <div className="flex flex-col space-y-4">
        <Input
          type="search"
          placeholder="Поиск..."
          className="mb-2"
        />
        
        {navLinks.map(link => (
          <div 
            key={link.id}
            className={`py-2 ${activeNavItem === link.id ? 'text-primary font-medium' : ''}`} 
            onClick={() => setActiveNavItem(link.id)}
          >
            {link.label}
          </div>
        ))}
        
        {!isLoggedIn && (
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" onClick={onLoginClick}>
              Вход
            </Button>
            <Button className="btn-krx" onClick={onRegisterClick}>
              Регистрация
            </Button>
          </div>
        )}
        
        {isLoggedIn && (
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" onClick={() => window.location.href = '/profile'}>
              Профиль
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              Выйти
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
