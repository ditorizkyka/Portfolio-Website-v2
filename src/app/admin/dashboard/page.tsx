import { FolderGit2, Layers, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import '../../globals.css';

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard</h1>
                    <p className="mt-2 text-[#888888] text-lg">Manage your digital presence from one place.</p>
                </div>
                <div className="hidden sm:block">
                    <Link href="/" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#333333] bg-[#141414] text-[#CCCCCC] hover:bg-[#1f1f1f] hover:text-white transition-colors">
                        <span className="text-sm font-medium">View Live Site</span>
                        <ExternalLink className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Quick Actions / Highlights */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#1f1f1f] bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-6 shadow-2xl transition-all hover:border-[#6DD33D]/30 hover:shadow-[#6DD33D]/5">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-[#6DD33D]/5 blur-3xl group-hover:bg-[#6DD33D]/10 transition-colors" />

                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Projects</h3>
                            <p className="text-sm text-[#888888]">Showcase work</p>
                        </div>
                        <div className="rounded-xl bg-[#6DD33D]/10 p-3 text-[#6DD33D]">
                            <FolderGit2 className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-white tracking-tighter">--</span>
                            <span className="text-sm text-[#555555]">Active projects</span>
                        </div>
                    </div>

                    <Link href="/admin/projects" className="mt-6 flex items-center justify-between border-t border-[#1f1f1f] pt-4 text-sm font-medium text-[#888888] group-hover:text-white transition-colors">
                        <span>Manage Projects</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#1f1f1f] bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-6 shadow-2xl transition-all hover:border-blue-500/30 hover:shadow-blue-500/5">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                            <p className="text-sm text-[#888888]">Skills & Tools</p>
                        </div>
                        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                            <Layers className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-white tracking-tighter">--</span>
                            <span className="text-sm text-[#555555]">Technologies</span>
                        </div>
                    </div>

                    <Link href="/admin/tech-stack" className="mt-6 flex items-center justify-between border-t border-[#1f1f1f] pt-4 text-sm font-medium text-[#888888] group-hover:text-white transition-colors">
                        <span>Manage Stacks</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Card 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#1f1f1f] bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-6 shadow-2xl transition-all hover:border-purple-500/30 hover:shadow-purple-500/5">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 rounded-full bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-colors" />

                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Experience</h3>
                            <p className="text-sm text-[#888888]">Career path</p>
                        </div>
                        <div className="rounded-xl bg-purple-500/10 p-3 text-purple-500">
                            <Briefcase className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-white tracking-tighter">--</span>
                            <span className="text-sm text-[#555555]">Roles added</span>
                        </div>
                    </div>

                    <Link href="/admin/experience" className="mt-6 flex items-center justify-between border-t border-[#1f1f1f] pt-4 text-sm font-medium text-[#888888] group-hover:text-white transition-colors">
                        <span>Manage Experience</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Decorator */}
            <div className="fixed bottom-0 right-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#6DD33D] blur-[200px] rounded-full mix-blend-screen" />
            </div>
        </div>
    );
}
