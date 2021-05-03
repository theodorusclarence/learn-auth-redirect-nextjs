import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/auth';
import PrivateRoute from '@/components/PrivateRoute';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <AuthProvider>
                <PrivateRoute protectedRoutes={['/blocked-component']}>
                    <DefaultSeo {...SEO} />
                    <Component {...pageProps} />
                </PrivateRoute>
            </AuthProvider>
        </>
    );
}

export default MyApp;
