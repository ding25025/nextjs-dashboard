import { signIn } from 'next-auth/react';

const GoogleSignInButton = ({ callbackUrl }: { callbackUrl: string }) => {
    return (
        <button
            onClick={() => signIn('google', { callbackUrl })}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
        >
            Sign in with Google
        </button>
    );
};

export default GoogleSignInButton;
