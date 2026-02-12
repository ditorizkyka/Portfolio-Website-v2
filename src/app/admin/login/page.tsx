'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import { Loader2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import '../../globals.css';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [redirecting, setRedirecting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error, data } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            console.log('Login successful:', data);

            setSuccess(true);

            // Wait for initial success animation
            setTimeout(() => {
                setRedirecting(true);
                // Use window.location.href to force a full page reload and ensure cookies are sent to middleware
                window.location.href = '/admin/dashboard';
            }, 1000);

        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Failed to login');
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black p-4 font-space-grotesk">
                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                    <div className="h-24 w-24 rounded-full bg-[#6DD33D]/20 flex items-center justify-center mb-6 relative">
                        {redirecting ? (
                            <>
                                <div className="absolute inset-0 rounded-full border-2 border-[#6DD33D] border-t-transparent animate-spin" />
                                <ArrowRight className="h-10 w-10 text-[#6DD33D]" />
                            </>
                        ) : (
                            <CheckCircle2 className="h-12 w-12 text-[#6DD33D] animate-bounce" />
                        )}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        {redirecting ? 'Navigating...' : 'Welcome Back!'}
                    </h2>
                    <p className="text-[#888888] animate-pulse">
                        {redirecting ? 'Preparing your dashboard...' : 'Login successful'}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4 font-space-grotesk relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#6DD33D]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md space-y-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] p-8 shadow-2xl relative z-10 transition-all duration-500">
                <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6DD33D]/10 text-[#6DD33D] mb-6 border border-[#6DD33D]/20">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                        Admin Portal
                    </h2>
                    <p className="mt-2 text-sm text-[#888888]">
                        Sign in to manage your portfolio content
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#CCCCCC] mb-1">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-3 text-white placeholder-gray-600 shadow-sm focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D] sm:text-sm transition-all"
                                placeholder="admin@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#CCCCCC] mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-3 text-white placeholder-gray-600 shadow-sm focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D] sm:text-sm transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="rounded-md bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-500 text-center animate-pulse">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="group flex w-full justify-center rounded-lg bg-[#6DD33D] px-4 py-3 text-sm font-bold text-black shadow-lg shadow-[#6DD33D]/20 hover:bg-[#5bc232] hover:shadow-[#6DD33D]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6DD33D] disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
