import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'My portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                {/* <header>
                    <nav>My Navigation Bar</nav>
                </header> */}
                {children}
                {/* <footer>My Footer</footer> */}
            </body>
        </html>
    );
}
