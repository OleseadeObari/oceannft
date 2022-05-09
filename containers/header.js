import Button from '../components/button';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Glasscard from '../components/glasscard';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftheader}>
                    <h1>Discover, collect, and sell <span>Timeless</span> NFTs</h1>
                    <p className={styles.leftheaderp}>The world's first and largest digital marketplace for crypto<br/> collectibles and non- fungible tokens (NFTs). </p>
                    <div className={styles.leftheaderlinks}>
                        <Button text='Explore' icon type='CTA'/>
                        <Link href=''>
                            <p className={styles.headerlink}>Create NFT's</p>
                        </Link>
                    </div>
                    <div className={styles.achievement}>
                        <div>
                            <h3>35m+</h3>
                            <p>Artwork</p>
                        </div>
                        <div className={styles.vline}></div>
                        <div>
                            <h3>18m+</h3>
                            <p>Auctions</p>
                        </div>
                        <div className={styles.vline}></div>
                        <div>
                            <h3>500k+</h3>
                            <p>Artists</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightheader}>
                    <img className={styles.rightheaderimg} src='/nft.png' alt='' />
                    <Glasscard 
                    position='absolute'
                    border='border-radius'
                    title='3D Abstract Hand'
                    img_src='/headerpp.png'
                    hours='18'
                    minutes='25'
                    seconds='44' />
                </div>
            </div>
        </div>
    );
}

export default Header;