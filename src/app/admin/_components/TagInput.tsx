'use client';

import { useState, KeyboardEvent } from 'react';
import { X, Plus } from 'lucide-react';

interface TagInputProps {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
}

export default function TagInput({ value = [], onChange, placeholder = 'Add item...' }: TagInputProps) {
    const [input, setInput] = useState('');

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    const addTag = () => {
        const trimmed = input.trim();
        if (trimmed && !value.includes(trimmed)) {
            onChange([...value, trimmed]);
            setInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        onChange(value.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className="w-full">
            <div className="mb-2 flex flex-wrap gap-2">
                {value.map((tag) => (
                    <span
                        key={tag}
                        className="flex items-center gap-1 rounded-[4px] bg-[#6DD33D]/10 hover:bg-[#6DD33D]/20 border border-[#6DD33D]/20 px-2 py-1 text-sm text-[#6DD33D] transition-colors"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="rounded-full hover:bg-[#6DD33D]/20 hover:text-white"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </span>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="flex-1 rounded-lg border border-[#333333] bg-[#141414] px-3 py-2 text-sm text-white placeholder-gray-500 shadow-sm focus:border-[#6DD33D] focus:outline-none focus:ring-1 focus:ring-[#6DD33D]"
                />
                <button
                    type="button"
                    onClick={addTag}
                    className="rounded-lg bg-[#333333] px-3 py-2 text-[#CCCCCC] hover:bg-[#444444] hover:text-white transition-colors"
                >
                    <Plus className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
