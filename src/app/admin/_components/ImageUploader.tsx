'use client';

import { useState } from 'react';
import supabase from '../../../lib/supabase/client';
import { Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';

interface ImageUploaderProps {
    onUpload: (url: string) => void;
    defaultImage?: string;
    bucket?: string;
}

export default function ImageUploader({
    onUpload,
    defaultImage = '',
    bucket = 'portfolio-assets'
}: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(defaultImage);

    const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

            setPreview(data.publicUrl);
            onUpload(data.publicUrl);
        } catch (error: any) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const removeImage = () => {
        setPreview('');
        onUpload('');
    };

    return (
        <div className="flex flex-col gap-4">
            {preview ? (
                <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-[#333333] group">
                    <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="object-cover"
                    />
                    <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-1 top-1 rounded-full bg-red-500/80 p-1 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:bg-red-600"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            ) : (
                <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-[#333333] bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#6DD33D]/50 transition-colors">
                    {uploading ? (
                        <Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" />
                    ) : (
                        <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                            <Upload className="h-8 w-8 text-[#666666] hover:text-[#6DD33D] transition-colors" />
                            <span className="mt-2 text-xs text-[#666666]">Upload Image</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={uploadImage}
                                disabled={uploading}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            )}
        </div>
    );
}
