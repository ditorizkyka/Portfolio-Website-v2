'use client';

import { useEffect, useState, use } from 'react';
import supabase from '../../../../lib/supabase/client';
import ProjectForm from '../../_components/ProjectForm';
import { Loader2 } from 'lucide-react';

export default function EditProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = use(props.params);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('id', params.id)
                .single();

            if (error) {
                console.error('Error fetching project:', error);
            } else {
                setProject(data);
            }
            setLoading(false);
        };

        if (params.id) {
            fetchProject();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" />
            </div>
        );
    }

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Edit Project</h1>
            <ProjectForm initialData={project} isEdit />
        </div>
    );
}
