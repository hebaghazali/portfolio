import { v4 as uuidv4 } from 'uuid';

export const getSessionId = (): string => {
    let sessionId = localStorage.getItem('sessionId');

    if (!sessionId) {
        const uuid = uuidv4();
        localStorage.setItem('sessionId', uuid);
        sessionId = uuid;
    }

    return sessionId!;
};
