'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import MultiImageUploader from './MultiImageUploader';
import TagInput from './TagInput';
import { Loader2, Save } from 'lucide-react';

interface ProjectFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function ProjectForm({ initialData, isEdit = false }: ProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        short_description: initialData?.short_description || '',
        long_description: initialData?.long_description || '',
        images: initialData?.images || [], // Array of URLs
        tech_stack: initialData?.tech_stack || [],
        repo_link: initialData?.repo_link || '',
        demo_link: initialData?.demo_link || '',
        category: initialData?.category || 'Web App',
        is_featured: initialData?.is_featured || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
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
            const dataToSave = {
                ...formData,
            };

            let error;
            if (isEdit) {
                const { error: updateError } = await supabase
                    .from('projects')
                    .update(dataToSave)
                    .eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('projects')
                    .insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;

            router.push('/admin/projects');
            router.refresh();
        } catch (error: any) {
            alert('Error saving project: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] p-6 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column: Basic Info */}
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
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        >
                            <option value="Web App">Web App</option>
                            <option value="Mobile App">Mobile App</option>
                            <option value="Desktop App">Desktop App</option>
                            <option value="Design">Design</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Short Description</label>
                        <textarea
                            name="short_description"
                            value={formData.short_description}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Brief summary for cards..."
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Long Description (Markdown)</label>
                        <textarea
                            name="long_description"
                            value={formData.long_description}
                            onChange={handleChange}
                            rows={8}
                            placeholder="Full project details..."
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>
                </div>

                {/* Right Column: Media, Links, Tech */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="is_featured"
                            name="is_featured"
                            checked={formData.is_featured}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-[#333333] bg-[#141414] text-[#6DD33D] focus:ring-[#6DD33D]"
                        />
                        <label htmlFor="is_featured" className="text-sm font-medium text-[#CCCCCC]">Feature this project?</label>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Project Gallery (Multi-upload)</label>
                        <MultiImageUploader
                            defaultImages={formData.images}
                            onUpload={(urls) => setFormData({ ...formData, images: urls })}
                        />
                        <p className="mt-1 text-xs text-[#666666]">First image will be used as a thumbnail if needed.</p>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Tech Stack</label>
                        <TagInput
                            value={formData.tech_stack || []}
                            onChange={(tags) => setFormData({ ...formData, tech_stack: tags })}
                            placeholder="Add tech (e.g. Next.js, OpenAI)..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Demo Link</label>
                            <input
                                type="url"
                                name="demo_link"
                                value={formData.demo_link}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Repo Link</label>
                            <input
                                type="url"
                                name="repo_link"
                                value={formData.repo_link}
                                onChange={handleChange}
                                placeholder="https://github.com/..."
                                className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#1f1f1f]">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-[#6DD33D] px-6 py-2.5 text-sm font-bold text-black shadow-lg hover:bg-[#5bc232] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6DD33D] disabled:opacity-50 transition-all active:scale-95"
                >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    {isEdit ? 'Update Project' : 'Create Project'}
                </button>
            </div>
        </form>
    );
}
