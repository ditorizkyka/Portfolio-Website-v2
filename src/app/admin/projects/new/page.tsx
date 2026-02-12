'use client';

import ProjectForm from '../../_components/ProjectForm';

export default function NewProjectPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Add New Project</h1>
            <ProjectForm />
        </div>
    );
}
