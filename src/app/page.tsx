'use client';

import { contactSchema } from '@/schemas/contact.schema';
import styles from './page.module.css';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { VerticalSpace } from '@/components/verticalSpace';
import Link from 'next/link';

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

    return (
        <main className={styles.main}>
            <div>
                <Image
                    src='/images/portrait-beautiful-young-asian-business-woman-work-from-home-with-laptop.jpg'
                    alt='homepage'
                    layout='fill'
                    objectFit='cover'
                />

                <div className={styles.description}>
                    <h2 className='heading-2'>
                        Hey, I'm Heba Ghazali and I love merging design with software engineering
                    </h2>
                    <button className='primary-button' onClick={scrollToAboutMeSection}>
                        About Me
                    </button>
                </div>
            </div>

            <VerticalSpace height={15} />

            <div className={styles.about} ref={aboutMeRef}>
                <Image src='/images/profile.jpg' alt='profile' width={938} height={938} />

                <div>
                    <h1 className='heading-1'>About Me</h1>
                    <p className='body-1'>
                        I'm a software engineer passionate about crafting innovative solutions. I specialize in
                        front-end with JavaScript, TypeScript, and React.js, and I'm also exploring back-end development
                        with Node.js, Python, and SQL. I focus on writing clean, maintainable code and love tackling
                        complex challenges. Based in Egypt, I'm open to both local and remote roles. When I'm not
                        coding, I enjoy listening to music. Check out my portfolio to see what I've been working on!
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
