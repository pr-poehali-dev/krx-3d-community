
import { useState, useEffect } from 'react';

export interface User {
  isLoggedIn: boolean;
  // Можно добавить дополнительные поля пользователя
}

export const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('explore');

  // Проверка авторизации пользователя
  useEffect(() => {
    const user = localStorage.getItem('krx-user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setIsLoggedIn(userData.isLoggedIn);
      } catch (e) {
        console.error('Failed to parse user data:', e);
        localStorage.removeItem('krx-user');
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('krx-user');
    setIsLoggedIn(false);
  };

  return {
    isMobileMenuOpen,
    isLoggedIn,
    activeNavItem,
    setActiveNavItem,
    toggleMobileMenu,
    handleLogout
  };
};
