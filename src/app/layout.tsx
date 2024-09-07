import type { Metadata } from 'next';
import './globals.css';

import { ClientLayout } from '@/components/clientLayout';
import { Nav } from '@/components/nav';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import styles from './layout.module.css';

export const metadata: Metadata = {
    title: 'Heba Ghazali | Portfolio',
    description:
        "Take a look at my work and experience my passion for software development. Whether it's creating intuitive user interfaces or optimizing backend systems, I'm committed to delivering high-quality results.",
    keywords: [
        'Heba',
        'Ghazali',
        'Portfolio',
        'Software',
        'Developer',
        'Developer Portfolio',
        'Web Developer',
        'Web Developer Portfolio',
        'Frontend Developer',
        'Frontend Developer Portfolio',
        'Backend Developer',
        'Backend Developer Portfolio',
    ],
    generator: 'Next.js',
    abstract: 'Heba Ghazali | Portfolio',
    applicationName: 'Heba Ghazali | Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <header className={styles.header}>
                    <Link href='/'>
                        <Image src='/images/logo.svg' alt='Logo' width={80} height={80} priority />
                    </Link>
                    <Nav mode='light' />
                </header>

                <Suspense fallback={<div>Loading...</div>}>
                    <ClientLayout>{children}</ClientLayout>
                </Suspense>

                <footer className={styles.footer}>
                    <div className={styles.footerNav}>
                        <Link href='/'>
                            <Image src='/images/logo-white.svg' alt='Logo' width={80} height={80} priority />
                        </Link>
                        <Nav mode='dark' />
                    </div>
                    <div className={styles.socials}>
                        <Link href='https://www.linkedin.com/in/hebaghazali/' target='_blank'>
                            <Image src='/images/icons/linkedin-white.svg' alt='Logo' width={24} height={24} priority />
                        </Link>
                        <Link href='https://github.com/hebaghazali' target='_blank'>
                            <Image src='/images/icons/github-white.svg' alt='Logo' width={24} height={24} priority />
                        </Link>
                        <p className={`body-3 ${styles.copyright}`}>
                            Developed by Heba Ghazali <br />
                            Design inspired by{' '}
                            <Link
                                href='https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE'
                                target='_blank'
                            >
                                FrontendMentor.io
                            </Link>
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
