import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Header() {
    const { user } = useUser()
    return (
        <nav>
            {user ? (
                
                    <a href="/api/auth/logout">Log Out</a>
                
            ) : (
                
                    <a href="/api/auth/login">Log In</a>
                
            )}
        </nav>
    );
}
