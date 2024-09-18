'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Hero from '/public/hero.png';
import Button from '@/components/Button/Button';
import useWindowWidth from '@/components/useWindowWidth';

export default function Home() {
    const windowWidth = useWindowWidth();

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Better design for your digital products.</h1>
                {windowWidth > 1280 ? (
                    ''
                ) : (
                    <div className={styles.item}>
                        <Image src={Hero} alt="Home" className={styles.img} />
                    </div>
                )}
                <p className={styles.desc}>
                    Turning your Idea into Reality. We bring together the teams from the global tech
                    industry.
                </p>
                <Button url="/portfolio" text="See Our Works" />
            </div>
            {windowWidth > 1280 ? (
                <div className={styles.item}>
                    <Image src={Hero} alt="Home" className={styles.img} />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
