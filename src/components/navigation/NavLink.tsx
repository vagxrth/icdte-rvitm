import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '', onClick }) => {
  return (
    <RouterLink
      to={`/${to}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
};

export default NavLink; 