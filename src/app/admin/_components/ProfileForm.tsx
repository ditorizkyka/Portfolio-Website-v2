'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import { Loader2, Save } from 'lucide-react';
import { Profile } from '../../../types/profile.d';

interface ProfileFormProps {
    initialData?: Profile;
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Profile>>({
        full_name: initialData?.full_name || '',
        short_name: initialData?.short_name || '',
        bio: initialData?.bio || '',
        email: initialData?.email || '',
        whatsapp_number: initialData?.whatsapp_number || '',
        url_linkedin: initialData?.url_linkedin || '',
        url_github: initialData?.url_github || '',
        url_instagram: initialData?.url_instagram || '',
        url_threads: initialData?.url_threads || '',
        cv_url: initialData?.cv_url || '',
        profile_image: initialData?.profile_image || '',
        avatar_url: initialData?.avatar_url || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('profile')
                .update(formData)
                .eq('id', initialData?.id); // Assuming single profile record, but safer to target by ID if available

            if (error) throw error;

            alert('Profile updated successfully!');
            router.refresh();
        } catch (error: any) {
            alert('Error updating profile: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] p-6 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
                {/* Personal Info */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-[#6DD33D]">Personal Information</h3>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Short Name (Nickname)</label>
                        <input
                            type="text"
                            name="short_name"
                            value={formData.short_name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">WhatsApp</label>
                        <input
                            type="tel"
                            name="whatsapp_number"
                            value={formData.whatsapp_number}
                            onChange={handleChange}
                            placeholder="+62..."
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>
                </div>

                {/* Media & Links */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-[#6DD33D]">Media & Links</h3>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Profile Image</label>
                        <ImageUploader
                            defaultImage={formData.profile_image}
                            onUpload={(url) => setFormData({ ...formData, profile_image: url })}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Avatar URL (Smaller/Icon)</label>
                        <ImageUploader
                            defaultImage={formData.avatar_url}
                            onUpload={(url) => setFormData({ ...formData, avatar_url: url })}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">CV URL</label>
                        <input
                            type="url"
                            name="cv_url"
                            value={formData.cv_url}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <input type="url" name="url_linkedin" value={formData.url_linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white" />
                        <input type="url" name="url_github" value={formData.url_github} onChange={handleChange} placeholder="GitHub URL" className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white" />
                        <input type="url" name="url_instagram" value={formData.url_instagram} onChange={handleChange} placeholder="Instagram URL" className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white" />
                        <input type="url" name="url_threads" value={formData.url_threads} onChange={handleChange} placeholder="Threads URL" className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white" />
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
                    Update Profile
                </button>
            </div>
        </form>
    );
}
