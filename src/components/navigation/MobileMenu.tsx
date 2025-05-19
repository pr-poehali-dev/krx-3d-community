import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

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
  handleLogout,
}) => {
  if (!isOpen) return null;

  // Навигационные ссылки с путями
  const navLinks = [
    { id: "explore", label: "Работы сообщества", path: "/" },
    { id: "learn", label: "Учиться", path: "/learn" },
    { id: "shop", label: "Магазин", path: "/shop" },
    { id: "jobs", label: "Вакансии", path: "/jobs" },
  ];

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-black/50 z-10" />
      <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background shadow-xl z-20 flex flex-col">
        <div className="p-4 flex-1 overflow-auto">
          <div className="space-y-3 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`block py-2 px-3 rounded-md ${
                  activeNavItem === link.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setActiveNavItem(link.id)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Separator className="my-4" />

          {isLoggedIn ? (
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="User" className="mr-2 h-4 w-4" />
                Мой профиль
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                Настройки
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-destructive hover:text-destructive"
                onClick={handleLogout}
              >
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={onLoginClick}
              >
                Войти
              </Button>
              <Button className="w-full" onClick={onRegisterClick}>
                Регистрация
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
