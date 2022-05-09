import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src='/logo.png' alt='website llogo' />
                    <h1>Ocean<span>NFT</span></h1>
                </div>
                <div className={styles.navlinks}>
                    <Link href='/'>
                        <a><p>Market</p></a>
                    </Link>
                    <Link href='/'>
                        <a><p>Features</p></a>
                    </Link>
                    <Link href='/'>
                        <a><p>Community</p></a>
                    </Link>
                </div>
                <div className={styles.navicons}>
                    <img src='/cart.svg' alt='cart icon'/>
                    <img src='/profile.svg' alt='profile icon' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;