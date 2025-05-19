import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  onRegisterClick,
  onLoginClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("explore");

  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem("krx-user");
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(userData.isLoggedIn);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("krx-user");
    setIsLoggedIn(false);
  };

  return (
    <header className="border-b sticky top-0 backdrop-blur-lg bg-background/80 z-20 w-full">
      <div className="px-4 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 mr-2 bg-gradient-krx rounded-none glow-subtle">
                <span className="text-dark-green font-bold">K</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">
                KRX Community
              </span>
            </a>
          </div>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            <div
              className={`nav-item rounded-none ${activeNavItem === "explore" ? "active" : ""}`}
              onClick={() => setActiveNavItem("explore")}
            >
              Исследовать
            </div>
            <div
              className={`nav-item rounded-none ${activeNavItem === "learn" ? "active" : ""}`}
              onClick={() => setActiveNavItem("learn")}
            >
              Учиться
            </div>
            <div
              className={`nav-item rounded-none ${activeNavItem === "shop" ? "active" : ""}`}
              onClick={() => setActiveNavItem("shop")}
            >
              Магазин
            </div>
            <div
              className={`nav-item rounded-none ${activeNavItem === "jobs" ? "active" : ""}`}
              onClick={() => setActiveNavItem("jobs")}
            >
              Вакансии
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden md:flex items-center relative rounded-none">
              <Input
                type="search"
                placeholder="Поиск..."
                className="pl-8 w-[200px] rounded-none search-input"
              />
              <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Auth buttons or profile */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => (window.location.href = "/profile")}
                  className="hidden md:flex rounded-none button-outlined"
                >
                  <Icon name="User" className="mr-1 h-4 w-4" />
                  Профиль
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-none button-outlined"
                >
                  <Icon name="User" className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="hidden md:flex rounded-none button-outlined"
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={onLoginClick}
                  className="hidden md:flex rounded-none button-outlined"
                >
                  Вход
                </Button>
                <Button
                  className="btn-krx-outlined hidden md:flex rounded-none text-dark-green"
                  onClick={onRegisterClick}
                >
                  Регистрация
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-none button-outlined"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <div className="flex flex-col space-y-4">
            <Input
              type="search"
              placeholder="Поиск..."
              className="mb-2 rounded-none search-input"
            />

            <button
              className={`nav-button-mobile ${activeNavItem === "explore" ? "active" : ""}`}
              onClick={() => setActiveNavItem("explore")}
            >
              Исследовать
            </button>
            <button
              className={`nav-button-mobile ${activeNavItem === "learn" ? "active" : ""}`}
              onClick={() => setActiveNavItem("learn")}
            >
              Учиться
            </button>
            <button
              className={`nav-button-mobile ${activeNavItem === "shop" ? "active" : ""}`}
              onClick={() => setActiveNavItem("shop")}
            >
              Магазин
            </button>
            <button
              className={`nav-button-mobile ${activeNavItem === "jobs" ? "active" : ""}`}
              onClick={() => setActiveNavItem("jobs")}
            >
              Вакансии
            </button>

            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  onClick={onLoginClick}
                  className="rounded-none button-outlined"
                >
                  Вход
                </Button>
                <Button
                  className="btn-krx-outlined rounded-none text-dark-green"
                  onClick={onRegisterClick}
                >
                  Регистрация
                </Button>
              </div>
            )}

            {isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/profile")}
                  className="rounded-none button-outlined"
                >
                  Профиль
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="rounded-none button-outlined"
                >
                  Выйти
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
