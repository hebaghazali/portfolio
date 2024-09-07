import Link from 'next/link';
import styles from './homeFooterCTA.module.css';
import { HorizontalLine } from './horizontalLine';

export const HomeFooterCTA = () => {
    return (
        <div className={styles.homeFooterCTA}>
            <h2 className='heading-2'>Interested in doing a project together?</h2>
            <HorizontalLine width={53.4} />
            <Link href='/contact'>
                <button className='button'>Contact Me</button>
            </Link>
        </div>
    );
};
