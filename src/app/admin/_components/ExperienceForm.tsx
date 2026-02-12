'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import { Loader2, Save } from 'lucide-react';

interface ExperienceFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function ExperienceForm({ initialData, isEdit = false }: ExperienceFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        company_name: initialData?.company_name || '',
        company_logo: initialData?.company_logo || '',
        role: initialData?.role || '',
        employment_type: initialData?.employment_type || '', // Full-time, etc.
        duration: initialData?.duration || '',
        start_date: initialData?.start_date || '',
        is_current: initialData?.is_current || false,
        description: initialData?.description || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                const { error: updateError } = await supabase.from('experiences').update(dataToSave).eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase.from('experiences').insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;
            router.push('/admin/experience');
            router.refresh();
        } catch (error: any) {
            alert('Error saving experience: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] p-6 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Company Name</label>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g. Software Engineer"
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Employment Type</label>
                        <input
                            type="text"
                            name="employment_type"
                            value={formData.employment_type}
                            onChange={handleChange}
                            placeholder="e.g. Full-time, Internship"
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Start Date/Year</label>
                            <input
                                type="text"
                                name="start_date"
                                value={formData.start_date}
                                onChange={handleChange}
                                placeholder="e.g. Jan 2023"
                                className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Duration</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="e.g. 1 yr 2 mos"
                                className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="is_current"
                            name="is_current"
                            checked={formData.is_current}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-[#333333] bg-[#141414] text-[#6DD33D] focus:ring-[#6DD33D]"
                        />
                        <label htmlFor="is_current" className="text-sm font-medium text-[#CCCCCC]">I currently work here</label>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Company Logo</label>
                        <ImageUploader
                            defaultImage={formData.company_logo}
                            onUpload={(url) => setFormData({ ...formData, company_logo: url })}
                        />
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
                    {isEdit ? 'Update Experience' : 'Create Experience'}
                </button>
            </div>
        </form>
    );
}
