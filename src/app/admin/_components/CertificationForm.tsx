'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../../lib/supabase/client';
import ImageUploader from './ImageUploader';
import { Loader2, Save } from 'lucide-react';

interface CertificationFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function CertificationForm({ initialData, isEdit = false }: CertificationFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        issuer: initialData?.issuer || '',
        issued_date: initialData?.issued_date || '',
        image_url: initialData?.image_url || '',
        credential_link: initialData?.credential_link || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const dataToSave = { ...formData };
            let error;

            if (isEdit) {
                const { error: updateError } = await supabase.from('certifications').update(dataToSave).eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase.from('certifications').insert([dataToSave]);
                error = insertError;
            }

            if (error) throw error;
            router.push('/admin/certifications');
            router.refresh();
        } catch (error: any) {
            alert('Error saving certification: ' + error.message);
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
                            required
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Issuer</label>
                        <input
                            type="text"
                            name="issuer"
                            value={formData.issuer}
                            onChange={handleChange}
                            placeholder="e.g. Google Cloud"
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Issued Date</label>
                        <input
                            type="date"
                            name="issued_date"
                            value={formData.issued_date}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Credential URL</label>
                        <input
                            type="url"
                            name="credential_link"
                            value={formData.credential_link}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#CCCCCC]">Image / Badge</label>
                        <ImageUploader
                            defaultImage={formData.image_url}
                            onUpload={(url) => setFormData({ ...formData, image_url: url })}
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
                    {isEdit ? 'Update Certification' : 'Create Certification'}
                </button>
            </div>
        </form>
    );
}
