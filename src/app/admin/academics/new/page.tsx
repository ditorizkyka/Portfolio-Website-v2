'use client';

import AcademicsForm from '../../_components/AcademicsForm';

export default function NewAcademicPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Add Academic Record</h1>
            <AcademicsForm />
        </div>
    );
}
