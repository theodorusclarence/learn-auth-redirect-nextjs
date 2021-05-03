import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import { useAuth } from '@/contexts/auth';

export default function Home() {
    const { user, login, isAuthenticated } = useAuth();

    return (
        <>
            <NextSeo />

            <main>
                <section className=''>
                    <div className='flex flex-col items-center justify-center min-h-screen space-y-4 layout'>
                        <h1>Learn Auth Redirect Next.js</h1>
                        <footer className='absolute text-gray-800 bottom-2'>
                            © {new Date().getFullYear()}
                        </footer>
                        <pre>
                            {JSON.stringify({ isAuthenticated }, null, 2)}
                        </pre>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                        <button className='mt-8' onClick={() => login()}>
                            login button
                        </button>
                        <CustomLink href='/blocked'>
                            go to /blocked page
                        </CustomLink>
                        <CustomLink href='/blocked-component'>
                            go to /blocked-component page
                        </CustomLink>
                        <p className='text-sm '>
                            Try to directly go to{' '}
                            <CustomLink href='http://localhost:3000/blocked'>
                                localhost:3000/blocked
                            </CustomLink>{' '}
                            or{' '}
                            <CustomLink href='http://localhost:3000/blocked-component'>
                                localhost:3000/blocked-component
                            </CustomLink>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
