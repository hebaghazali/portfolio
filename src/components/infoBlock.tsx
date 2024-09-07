import Image from 'next/image';
import Link from 'next/link';
import styles from './infoBlock.module.css';

export const InfoBlock = ({
    title,
    description,
    imagePath,
    imageSize,
    projectLink,
    buttonText,
    isProject = true,
}: {
    title: string;
    description: string;
    imagePath: string;
    projectLink: string;
    buttonText: string;
    imageSize: { width: number; height: number };
    isProject?: boolean;
}) => {
    return (
        <div className={`${styles.wrapper} ${isProject ? styles.projectWrapper : ''}`}>
            <Image src={imagePath} alt={title} width={imageSize.width} height={imageSize.height} />

            <div>
                <h2 className='heading-2'>{title}</h2>
                <p className='body-1'>{description}</p>

                <Link href={projectLink}>
                    <button className='button'>{buttonText}</button>
                </Link>
            </div>
        </div>
    );
};
