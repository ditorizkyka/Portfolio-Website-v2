'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Loader2, Star } from 'lucide-react';
import supabase from '../../../lib/supabase/client';
import DataTable, { Column } from '../_components/DataTable';

export default function ProjectsPage() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProjects(data || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id: string | number) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            // Ensure ID is passed correctly. If it's a number/string mismatch, this might fail.
            const { error } = await supabase.from('projects').delete().match({ id });

            if (error) {
                console.error('Supabase delete error:', error);
                throw error;
            }

            // Only update state if delete was successful
            setProjects((prev) => prev.filter((p) => p.id !== id));
            alert('Project deleted successfully');
        } catch (error: any) {
            alert('Error deleting project: ' + error.message);
            console.error(error);
        }
    };

    const columns: Column<any>[] = [
        {
            header: 'Title',
            accessorKey: (row) => (
                <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{row.title}</span>
                    {row.is_featured && <Star className="h-3 w-3 fill-[#6DD33D] text-[#6DD33D]" />}
                </div>
            )
        },
        { header: 'Category', accessorKey: 'category' },
        { header: 'Slug', accessorKey: 'slug' },
        {
            header: 'Tech Stack',
            accessorKey: (row) => row.tech_stack?.slice(0, 3).join(', ') + (row.tech_stack?.length > 3 ? '...' : '') || '-'
        },
    ];

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Projects</h1>
                    <p className="text-sm text-[#888888]">Manage your portfolio projects</p>
                </div>
                <Link
                    href="/admin/projects/new"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6DD33D] px-4 py-2 text-sm font-bold text-black shadow-lg hover:bg-[#5bc232] transition-colors sm:w-auto"
                >
                    <Plus className="h-4 w-4" />
                    Add Project
                </Link>
            </div>

            <DataTable
                data={projects}
                columns={columns}
                onDelete={handleDelete}
                editUrl={(id) => `/admin/projects/${id}`}
            />
        </div>
    );
}
