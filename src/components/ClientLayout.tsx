'use client';

import LogVisit from '@/app/logVisits';
import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    return (
        <>
            <LogVisit />
            {children}
        </>
    );
};

export default ClientLayout;
