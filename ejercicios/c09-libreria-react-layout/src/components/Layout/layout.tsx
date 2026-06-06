import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#fcfbfe'
            }}>
            
            <Header />

            <main style={{ flexGrow: 1 }} className="py-4">
                {children}
            </main>

            <Footer />
        </div>
    );
}

