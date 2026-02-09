'use client';
import { Shapes, Zap, User } from 'lucide-react';
import Image from 'next/image';
import NavItem from '../../molecules/NavItem';
import { Profile } from '@/src/types/profile';
// Define the props interface explicitly

const SidebarLeft : React.FC<{ profile: Profile }> = ({ profile })  => {
//   const { pathname } = useLocation();

  const navLinks = [
    { to: '/', icon: User, label: 'Home' },
    { to: '/projects', icon: Shapes, label: 'Projects' },
    { to: '/soft-skills', icon: Zap, label: 'Skills' }, // Mengikuti logika 'to' anda sebelumnya
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-16 pl-20 pr-15 bg-black border-r border-[#1f1f1f] flex-col items-center z-30 py-6">
      <div className="bg-black">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-15 h-15 rounded-full bg-[#1f1f1f] flex items-center justify-center shadow-2xl">
          {/* Inner circle container */}
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image 
              src={profile.profile_image}
              alt="Profile" 
              fill // Mengisi container w-10 h-10
              sizes="40px" // Memberitahu browser ukuran aset yang dibutuhkan
              className="object-cover"
              priority // Karena ini adalah elemen penting di sidebar (LCP candidate)
            />
          </div>
        </div>
      </div>
    </div>

      <nav className="flex flex-col items-center justify-center grow space-y-6">
        {navLinks.map((link) => (
          <NavItem
            key={link.to}
            to={link.to}
            icon={link.icon}
            isActive={"" === link.to}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SidebarLeft;