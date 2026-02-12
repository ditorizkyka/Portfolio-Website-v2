'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { User, Zap, Shapes } from 'lucide-react';

interface MobileNavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const MobileTopNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { to: "/", icon: User, label: "HOME" },
    { to: "/projects", icon: Shapes, label: "PROJECTS" },
    { to: "/soft-skills", icon: Zap, label: "SKILLS" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-[#1f1f1f] py-3 z-50 md:hidden">

      <div className="flex justify-center items-center px-3">
        <div className="flex gap-1">
          {navItems.map((item) => (
            <MobileNavLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={pathname === item.to}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

const MobileNavLink = ({ to, icon: Icon, label, isActive }: MobileNavLinkProps) => {
  const baseClass = "flex items-center gap-2 px-5 py-3 rounded-lg border transition-all duration-300 ease-in-out";
  const activeClass = "bg-[#0A0A0B] border-[#333333] text-white shadow-lg";
  const inactiveClass = "border-transparent text-[#999999] hover:text-white hover:border-[#1f1f1f]";

  return (
    <Link href={to} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
      <Icon className={`w-4 h-4 ${isActive ? 'text-[#6DD33D]' : 'text-inherit'}`} />
      <span className="text-[10px] font-bold tracking-widest">{label}</span>
    </Link>
  );
};

export default MobileTopNav;