'use client';

import { useState } from 'react';
import AdminSidebar from './_components/AdminSidebar';
import AdminHeader from './_components/AdminHeader';
import { Menu, X } from 'lucide-react';
import '../globals.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-black text-white font-space-grotesk overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <AdminSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden w-full">
                {/* Mobile Header Toggle */}
                <div className="flex items-center justify-between border-b border-[#1f1f1f] bg-black p-4 lg:hidden">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-white hover:text-[#6DD33D]"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <span className="font-bold text-[#6DD33D]">ADMIN PANEL</span>
                    <div className="w-6" /> {/* Spacer */}
                </div>

                <div className="hidden lg:block">
                    <AdminHeader />
                </div>

                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
