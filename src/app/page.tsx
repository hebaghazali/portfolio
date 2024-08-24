'use client';

import { contactSchema } from '@/schemas/contact.schema';
import React, { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const validatedData = contactSchema.parse(formData);
            setError(null);
            // Send validated data to server or API
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <main>
            <h1 className='heading-1'>Jived fox nymph grabs quick waltz</h1>
            <p className='body-1'>Sed egestas, ante et vulputate volutpat, eros pede semper est...</p>

            {/* <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='Name'
                />
                <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='Email'
                />
                <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder='Your Message'
                />
                <button type='submit'>Send Message</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form> */}
        </main>
    );
}
