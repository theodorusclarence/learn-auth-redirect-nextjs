import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

import { useAuth } from '@/contexts/auth';
import CustomLink from '@/components/CustomLink';

export default function Home() {
    const { user, logout, login, isAuthenticated, loginWithToken } = useAuth();
    const [originLocation, setOriginLocation] = useState(
        'http://localhost:3000'
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setOriginLocation(window.location.origin);
        }
    }, []);

    const addToken = () => {
        loginWithToken();
    };

    return (
        <>
            <NextSeo />

            <main>
                <section className=''>
                    <div className='flex flex-col min-h-screen py-12 space-y-4 text-center layout'>
                        <h1>Learn Auth Redirect Next.js</h1>
                        <p className='mx-auto max-w-prose'>
                            If we open a page and it is not logged in, it will
                            show a full page loader, then when it is fully
                            rendered, useEffect will run and push to home page.
                        </p>
                        <p className='mx-auto mt-4 max-w-prose'>
                            The blocked-unhandled will show the case when not
                            using full page loader, and it will flash the
                            content
                        </p>
                        <CustomLink
                            href='https://theodorusclarence/blog/nextjs-redirect-no-flashing'
                            className='mx-auto max-w-prose'
                        >
                            Check out the blog post about this
                        </CustomLink>
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
                        <div className='!mt-8 space-y-4 flex flex-col items-center'>
                            <p className='mt-4 text-lg text-blue-900'>
                                Setting up token, if you add token, then you are
                                considered logged in even in a new tab
                            </p>
                            <button className='underline' onClick={addToken}>
                                Add Token on Local Storage
                            </button>
                            <button className='underline' onClick={logout}>
                                Remove Token on Local Storage
                            </button>
                        </div>
                        <p className='!mt-12 text-lg text-blue-900 '>
                            List of page (using Next.js Link), will authorized
                            if login (token & no token):
                        </p>
                        <div className='flex flex-col items-center space-y-2'>
                            <CustomLink href='/unprotected'>
                                go to /unprotected page (everyone can access
                                even if not logged in)
                            </CustomLink>
                            <CustomLink href='/blocked-unhandled'>
                                go to /blocked-unhandled page (will flash
                                content, try opening a new tab to see more
                                clearly)
                            </CustomLink>
                            <CustomLink href='/blocked'>
                                go to /blocked page (won't show content if not
                                authorized)
                            </CustomLink>
                            <CustomLink href='/blocked-component'>
                                go to /blocked-component page
                            </CustomLink>
                        </div>
                        <p className='mt-4 text-lg text-blue-900'>
                            Try to directly go to (will open a new tab), will
                            only authorized if using token:
                        </p>
                        <div className='flex flex-col items-center space-y-2'>
                            <CustomLink href={`${originLocation}/unprotected`}>
                                {originLocation}
                                /unprotected
                            </CustomLink>
                            <CustomLink
                                href={`${originLocation}/blocked-unhandled`}
                            >
                                {originLocation}
                                /blocked-unhandled
                            </CustomLink>
                            <CustomLink href={`${originLocation}/blocked`}>
                                {originLocation}
                                /blocked
                            </CustomLink>
                            <CustomLink
                                href={`${originLocation}/blocked-component`}
                            >
                                {originLocation}
                                /blocked-component
                            </CustomLink>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
