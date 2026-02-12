'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import { Loader2, Save } from 'lucide-react';

interface TechStackFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function TechStackForm({ initialData, isEdit = false }: TechStackFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        category: initialData?.category || 'Language',
        icon_url: initialData?.icon_url || '',
        doc_url: initialData?.doc_url || '',
        is_featured: initialData?.is_featured || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const dataToSave = { ...formData };
            let error;

            if (isEdit) {
                const { error: updateError } = await supabase.from('tech_stacks').update(dataToSave).eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase.from('tech_stacks').insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;
            router.push('/admin/tech-stack');
            router.refresh();
        } catch (error: any) {
            alert('Error saving tech stack: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] p-6 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        >
                            <option value="Language">Language</option>
                            <option value="Framework">Framework</option>
                            <option value="Database">Database</option>
                            <option value="Tool">Tool</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Documentation URL</label>
                        <input
                            type="url"
                            name="doc_url"
                            value={formData.doc_url}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div className="flex items-center gap-2 pt-4">
                        <input
                            type="checkbox"
                            id="is_featured"
                            name="is_featured"
                            checked={formData.is_featured}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-[#333333] bg-[#141414] text-[#6DD33D] focus:ring-[#6DD33D]"
                        />
                        <label htmlFor="is_featured" className="text-sm font-medium text-[#CCCCCC]">Featured Stack?</label>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Icon</label>
                        <ImageUploader
                            defaultImage={formData.icon_url}
                            onUpload={(url) => setFormData({ ...formData, icon_url: url })}
                        />
                        <p className="mt-1 text-xs text-[#666666]">SVG or PNG recommended.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#1f1f1f]">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-[#6DD33D] px-6 py-2.5 text-sm font-bold text-black shadow-lg hover:bg-[#5bc232] transition-all active:scale-95"
                >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    {isEdit ? 'Update Tech Stack' : 'Create Tech Stack'}
                </button>
            </div>
        </form>
    );
}
