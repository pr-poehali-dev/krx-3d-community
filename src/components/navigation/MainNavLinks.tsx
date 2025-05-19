import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  label: string;
  to: string;
  isActive: boolean;
  onClick: () => void;
  color?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  to,
  isActive,
  onClick,
  color,
}) => {
  return (
    <Link
      to={to}
      className={`nav-item px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground/80 hover:bg-muted"}`}
      onClick={onClick}
      style={
        color
          ? {
              color: isActive ? color : "inherit",
              backgroundColor: isActive ? `${color}10` : "transparent",
            }
          : {}
      }
    >
      {label}
    </Link>
  );
};

interface MainNavLinksProps {
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
}

const MainNavLinks: React.FC<MainNavLinksProps> = ({
  activeNavItem,
  setActiveNavItem,
}) => {
  // Навигационные ссылки с маршрутами и цветами
  const navLinks = [
    { id: "explore", label: "Работы сообщества", path: "/", color: "#3b82f6" },
    { id: "learn", label: "Учиться", path: "/learn", color: "#10b981" },
    { id: "shop", label: "Магазин", path: "/shop", color: "#f59e0b" },
    { id: "jobs", label: "Вакансии", path: "/jobs", color: "#ec4899" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          label={link.label}
          to={link.path}
          isActive={activeNavItem === link.id}
          onClick={() => setActiveNavItem(link.id)}
          color={link.color}
        />
      ))}
    </nav>
  );
};

export default MainNavLinks;
