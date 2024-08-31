'use client';

import useLogVisit from '@/app/logVisits';
import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    useLogVisit();

    return children;
};

export default ClientLayout;
