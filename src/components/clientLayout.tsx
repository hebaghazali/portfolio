'use client';
import styles from './clientLayout.module.css';

import { ReactNode } from 'react';

interface ClientLayoutProps {
    children: ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
    // useLogVisit();

    return <div className={styles.clientLayout}>{children}</div>;
};
