
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AuthButtonsProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  handleLogout: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
  handleLogout
}) => {
  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" onClick={() => window.location.href = '/profile'} className="hidden md:flex">
          <Icon name="User" className="mr-1 h-4 w-4" />
          Профиль
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="User" className="h-5 w-5" />
        </Button>
        <Button variant="outline" onClick={handleLogout} className="hidden md:flex">
          Выйти
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="ghost" 
        onClick={onLoginClick}
        className="hidden md:flex"
      >
        Вход
      </Button>
      <Button 
        className="btn-krx hidden md:flex"
        onClick={onRegisterClick}
      >
        Регистрация
      </Button>
    </div>
  );
};

export default AuthButtons;
