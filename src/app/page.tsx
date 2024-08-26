'use client';

import { contactSchema } from '@/schemas/contact.schema';
import styles from './page.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { VerticalSpace } from '@/components/verticalSpace';
import Link from 'next/link';

const logVisit = async () => {
    try {
        await fetch('/api/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'logged...' }),
        });
    } catch (error) {
        console.error('Error logging visit:', error);
    }
};

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState<string | null>(null);
    const aboutMeRef = useRef<HTMLDivElement | null>(null);

    const scrollToAboutMeSection = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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

    useEffect(() => {
        logVisit();
    }, []);

    return (
        <main className={styles.main}>
            <div>
                <Image
                    src='/images/portrait-beautiful-young-asian-business-woman-work-from-home-with-laptop.jpg'
                    alt='homepage'
                    fill
                    style={{ objectFit: 'cover' }}
                />

                <div className={styles.description}>
                    <h2 className='heading-2'>
                        Hey, I'm Heba Ghazali and I love solving complex problems with creative frontend solutions.
                    </h2>
                    <button className='primary-button' onClick={scrollToAboutMeSection}>
                        About Me
                    </button>
                </div>
            </div>

            <VerticalSpace height={15} />

            <div className={styles.about} ref={aboutMeRef}>
                <Image src='/images/profile-2.jpg' alt='profile' width={938} height={938} />

                <div>
                    <h1 className='heading-1'>About Me</h1>
                    <p className='body-1'>
                        I'm a software engineer passionate about building exceptional digital products. I excel in
                        creating user-friendly interfaces and have a strong foundation in web development technologies.
                        I'm also exploring back-end development to gain a deeper understanding of how applications work.
                        I'm always eager to learn new things and take on challenging projects. Based in Egypt, I'm open
                        to both local and remote opportunities. When I'm not coding, I enjoy listening to music. Check
                        out my portfolio to see my work!
                    </p>

                    <Link href='/portfolio'>
                        <button className='button'>Go To Portfolio</button>
                    </Link>
                </div>
            </div>

            <VerticalSpace height={15} />

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
