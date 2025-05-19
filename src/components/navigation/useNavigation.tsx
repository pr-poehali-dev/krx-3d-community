import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface User {
  isLoggedIn: boolean;
  // Можно добавить дополнительные поля пользователя
}

export const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("community");
  const location = useLocation();

  // Проверка авторизации пользователя
  useEffect(() => {
    const user = localStorage.getItem("krx-user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setIsLoggedIn(userData.isLoggedIn);
      } catch (e) {
        console.error("Failed to parse user data:", e);
        localStorage.removeItem("krx-user");
      }
    }
  }, []);

  // Обновление активного пункта меню в зависимости от URL
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveNavItem("community");
    } else if (location.pathname === "/learn") {
      setActiveNavItem("learn");
    } else if (location.pathname === "/shop") {
      setActiveNavItem("shop");
    } else if (location.pathname === "/jobs") {
      setActiveNavItem("jobs");
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("krx-user");
    setIsLoggedIn(false);
  };

  return {
    isMobileMenuOpen,
    isLoggedIn,
    activeNavItem,
    setActiveNavItem,
    toggleMobileMenu,
    handleLogout,
  };
};
