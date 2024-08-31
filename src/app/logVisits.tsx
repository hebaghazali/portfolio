import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getSessionId } from '../utils/session';

const LogVisit = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getBrowserName = () => {
        if (navigator.userAgent.indexOf('Chrome') !== -1) return 'Chrome';
        else if (navigator.userAgent.indexOf('Safari') !== -1) return 'Safari';
        else if (navigator.userAgent.indexOf('Firefox') !== -1) return 'Firefox';
        else if (navigator.userAgent.indexOf('MSIE') !== -1 || !!document.DOCUMENT_NODE) return 'IE';
        else return 'Unknown';
    };

    const getCountry = async (): Promise<string> => {
        return await fetch('https://ipapi.co/country_name/')
            .then((res) => res.text())
            .catch(() => 'Unknown');
    };

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Development mode: Skipping Firebase logging');
            return;
        }

        if (!db) {
            console.error('Firebase not initialized');
            console.log(process.env);
            return;
        }

        const logVisit = async () => {
            try {
                const sessionId = getSessionId();
                const ipAddress = await fetch('https://api.ipify.org?format=json')
                    .then((res) => res.json())
                    .then((data) => data.ip)
                    .catch(() => 'Unavailable');
                const country = await getCountry();

                const documentData = {
                    timestamp: serverTimestamp(),
                    userAgent: navigator.userAgent,
                    page: window.location.pathname,
                    referrer: document.referrer || null,
                    ipAddress,
                    sessionId,
                    deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
                    country,
                    browser: getBrowserName(),
                };
                console.log(documentData);

                const documentId = `${sessionId}_${window.location.pathname.replace(/\//g, '_')}_${country}`;
                await setDoc(doc(db, 'visits', documentId), documentData, { merge: true });
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        };
        logVisit();
    }, [pathname, searchParams]);

    return <></>;
};

export default LogVisit;
