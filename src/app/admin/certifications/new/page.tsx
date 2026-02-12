'use client';

import CertificationForm from '../../_components/CertificationForm';

export default function NewCertificationPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Add Certification</h1>
            <CertificationForm />
        </div>
    );
}
