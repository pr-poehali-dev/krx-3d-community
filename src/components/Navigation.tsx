import React from "react";
import Logo from "@/components/navigation/Logo";
import SearchBar from "@/components/navigation/SearchBar";
import MainNavLinks from "@/components/navigation/MainNavLinks";
import AuthButtons from "@/components/navigation/AuthButtons";
import MobileMenuToggle from "@/components/navigation/MobileMenuToggle";
import MobileMenu from "@/components/navigation/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigation } from "@/components/navigation/useNavigation";

interface NavigationProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  onRegisterClick,
  onLoginClick,
}) => {
  const {
    isMobileMenuOpen,
    isLoggedIn,
    activeNavItem,
    setActiveNavItem,
    toggleMobileMenu,
    handleLogout,
  } = useNavigation();

  return (
    <header className="border-b sticky top-0 backdrop-blur-lg bg-background/80 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo и бренд */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Основная навигация - Desktop */}
          <MainNavLinks
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
          />

          {/* Правая часть - поиск, тема, аутентификация */}
          <div className="flex items-center space-x-2">
            {/* Поиск */}
            <SearchBar />

            {/* Переключатель темы */}
            <ThemeToggle />

            {/* Кнопки аутентификации или профиля */}
            <AuthButtons
              isLoggedIn={isLoggedIn}
              onLoginClick={onLoginClick}
              onRegisterClick={onRegisterClick}
              handleLogout={handleLogout}
            />

            {/* Кнопка мобильного меню */}
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              toggleMenu={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Navigation;
