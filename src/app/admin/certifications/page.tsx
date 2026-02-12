'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Loader2 } from 'lucide-react';
import supabase from '../../../lib/supabase/client';
import DataTable, { Column } from '../_components/DataTable';

export default function CertificationsPage() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Order by issued_date desc
            const { data, error } = await supabase.from('certifications').select('*').order('issued_date', { ascending: false });
            if (!error && data) setData(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleDelete = async (id: string | number) => {
        if (!confirm('Delete this item?')) return;
        const { error } = await supabase.from('certifications').delete().eq('id', id);
        if (!error) setData(data.filter((item) => item.id !== id));
    };

    const columns: Column<any>[] = [
        { header: 'Title', accessorKey: 'title' },
        { header: 'Issuer', accessorKey: 'issuer' },
        { header: 'Date', accessorKey: 'issued_date' },
    ];

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Certifications</h1>
                    <p className="text-sm text-[#888888]">Awards and Certificates</p>
                </div>
                <Link href="/admin/certifications/new" className="flex items-center gap-2 rounded-lg bg-[#6DD33D] px-4 py-2 text-sm font-bold text-black hover:bg-[#5bc232]">
                    <Plus className="h-4 w-4" /> Add New
                </Link>
            </div>
            <DataTable data={data} columns={columns} onDelete={handleDelete} editUrl={(id) => `/admin/certifications/${id}`} />
        </div>
    );
}
