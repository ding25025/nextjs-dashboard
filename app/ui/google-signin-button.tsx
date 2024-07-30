'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@/app/ui/button'

interface GoogleSignInButtonProps {
    children: React.ReactNode;
    callbackUrl: string;
}

const GoogleSignInButton = ({ children, callbackUrl }: GoogleSignInButtonProps) => {
    const loginWithGoogle = async () => {
        await signIn('google', { callbackUrl });
    };

    return (
        <Button
            onClick={loginWithGoogle}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
            {children}
        </Button>
    );
};

export default GoogleSignInButton;