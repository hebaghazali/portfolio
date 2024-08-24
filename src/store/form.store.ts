import { create } from 'zustand';

interface FormState {
    contactForm: { name: string; email: string; message: string };
    setContactForm: (data: Partial<{ name: string; email: string; message: string }>) => void;
}

export const useFormStore = create<FormState>((set) => ({
    contactForm: { name: '', email: '', message: '' },
    setContactForm: (data) =>
        set((state) => ({
            contactForm: { ...state.contactForm, ...data },
        })),
}));
