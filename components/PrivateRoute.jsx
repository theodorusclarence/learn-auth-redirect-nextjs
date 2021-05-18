import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/contexts/auth';
import FullPageLoader from './FullPageLoader';

export default function PrivateRoute({ protectedRoutes, children }) {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();

    const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathIsProtected) {
            // Redirect route, you can point this to /login
            router.push('/');
        }
    }, [isLoading, isAuthenticated, pathIsProtected]);

    if ((isLoading || !isAuthenticated) && pathIsProtected) {
        return <FullPageLoader />;
    }

    return children;
}
