'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import {
    LayoutDashboard,
    FolderKanban,
    Briefcase,
    GraduationCap,
    Award,
    Layers,
    UserCircle
} from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    { name: 'Social Projects', href: '/admin/social-projects', icon: Briefcase },
    { name: 'Experience', href: '/admin/experience', icon: Briefcase },
    { name: 'Academics', href: '/admin/academics', icon: GraduationCap },
    { name: 'Certifications', href: '/admin/certifications', icon: Award },
    { name: 'Tech Stack', href: '/admin/tech-stack', icon: Layers },
    { name: 'Profile', href: '/admin/profile', icon: UserCircle },
];

interface AdminSidebarProps {
    onClose?: () => void;
}

export default function AdminSidebar({ onClose }: AdminSidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col border-r border-[#1f1f1f] bg-black text-white">
            <div className="flex h-16 items-center justify-between border-b border-[#1f1f1f] px-4">
                <h1 className="text-xl font-bold tracking-wider">
                    ADMIN <span className="text-[#6DD33D]">PANEL</span>
                </h1>
                {/* Mobile Close Button */}
                <button
                    onClick={onClose}
                    className="lg:hidden text-[#888888] hover:text-white"
                >
                    <X className="h-6 w-6" />
                </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                {navigation.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose} // Close sidebar on nav click (mobile)
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-[#6DD33D]/10 text-[#6DD33D] border border-[#6DD33D]/20'
                                : 'text-[#CCCCCC] hover:bg-[#1f1f1f] hover:text-white'
                                }`}
                        >
                            <item.icon className={`h-5 w-5 ${isActive ? 'text-[#6DD33D]' : 'text-[#888888] group-hover:text-white'}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
