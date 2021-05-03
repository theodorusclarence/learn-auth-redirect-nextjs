import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';

export default function blocked() {
    const router = useRouter();

    const { isAuthenticated, user, logout } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    });

    if (!isAuthenticated) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <h1 className='animate-spin'>Full Page Loader</h1>
            </div>
        );
    }

    return (
        <div className='py-12 layout'>
            <h1>If you can see this, it means you are logged in</h1>
            <pre>
                isauthenticated: {JSON.stringify(isAuthenticated, null, 2)}
            </pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}
