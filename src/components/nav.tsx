'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';

export const Nav = ({ mode }: { mode: 'light' | 'dark' }) => {
    const pathname = usePathname();

    return (
        <nav className={`${styles.nav} ${mode === 'dark' ? styles.dark : ''}`}>
            <ul>
                <li>
                    <Link href='/' className={pathname === '/' ? styles.active : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/portfolio' className={pathname === '/portfolio' ? styles.active : ''}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href='/blog' className={pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href='/contact' className={pathname === '/contact' ? styles.active : ''}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
