import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { db } from '../firebase';
import { getSessionId } from '../utils/session';

const useLogVisit = () => {
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
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Development mode: Skipping Firebase logging');
            return;
        }

        if (!db) {
            console.error('Firebase not initialized');
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
                const timestamp = serverTimestamp();

                const documentData = {
                    timestamp,
                    userAgent: navigator.userAgent,
                    page: window.location.pathname,
                    referrer: document.referrer || null,
                    ipAddress,
                    sessionId,
                    deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
                    country,
                    browser: getBrowserName(),
                };

                await addDoc(collection(db, 'visits'), documentData);
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        };
        logVisit();
    }, [pathname, searchParams]);

    return null;
};

export default useLogVisit;
