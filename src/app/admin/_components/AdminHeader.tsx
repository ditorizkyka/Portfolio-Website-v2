'use client';

import supabase from '../../../lib/supabase/client';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
        router.refresh();
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-[#1f1f1f] bg-black px-6">
            <h2 className="text-lg font-semibold text-white tracking-wide">
                Dashboard Overview
            </h2>
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#CCCCCC] transition-colors hover:bg-red-500/10 hover:text-red-500 border border-transparent hover:border-red-500/20"
            >
                <LogOut className="h-4 w-4" />
                Logout
            </button>
        </header>
    );
}
