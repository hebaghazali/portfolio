import './globals.css';
import type { Metadata } from 'next';

import Image from 'next/image';
import styles from './layout.module.css';
import { Nav } from '@/components/nav';

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
                    <Image src='/logo.svg' alt='Logo' width={60} height={32} priority />
                    <Nav />
                </header>
                {children}
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
