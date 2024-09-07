import styles from './horizontalLine.module.css';

export const HorizontalLine = ({ width }: { width: number }) => {
    return <div className={styles.horizontalLine} style={{ width: `${width}rem` }}></div>;
};
