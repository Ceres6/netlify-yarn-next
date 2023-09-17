import React from 'react';
import Header from './header';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({
    children
}: LayoutProps) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}