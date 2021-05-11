import { ImSpinner5 } from 'react-icons/im';

export default function FullPageLoader() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-gray-800'>
            <ImSpinner5 className='mb-4 text-6xl animate-spin' />
            <p>Loading...</p>
        </div>
    );
}
