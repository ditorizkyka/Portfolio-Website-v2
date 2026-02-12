'use client';

import TechStackForm from '../../_components/TechStackForm';

export default function NewTechStackPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Add Tech Stack</h1>
            <TechStackForm />
        </div>
    );
}
