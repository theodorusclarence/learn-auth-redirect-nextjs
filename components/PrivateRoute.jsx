import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/contexts/auth';
import FullPageLoader from './FullPageLoader';

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
        return <FullPageLoader />;
    }

    return children;
}
