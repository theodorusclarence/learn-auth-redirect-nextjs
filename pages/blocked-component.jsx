import { useAuth } from '@/contexts/auth';

export default function blockedComponent() {
    const { user, logout, isAuthenticated } = useAuth();

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
