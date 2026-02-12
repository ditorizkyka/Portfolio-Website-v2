'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import TagInput from './TagInput';
import { Loader2, Save } from 'lucide-react';

interface SocialProjectFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function SocialProjectForm({ initialData, isEdit = false }: SocialProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        role: initialData?.role || '',
        label: initialData?.label || '',
        duration: initialData?.duration || '',
        description: initialData?.description || '',
        image_url: initialData?.image_url || '',
        skills_learned: initialData?.skills_learned || [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSlugGen = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
        setFormData({ ...formData, slug });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const dataToSave = { ...formData };
            let error;

            if (isEdit) {
                const { error: updateError } = await supabase
                    .from('social_projects')
                    .update(dataToSave)
                    .eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('social_projects')
                    .insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;

            router.push('/admin/social-projects');
            router.refresh();
        } catch (error: any) {
            alert('Error saving social project: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] p-6 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            onBlur={!isEdit && !formData.slug ? handleSlugGen : undefined}
                            required
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Slug</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
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
                            placeholder="e.g. Lead Volunteer"
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Label/Type</label>
                            <input
                                type="text"
                                name="label"
                                value={formData.label}
                                onChange={handleChange}
                                placeholder="e.g. Community Service"
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
                                placeholder="e.g. 2023 - Present"
                                className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                            />
                        </div>
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
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Cover Image</label>
                        <ImageUploader
                            defaultImage={formData.image_url}
                            onUpload={(url) => setFormData({ ...formData, image_url: url })}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Skills Learned</label>
                        <TagInput
                            value={formData.skills_learned || []}
                            onChange={(tags) => setFormData({ ...formData, skills_learned: tags })}
                            placeholder="Add skill (e.g. Leadership)..."
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
                    {isEdit ? 'Update Social Project' : 'Create Social Project'}
                </button>
            </div>
        </form>
    );
}
