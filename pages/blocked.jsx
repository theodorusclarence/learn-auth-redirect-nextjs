import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import FullPageLoader from '@/components/FullPageLoader';

export default function blocked() {
    const router = useRouter();

    const { isAuthenticated, user, logout } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, []);

    if (!isAuthenticated) {
        return <FullPageLoader />;
    }

    return (
        <div className='py-12 space-y-4 layout'>
            <h1>If you can see this, it means you are logged in</h1>
            <p>This page did the auth checking directly on the page file.</p>
            <pre>{JSON.stringify({ isAuthenticated }, null, 2)}</pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}
