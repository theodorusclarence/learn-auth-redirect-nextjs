import { useAuth } from '@/contexts/auth';

export default function blockedComponent() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <div className='py-12 space-y-4 layout'>
            <h1>If you can see this, it means you are logged in</h1>
            <p>This page did the auth checking on PrivateRoute component.</p>
            <pre>{JSON.stringify({ isAuthenticated }, null, 2)}</pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => logout()}>logout & remove token</button>
        </div>
    );
}
