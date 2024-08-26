'use client';

import Link from 'next/link';
import styles from './nav.module.css';
import { usePathname } from 'next/navigation';

export const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
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
