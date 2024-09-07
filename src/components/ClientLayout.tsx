'use client';
import styles from './clientLayout.module.css';

import useLogVisit from '@/app/logVisits';
import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    useLogVisit();

    return <div className={styles.clientLayout}>{children}</div>;
};

export default ClientLayout;
