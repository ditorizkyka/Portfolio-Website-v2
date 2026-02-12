'use client';

import { useEffect, useState } from 'react';
import supabase from '../../../lib/supabase/client';
import ProfileForm from '../_components/ProfileForm';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase.from('profile').select('*').single();
            if (!error && data) {
                setProfile(data);
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-[#6DD33D]" /></div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
            <p className="text-[#888888]">Manage your personal information and social links</p>
            {profile ? (
                <ProfileForm initialData={profile} />
            ) : (
                <div className="text-red-500">Profile data not found. Please populate the 'profile' table in Supabase.</div>
            )}
        </div>
    );
}
