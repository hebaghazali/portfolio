'use client';

import { contactSchema } from '@/schemas/contact.schema';
import styles from './page.module.css';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { VerticalSpace } from '@/components/verticalSpace';

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
                    src='/images/image-homepage-hero@2x.jpg'
                    alt='homepage'
                    width={1110}
                    height={600}
                    placeholder='blur'
                    blurDataURL='/images/image-homepage-hero.jpg'
                />

                <div className={`${styles.description} heading-1`}>
                    <p>Hey, I'm Heba Ghazali and I love building beautiful websites</p>
                    <button className='primary-button' onClick={scrollToAboutMeSection}>
                        About Me
                    </button>
                </div>
            </div>

            <VerticalSpace height={15} />

            <div className={styles.about} ref={aboutMeRef}>
                <Image
                    src='/images/image-homepage-profile@2x.jpg'
                    alt='profile'
                    width={540}
                    height={600}
                    placeholder='blur'
                    blurDataURL='/images/image-homepage-profile.jpg'
                />

                <div>
                    <h1 className='heading-1'>About Me</h1>
                    <p className='body-1'>
                        I’m a junior front-end developer looking for a new role in an exciting company. I focus on
                        writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing
                        JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based
                        in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not
                        coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run
                        or cycling. I’d love you to check out my work.
                    </p>
                    <button className='button'>Go To Portfolio</button>
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
