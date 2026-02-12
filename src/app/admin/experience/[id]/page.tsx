'use client';

import { useEffect, useState, use } from 'react';
import supabase from '../../../../lib/supabase/client';
import ExperienceForm from '../../_components/ExperienceForm';
import { Loader2 } from 'lucide-react';

export default function EditExperiencePage(props: { params: Promise<{ id: string }> }) {
    const params = use(props.params);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('experiences').select('*').eq('id', params.id).single();
            if (!error) setData(data);
            setLoading(false);
        };
        if (params.id) fetchData();
    }, [params.id]);

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" /></div>;
    if (!data) return <div>Not found</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Edit Experience</h1>
            <ExperienceForm initialData={data} isEdit />
        </div>
    );
}
