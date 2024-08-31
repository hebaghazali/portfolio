import type { Metadata } from 'next';
import './globals.css';

import ClientLayout from '@/components/ClientLayout';
import { Nav } from '@/components/nav';
import Image from 'next/image';
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
                    <Image src='/images/logo.svg' alt='Logo' width={80} height={80} priority />
                    <Nav />
                </header>
                <ClientLayout>{children}</ClientLayout>
                {/* <footer>
                    <p>
                        Developed by Heba Ghazali <br />
                        <small>
                            Design inspired by <a href='https://www.frontendmentor.io'>FrontendMentor.io</a>
                        </small>
                    </p>
                </footer> */}
            </body>
        </html>
    );
}
