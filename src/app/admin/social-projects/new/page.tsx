'use client';

import SocialProjectForm from '../../_components/SocialProjectForm';

export default function NewSocialProjectPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Add Social Project</h1>
            <SocialProjectForm />
        </div>
    );
}
