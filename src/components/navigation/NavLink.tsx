import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '', onClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`cursor-pointer ${className}`}
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <RouterLink
      to={`/#${to}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
};

export default NavLink; 