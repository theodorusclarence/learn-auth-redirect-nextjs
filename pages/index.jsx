import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import { useAuth } from '@/contexts/auth';

export default function Home() {
    const { user, logout, login, isAuthenticated } = useAuth();

    return (
        <>
            <NextSeo />

            <main>
                <section className=''>
                    <div className='flex flex-col items-center justify-center min-h-screen space-y-4 layout'>
                        <h1>Learn Auth Redirect Next.js</h1>
                        <p className='max-w-prose'>
                            If we open a page and it is not logged in, it will
                            show a full page loader, then when it is fully
                            rendered, useEffect will run and push to home page.
                        </p>
                        <CustomLink
                            href='https://github.com/theodorusclarence/learn-auth-redirect-nextjs'
                            className='max-w-prose'
                        >
                            Check out the implementation on github
                        </CustomLink>
                        <footer className='absolute text-gray-800 bottom-2'>
                            © {new Date().getFullYear()}
                        </footer>
                        <pre>
                            {JSON.stringify({ isAuthenticated }, null, 2)}
                        </pre>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                        {isAuthenticated ? (
                            <button
                                className='mt-8 underline'
                                onClick={() => logout()}
                            >
                                logout button
                            </button>
                        ) : (
                            <button
                                className='mt-8 underline'
                                onClick={() => login()}
                            >
                                login button
                            </button>
                        )}
                        <CustomLink href='/blocked'>
                            go to /blocked page
                        </CustomLink>
                        <CustomLink href='/blocked-component'>
                            go to /blocked-component page
                        </CustomLink>
                        <p className='text-sm '>
                            Try to directly go to{' '}
                            <CustomLink
                                href={`${window.location.origin}/blocked`}
                            >
                                {window.location.origin}/blocked
                            </CustomLink>{' '}
                            or{' '}
                            <CustomLink
                                href={`${window.location.origin}/blocked-component`}
                            >
                                {window.location.origin}/blocked-component
                            </CustomLink>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
