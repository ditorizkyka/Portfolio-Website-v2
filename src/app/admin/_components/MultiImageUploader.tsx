'use client';

import { useState } from 'react';
import supabase from '../../../lib/supabase/client';
import { Loader2, Upload, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MultiImageUploaderProps {
    onUpload: (urls: string[]) => void;
    defaultImages?: string[];
    bucket?: string;
}

export default function MultiImageUploader({
    onUpload,
    defaultImages = [],
    bucket = 'portfolio-assets'
}: MultiImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState<string[]>(defaultImages);

    const uploadImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);

            if (!event.target.files || event.target.files.length === 0) {
                return;
            }

            const files = Array.from(event.target.files);
            const newUrls: string[] = [];

            for (const file of files) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from(bucket)
                    .upload(filePath, file);

                if (uploadError) {
                    console.error('Error uploading file:', file.name, uploadError);
                    continue;
                }

                const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
                newUrls.push(data.publicUrl);
            }

            const updatedImages = [...images, ...newUrls];
            setImages(updatedImages);
            onUpload(updatedImages);
        } catch (error: any) {
            alert('Error uploading images: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const removeImage = (indexToRemove: number) => {
        const updatedImages = images.filter((_, index) => index !== indexToRemove);
        setImages(updatedImages);
        onUpload(updatedImages);
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                {images.map((url, index) => (
                    <div key={index} className="relative h-24 w-24 overflow-hidden rounded-xl border border-[#333333] group">
                        <Image
                            src={url}
                            alt={`Uploaded ${index}`}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute right-1 top-1 rounded-full bg-red-500/80 p-1 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:bg-red-600"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}

                <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-[#333333] bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#6DD33D]/50 transition-colors">
                    {uploading ? (
                        <Loader2 className="h-6 w-6 animate-spin text-[#6DD33D]" />
                    ) : (
                        <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                            <Upload className="h-6 w-6 text-[#666666] hover:text-[#6DD33D] transition-colors" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={uploadImages}
                                disabled={uploading}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            </div>
            <p className="text-xs text-[#666666]">Upload multiple images for gallery.</p>
        </div>
    );
}
