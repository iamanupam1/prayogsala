'use client';

import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';
import TopBar from '../ui/TopBar';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
} 