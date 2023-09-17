import React from 'react';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <div>
                <Component {...pageProps} />
            </div>
        </UserProvider>
    );
}

export default MyApp;
