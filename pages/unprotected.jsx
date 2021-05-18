import CustomLink from '@/components/CustomLink';
import { useAuth } from '@/contexts/auth';

export default function unprotected() {
    const { isAuthenticated } = useAuth();

    return (
        <div className='py-12 space-y-4 layout'>
            <h1 className='text-green-400'>
                This page is unprotected, anyone can see this
            </h1>
            <pre>{JSON.stringify({ isAuthenticated }, null, 2)}</pre>
            <CustomLink href='/'>Back To Home</CustomLink>
        </div>
    );
}
