import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/contexts/auth';

export default function PrivateRoute({ protectedRoutes, children }) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (!isAuthenticated && pathIsProtected) {
            router.push('/');
        }
    });

    if (!isAuthenticated && pathIsProtected) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <h1 className='animate-spin'>Full Page Loader</h1>
            </div>
        );
    }

    return children;
}
