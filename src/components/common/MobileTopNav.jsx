import { Link, useLocation } from 'react-router-dom';
import { User, Zap, Shapes } from 'lucide-react';

const MobileTopNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseClass = "flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors";
  const activeClass = "bg-[#0A0A0B] border-[#1f1f1f] text-white";
  const inactiveClass = "border-[#1f1f1f] text-[#CCCCCC]";

  return (
    <div className="fixed top-0 left-0 right-0 bg-black border-b border-[#1f1f1f] py-3 z-30 md:hidden">
      <div className="flex justify-evenly">
        <div className="flex gap-2 px-4">
          <Link to="/" className={`${baseClass} ${isActive('/') ? activeClass : inactiveClass}`}>
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">HOME</span>
          </Link>

          <Link to="/projects" className={`${baseClass} ${isActive('/projects') ? activeClass : inactiveClass}`}>
            <Shapes className="w-5 h-5" />
            <span className="text-xs font-medium">PROJECTS</span>
          </Link>

          <Link to="/skills" className={`${baseClass} ${isActive('/skills') ? activeClass : inactiveClass}`}>
            <Zap className="w-5 h-5" />
            <span className="text-xs font-medium">SKILLS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileTopNav;
