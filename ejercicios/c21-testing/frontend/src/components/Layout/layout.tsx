import React from 'react';
import { Footer } from './footer';
import { NavbarPixi } from '../NavbarPixi'; 
import { Banner } from '../Banner';

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
            
            <NavbarPixi />
            <Banner />

            <main style={{ flexGrow: 1 }} className="py-4">
                {children}
            </main>

            <Footer />
        </div>
    );
}

